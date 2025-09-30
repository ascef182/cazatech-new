import { NextResponse } from "next/server";
import { Resend } from "resend";
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

    const { name, email, message, phone, company, objective, budget } =
      body as {
        name?: string;
        email?: string;
        message?: string;
        phone?: string;
        company?: string;
        objective?: string;
        budget?: string;
      };
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const referenceWord = process.env.CONTACT_REF || "";

    const resendKey = process.env.RESEND_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const from = process.env.FROM_EMAIL || "noreply@caza-tech.com";
      const support = process.env.SUPPORT_EMAIL || "support@caza-tech.com";

      await resend.emails.send({
        from,
        to: [support],
        reply_to: email,
        subject: `Contato pelo site${
          referenceWord ? ` [${referenceWord}]` : ""
        }: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            ${
              referenceWord
                ? `<p><strong>Referência:</strong> ${referenceWord}</p>`
                : ""
            }
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
            ${objective ? `<p><strong>Objetivo:</strong> ${objective}</p>` : ""}
            ${budget ? `<p><strong>Orçamento:</strong> ${budget}</p>` : ""}
            <p><strong>Mensagem:</strong></p>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          </div>
        `,
      });

      await resend.emails.send({
        from: `CazaTech <${from}>`,
        to: [email],
        subject: "Recebemos sua mensagem – CazaTech",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2>Olá ${name}!</h2>
            <p>Recebemos sua mensagem e retornaremos em até 24h úteis.</p>
            <div style="background:#f5f5f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${message
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</div>
          </div>
        `,
      });
    } else {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        return NextResponse.json(
          { ok: false, error: "API_KEY não configurada" },
          { status: 500 }
        );
      }
      if (apiKey === "TEST") {
        return NextResponse.json({ ok: true, message: "Simulado (TEST)" });
      }
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
          `Nome: ${name}\nEmail: ${email}${
            phone ? `\nTelefone: ${phone}` : ""
          }${company ? `\nEmpresa: ${company}` : ""}\n\n${message}`
        );
      await mailerSend.email.send(emailParams);
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
