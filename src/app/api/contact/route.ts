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

    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
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
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>`;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(replyTo)
      .setSubject(subject)
      .setHtml(html)
      .setText(`Nome: ${name}\nEmail: ${email}\n\n${message}`);

    await mailerSend.email.send(emailParams);

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
