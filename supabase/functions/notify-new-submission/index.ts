// @ts-ignore
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
// @ts-ignore
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';
// @ts-ignore
import { Resend } from 'https://esm.sh/resend@3.5.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      // @ts-ignore
      Deno.env.get('SUPABASE_URL') ?? '',
      // @ts-ignore
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // @ts-ignore
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not set in Supabase secrets.');
    }
    const resend = new Resend(resendApiKey);

    const payload = await req.json();
    console.log('Realtime payload received:', payload);

    // We are only interested in INSERT events for the contact_submissions table
    if (payload.table === 'contact_submissions' && payload.type === 'INSERT') {
      const newSubmission = payload.record;

      const emailContent = `
        New Contact Form Submission!

        First Name: ${newSubmission.first_name}
        Last Name: ${newSubmission.last_name}
        Email: ${newSubmission.email || 'N/A'}
        Phone Number: ${newSubmission.phone_number || 'N/A'}
        Topic: ${newSubmission.topic}
        ${newSubmission.topic === 'other' && newSubmission.other_topic_description ? `Other Topic Description: ${newSubmission.other_topic_description}` : ''}
        Message:
        ${newSubmission.message}
      `;

      // Replace 'your-verified-sender@example.com' with an email you've verified with Resend
      // Replace 'your-recipient-email@example.com' with the email address where you want to receive notifications
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use a verified sender email from your Resend account
        to: 'your-recipient-email@example.com', // Your email to receive notifications
        subject: `New Contact Submission: ${newSubmission.topic}`,
        text: emailContent,
      });

      if (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        });
      }

      console.log('Email sent successfully:', data);
      return new Response(JSON.stringify({ message: 'Notification email sent.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    return new Response(JSON.stringify({ message: 'Not a relevant Realtime event.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Edge Function error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});