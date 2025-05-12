import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.YOUR_EMAIL],
      subject: `New message from ${email}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
