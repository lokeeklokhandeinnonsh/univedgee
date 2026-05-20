import nodemailer from 'nodemailer';

// Helper to create mail transporter
const getTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email to owner notifying about new contact inquiry
export const sendOwnerNotification = async (inquiry) => {
  const { firstName, lastName, email, company, lookingFor, message } = inquiry;
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('SMTP credentials not configured. Skipping owner email notification.');
    return false;
  }

  const transporter = getTransporter();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f1f5f9; border-radius: 8px; background-color: #ffffff;">
      <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Inquiry Received - UnivEdge Portfolio</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Name:</td>
          <td style="padding: 8px 0; color: #0f172a;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
          <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
          <td style="padding: 8px 0; color: #0f172a;">${company || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Looking For:</td>
          <td style="padding: 8px 0; color: #0f172a;">${lookingFor || 'N/A'}</td>
        </tr>
      </table>
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #cbd5e1; margin-top: 15px;">
        <h4 style="margin: 0 0 10px 0; color: #334155;">Message Detail:</h4>
        <p style="margin: 0; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
      </div>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px;">
        This email was automatically generated from your UnivEdge Portfolio Contact Form.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"UnivEdge Portfolio" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `💼 New Inquiry from ${firstName} ${lastName} - ${company || 'Independent'}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Owner notification email sent successfully.');
    return true;
  } catch (error) {
    console.error('Error sending owner notification email:', error.message);
    return false;
  }
};

// Send auto-reply confirmation email to client
export const sendSenderAutoReply = async (inquiry) => {
  const { firstName, lastName, email } = inquiry;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('SMTP credentials not configured. Skipping client auto-reply email.');
    return false;
  }

  const transporter = getTransporter();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f1f5f9; border-radius: 8px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 25px;">
        <h1 style="color: #2563eb; font-size: 28px; margin: 0; font-family: 'Georgia', serif;">UnivEdge</h1>
        <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">IT and staffing, built around your business.</p>
      </div>
      <p style="font-size: 16px; line-height: 1.6; color: #0f172a;">Hello ${firstName},</p>
      <p style="font-size: 16px; line-height: 1.6; color: #334155;">
        Thank you for reaching out to UnivEdge Consulting. We have received your inquiry regarding how we can support your business with technology talent and delivery.
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #334155;">
        Our team reviews all requests carefully. A senior consultant—not an SDR—will get back to you within <strong>4 business hours</strong> to discuss your needs.
      </p>
      <div style="margin: 30px 0; padding: 20px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0; text-align: center;">
        <h4 style="margin: 0 0 10px 0; color: #0f172a;">What's next?</h4>
        <p style="margin: 0 0 15px 0; font-size: 14px; color: #475569;">If you want to speed up the process, you can book a consultation directly on our calendar.</p>
        <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}/#contact" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px; font-size: 14px;">Book a Consultation</a>
      </div>
      <p style="font-size: 16px; line-height: 1.6; color: #334155;">
        Best regards,<br>
        <strong>The UnivEdge Team</strong>
      </p>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px;">
        &copy; 2026 UnivEdge Consulting. All rights reserved.<br>
        2020 Lomita Blvd, Torrance, CA 90101
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"UnivEdge Consulting" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting UnivEdge Consulting`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Client auto-reply email sent successfully.');
    return true;
  } catch (error) {
    console.error('Error sending auto-reply email:', error.message);
    return false;
  }
};
