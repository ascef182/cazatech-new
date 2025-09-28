import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    const { name, email, message, phone, company } = body as {
      name?: string;
      email?: string;
      message?: string;
      phone?: string;
      company?: string;
    };
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "API_KEY não configurada" },
        { status: 500 }
      );
    }

    // Modo teste: se API_KEY === "TEST", não envia e-mail, apenas simula sucesso
    if (apiKey === "TEST") {
      return NextResponse.json({ ok: true, message: "Simulado (TEST)" });
    }

    const referenceWord = process.env.CONTACT_REF || "";

    const mailerSend = new MailerSend({ apiKey });

    const sentFrom = new Sender("support@caza-tech.com", "CazaTech Site");
    const replyTo = new Sender(email, name);
    const recipients = [
      new Recipient("support@caza-tech.com", "Suporte CazaTech"),
    ];

    const subject = `Contato pelo site${
      referenceWord ? ` [${referenceWord}]` : ""
    }: ${name}`;
    const html = `${
      referenceWord
        ? `<p><strong>Referência:</strong> ${referenceWord}</p>`
        : ""
    }
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>`;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(replyTo)
      .setSubject(subject)
      .setHtml(html)
      .setText(
        `Nome: ${name}\nEmail: ${email}${phone ? `\nTelefone: ${phone}` : ""}${
          company ? `\nEmpresa: ${company}` : ""
        }\n\n${message}`
      );

    await mailerSend.email.send(emailParams);

    // Confirmation email to client
    const confirmationParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient(email, name)])
      .setSubject("Recebemos sua mensagem – CazaTech")
      .setHtml(
        `<div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>Olá ${name}!</h2>
          <p>Recebemos sua mensagem e retornaremos em até 24h úteis.</p>
          <p><strong>Resumo:</strong></p>
          <div style="background:#f5f5f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${message
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</div>
          <p style="color:#666;font-size:12px;">Este é um e-mail automático. Por favor, responda a este e-mail se precisar complementar as informações.</p>
        </div>`
      )
      .setText(
        `Recebemos sua mensagem e retornaremos em até 24h úteis.\n\n${message}`
      );

    try {
      await mailerSend.email.send(confirmationParams);
    } catch (e) {
      // Não falhar a requisição se o e-mail de confirmação não for enviado
    }

    return NextResponse.json({
      ok: true,
      message: "Mensagem enviada com sucesso",
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Erro interno ao enviar o email" },
      { status: 500 }
    );
  }
}
