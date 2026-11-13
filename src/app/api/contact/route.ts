import { NextResponse } from "next/server";

// In-memory rate limiting map (IP -> { count, resetAt })
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 seconds
const MAX_REQUESTS = 5; // Max 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. IP determination for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    if (ip !== "unknown-ip" && isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse payload safely
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "Portfolio Inbound Inquiry";

    // 3. Strict server-side validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 3000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    // 4. Optional external email delivery if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "ujjwalmishra002005@gmail.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [receiverEmail],
            reply_to: email,
            subject: `[Portfolio] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });
      } catch {
        // Silently continue if Resend fails so user still gets a friendly response
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please email me directly at ujjwalmishra002005@gmail.com." },
      { status: 500 }
    );
  }
}
