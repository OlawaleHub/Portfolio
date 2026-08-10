// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/lib/data";

// Force Node.js runtime (Resend needs the Node fetch, not edge).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  // 1. Parse the body.
  let name = "";
  let email = "";
  let message = "";

  try {
    const body = await request.json();
    name = String(body.name || "").trim();
    email = String(body.email || "").trim();
    message = String(body.message || "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // 2. Validate.
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 422 }
    );
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 422 }
    );
  }
  if (message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long (max 4000 characters)." },
      { status: 422 }
    );
  }

  // 3. If Resend isn't configured, fail gracefully — the client falls back to mailto.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: "Email service not configured.",
        fallback: "mailto",
      },
      { status: 503 }
    );
  }

  // 4. Send via Resend.
  try {
    const resend = new Resend(apiKey);

    // The "from" domain must be a verified sending domain in your Resend account.
    // Using onboarding@resend.dev works out of the box for testing only.
    const fromAddress = process.env.RESEND_FROM || "onboarding@resend.dev";
    const toAddress = process.env.RESEND_TO || profile.email;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;padding:24px;color:#0f172a">
          <h2 style="margin:0 0 16px">New message from your portfolio</h2>
          <p style="margin:0 0 8px"><strong>From:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
          <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong while sending." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  const apos = "&" + "#39;";
  return String(str)
    .replace(/&/g, amp)
    .replace(/</g, lt)
    .replace(/>/g, gt)
    .replace(/"/g, quot)
    .replace(/'/g, apos);
}