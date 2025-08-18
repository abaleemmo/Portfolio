import React from 'react';
import Layout from '@/components/Layout';
import EducationSection from '@/components/EducationSection';
import TestScoresSection from '@/components/TestScoresSection';
import AcademicHonorsSection from '@/components/AcademicHonorsSection'; // Import AcademicHonorsSection
import { Separator } from '@/components/ui/separator';

const Education = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
          My Academic Journey
        </h2>
        <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-xl mt-4 leading-relaxed">
          A look into my educational background and academic achievements.
        </p>
      </div>
      <EducationSection />
      <Separator className="my-12 md:my-24" /> {/* Separator between sections */}
      <TestScoresSection />
      <Separator className="my-12 md:my-24" /> {/* Separator between sections */}
      <AcademicHonorsSection /> {/* New Academic Honors section */}
    </Layout>
  );
};

export default Education;