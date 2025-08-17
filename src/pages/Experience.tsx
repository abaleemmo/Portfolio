import React from 'react';
import Layout from '@/components/Layout';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import VolunteerExperienceSection from '@/components/VolunteerExperienceSection';

const Experience = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Experience</h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
          A detailed look at my professional and volunteer experiences.
        </p>
      </div>
      <WorkExperienceSection />
      <VolunteerExperienceSection />
    </Layout>
  );
};

export default Experience;