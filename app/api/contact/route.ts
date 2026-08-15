import { NextResponse } from "next/server";
import { Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
        },
        { status: 400 },
      );
    }

    const { name, email, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["dhanushs4827@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `
You have received a new message through your portfolio contact form.

CONTACT DETAILS
────────────────────────────────
Name: ${name}
Email: ${email}

MESSAGE
────────────────────────────────
${message}

────────────────────────────────
This message was submitted through your portfolio website.
  `.trim(),
    });

    if (error) {
      console.log("err", error);
      return NextResponse.json(
        {
          error: "Email not send",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Mail sent successfully",
      id: data.id,
    });
  } catch (err) {
    console.log("err", err);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
