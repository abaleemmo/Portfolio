import React from 'react';
import Layout from '@/components/Layout';
// import WorkExperienceSection from '@/components/WorkExperienceSection'; // Removed import

const About = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
          This is where you'll tell your story! Talk about your interests, passions, and what drives you.
        </p>
      </div>
      {/* <WorkExperienceSection /> Removed Work Experience Section */}
    </Layout>
  );
};

export default About;