import { NextRequest, NextResponse } from "next/server";

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

  // TODO: wire up an email provider here (e.g. Resend, SendGrid, nodemailer)
  // Example with Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "site@renatodecker.com",
  //     to: "renatodecker@yahoo.com.br",
  //     subject: `Contact from ${name}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });

  return NextResponse.json({ ok: true });
}
