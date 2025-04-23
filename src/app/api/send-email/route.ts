import { NextResponse } from 'next/server';
import { getEmailTransporter, getContactEmailTemplate } from '@/lib/email';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get email transporter
    const transporter = getEmailTransporter();
    
    // Get email template
    const mailOptions = getContactEmailTemplate(name, email, subject, message);

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 