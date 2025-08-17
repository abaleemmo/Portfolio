import React from 'react';
import Layout from '@/components/Layout';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import VolunteerExperienceSection from '@/components/VolunteerExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import { Separator } from '@/components/ui/separator'; // Import Separator

const Experience = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
          My Journey Through Experience
        </h2>
        <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl mt-4 leading-relaxed">
          Explore the diverse experiences that have shaped my journey, from professional roles and impactful volunteer work to leadership positions and academic pursuits. Each entry reflects a step in my growth and commitment.
        </p>
      </div>
      <WorkExperienceSection />
      <Separator className="my-12 md:my-24" /> {/* Separator between sections */}
      <VolunteerExperienceSection />
      <Separator className="my-12 md:my-24" /> {/* Separator between sections */}
      <LeadershipSection />
    </Layout>
  );
};

export default Experience;