"use server";

import nodemailer from "nodemailer";

const email_user = process.env.EMAIL_USERNAME;
const email_password = process.env.EMAIL_PASSWORD;

const email_to = process.env.EMAIL_TO;

export const sendEmail = async (name, email, message, subject) => {
  try {
    if (!name || !email || !message || !subject) {
      throw new Error("Missing fields");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mailersend.net",
      port: 587,
      secure: false,
      auth: {
        user: email_user,
        pass: email_password,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email_user}>`,
      to: email_to,
      replyTo: email,
      subject: subject,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true, status: 200 };
  } catch (error) {
    console.error("Email error:", error);
    throw new Error(error.message);
  }
};
