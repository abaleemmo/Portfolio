import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend('re_Hg1HKtWT_Jk862KrXcvropd5f1MxX8WJi'); // Your provided API Key

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, relationship, otherRelationship } = req.body;

  if (!firstName || !lastName || !email || !relationship) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Transcript Request <onboarding@resend.dev>', // Using Resend's default sender
      to: 'abaleemmohammed@gmail.com', // Receiving at your email
      subject: `Transcript Request from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Relationship:</strong> ${relationship}${relationship === 'Other' && otherRelationship ? ` (${otherRelationship})` : ''}</p>
        <p>This person has requested your transcript.</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Transcript request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send transcript request.' });
  }
}