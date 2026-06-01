import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!process.env.SES_SMTP_USER || !process.env.SES_SMTP_PASSWORD) {
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SES_SMTP_USER,
      pass: process.env.SES_SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: "contato@renatodecker.com",
    to: "contato@renatodecker.com",
    replyTo: email,
    subject: `Contato via site — ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}
