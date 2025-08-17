import React from 'react';
import Layout from '@/components/Layout';
import VolunteerExperienceSection from '@/components/VolunteerExperienceSection';

const VolunteerExperiences = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Volunteer Experience</h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
          Here's a look at my contributions to the community.
        </p>
      </div>
      <VolunteerExperienceSection />
    </Layout>
  );
};

export default VolunteerExperiences;