import nodemailer from 'nodemailer';

export function getEmailTransporter() {
  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn(
      'Email environment variables are not set. Email functionality will not work.'
    );
  }

  // Create a transporter
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

export function getContactEmailTemplate(
  name: string,
  email: string,
  subject: string = '',
  message: string
) {
  return {
    from: process.env.EMAIL_USER,
    to: 'duselkay@gmail.com', // The website owner's email
    replyTo: email,
    subject: `Contact Form: ${subject || 'New message from website'}`,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}
Message:
${message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
  <h3 style="color: #555; margin-top: 20px;">Message:</h3>
  <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px;">
    ${message.replace(/\n/g, '<br>')}
  </div>
</div>
    `,
  };
} 