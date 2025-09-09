import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm'; // Import the new ContactForm

const Contact = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl mt-4 dark:text-gray-300 mb-8">
          Feel free to reach out! Use the form below to send me a message.
        </p>
        <ContactForm /> {/* Render the ContactForm component */}
      </div>
    </Layout>
  );
};

export default Contact;