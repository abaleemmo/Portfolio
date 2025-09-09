import React from 'react';
import Layout from '@/components/Layout';
import PapersSection from '@/components/PapersSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Separator } from '@/components/ui/separator';

const Projects = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
          My Creative Endeavors
        </h2>
        <p className="mx-auto max-w-[800px] text-lg text-gray-700 md:text-xl mt-4 leading-relaxed dark:text-gray-300">
          Explore a collection of my diverse projects, ranging from deployed web applications and academic papers to graphic design work. Each project showcases my skills, creativity, and dedication to bringing ideas to life.
        </p>
      </div>
      <ProjectsSection />
      <Separator className="my-12 md:my-24" />
      <PapersSection />
      <Separator className="my-12 md:my-24" />
      {/* You can add other project sections below this */}
    </Layout>
  );
};

export default Projects;