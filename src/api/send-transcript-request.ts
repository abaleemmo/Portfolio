import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend('re_Hg1HKtWT_Jk862KrXcvropd5f1MxX8WJi'); // Your provided Resend API Key

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || 'https://uruafniidrsoxskvmmro.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydWFmbmlpZHJzb3hza3ZtbXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3OTg1MDAsImV4cCI6MjA3MTM3NDUwMH0.is5IpyTPBeODfcmYheosQR2UgDSdpMQyQxVAQh_lghY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, relationship, otherRelationship } = req.body;

  if (!firstName || !lastName || !email || !relationship) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    // 1. Save to Supabase
    const { data, error: supabaseError } = await supabase
      .from('transcript_requests')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          relationship: relationship,
          other_relationship: relationship === 'Other' ? otherRelationship : null,
        },
      ]);

    if (supabaseError) {
      console.error('Supabase insert error:', supabaseError);
      return res.status(500).json({ message: 'Failed to save transcript request to database.' });
    }

    // 2. Send email via Resend
    const emailData = await resend.emails.send({
      from: 'Transcript Request <onboarding@resend.dev>',
      to: 'abaleemmohammed@gmail.com',
      subject: `Transcript Request from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Relationship:</strong> ${relationship}${relationship === 'Other' && otherRelationship ? ` (${otherRelationship})` : ''}</p>
        <p>This person has requested your transcript. Details have also been saved to your Supabase database.</p>
      `,
    });

    console.log('Email sent successfully:', emailData);
    return res.status(200).json({ message: 'Transcript request sent and saved successfully!' });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ message: 'An unexpected error occurred. Please try again.' });
  }
}