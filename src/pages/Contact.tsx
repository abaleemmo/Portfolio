import React from 'react';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl mt-4 dark:text-gray-300">
          Feel free to reach out! You can add a contact form or your social media links here.
        </p>
      </div>
    </Layout>
  );
};

export default Contact;