import React from 'react';
import Layout from '@/components/Layout';
import PapersSection from '@/components/PapersSection'; // Import PapersSection
import { Separator } from '@/components/ui/separator'; // Import Separator

const Projects = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
          Showcase your amazing projects here! Each project can have a title, description, and links.
        </p>
      </div>
      <PapersSection /> {/* Add the PapersSection here */}
      <Separator className="my-12 md:my-24" /> {/* Add a separator */}
      {/* You can add other project sections below this */}
    </Layout>
  );
};

export default Projects;