import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, relationship, otherRelationship } = req.body;

  if (!firstName || !lastName || !email || !relationship) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const recipientEmail = 'your-email@example.com'; // IMPORTANT: Replace with your actual email address
  const subject = `Transcript Request from Portfolio: ${firstName} ${lastName}`;
  const relationshipDetail = relationship === 'Other' ? otherRelationship : relationship;
  const emailBody = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Relationship: ${relationshipDetail || relationship}

    This person is requesting a transcript.
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // IMPORTANT: Replace with your verified Resend domain
      to: [recipientEmail],
      subject: subject,
      html: emailBody.replace(/\n/g, '<br />'), // Convert newlines to HTML breaks
    });

    if (error) {
      console.error('Resend email error:', error);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }

    return res.status(200).json({ message: 'Transcript request sent successfully!', data });
  } catch (error: any) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}