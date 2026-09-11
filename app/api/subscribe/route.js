import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Admin notification
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Subscriber</h2>
        <p>Email: ${email}</p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `,
    };

    // Confirmation to subscriber
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to our Newsletter",
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You have been added to our mailing list. You'll receive updates, insights, and industry news from us.</p>
        <p>If you didn't subscribe, please ignore this email.</p>
        <br />
        <p>Best regards,<br />ACTPL Group</p>
      `,
    };

    await Promise.all([transporter.sendMail(adminMail), transporter.sendMail(userMail)]);

    return new Response(
      JSON.stringify({ success: true, message: "Subscription successful" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to subscribe. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}