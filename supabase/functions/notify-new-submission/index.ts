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
    // Create a Supabase client for potential future database interactions within the function
    // (though not strictly needed for just sending an email based on the request body)
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

    const submissionData = await req.json();
    console.log('Received submission data:', submissionData);

    const emailContent = `
      New Contact Form Submission!

      First Name: ${submissionData.first_name}
      Last Name: ${submissionData.last_name}
      Email: ${submissionData.email || 'N/A'}
      Phone Number: ${submissionData.phone_number || 'N/A'}
      Topic: ${submissionData.topic}
      ${submissionData.topic === 'other' && submissionData.other_topic_description ? `Other Topic Description: ${submissionData.other_topic_description}` : ''}
      Message:
      ${submissionData.message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Verified sender email
      to: 'abaleemmohammed@gmail.com', // Your recipient email
      subject: `New Contact Submission: ${submissionData.topic}`,
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

  } catch (error) {
    console.error('Edge Function error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});