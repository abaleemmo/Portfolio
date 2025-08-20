import React from 'react';
import Layout from '@/components/Layout';
import PapersSection from '@/components/PapersSection';
import GraphicDesignProjectsSection from '@/components/GraphicDesignProjectsSection';
import DeployedProjectsSection from '@/components/DeployedProjectsSection';
import { Separator } from '@/components/ui/separator';

const Projects = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
        {/* Removed the descriptive paragraph */}
      </div>
      <DeployedProjectsSection />
      <Separator className="my-12 md:my-24" />
      <PapersSection />
      <Separator className="my-12 md:my-24" />
      <GraphicDesignProjectsSection />
      <Separator className="my-12 md:my-24" />
      {/* You can add other project sections below this */}
    </Layout>
  );
};

export default Projects;