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

  if (!process.env.YAHOO_USER || !process.env.YAHOO_APP_PASSWORD) {
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.YAHOO_USER,
      pass: process.env.YAHOO_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.YAHOO_USER,
    to: "contato@renatodecker.com",
    replyTo: email,
    subject: `Contato via site — ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}
