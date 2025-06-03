import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, phone, company, service, message }: FormData = req.body;

  // Server-side validation
  if (!name || !email || !company || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format' 
    });
  }

  // Configure your SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'mail.skunkworksdigital.co.za', // Your mail server
    port: 587, // Typically 587 for TLS or 465 for SSL
    secure: false, // True for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // e.g., info@skunkworksdigital.co.za
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      // May be needed for self-signed certificates
      rejectUnauthorized: false
    }
  });

  // Email content
  const mailOptions = {
    from: `"SkunkWorks Website Form" <${process.env.EMAIL_USER}>`,
    to: 'info@skunkworksdigital.co.za',
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2d3748;">New Contact Form Submission</h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Company:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Service:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${service || 'Not specified'}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px; font-weight: bold;">Message:</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px; border-top: 1px solid #e2e8f0;">
              <p style="white-space: pre-line;">${message}</p>
            </td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #718096;">
          This message was sent from the contact form on the SkunkWorks Digital website.
        </p>
      </div>
    `,
    text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company}\nService: ${service || 'Not specified'}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'There was an error sending your message. Please try again later.' 
    });
  }
}