import React from 'react';
import Layout from '@/components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
          Showcase your amazing projects here! Each project can have a title, description, and links.
        </p>
      </div>
    </Layout>
  );
};

export default Projects;