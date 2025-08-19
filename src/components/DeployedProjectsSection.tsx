import React from 'react';
import ProjectLinkCard from './ProjectLinkCard';

interface DeployedProject {
  title: string;
  description: string;
  url: string;
}

const deployedProjects: DeployedProject[] = [
  {
    title: "Digital Menu for Manna Mediterranean Grill",
    description: "A modern, interactive digital menu designed for Manna Mediterranean Grill, enhancing customer experience and streamlining ordering. This menu is optimized for a 43-inch TV display, so please zoom to 50% for the best viewing experience. Use the arrow keys or click on the logo to switch between the different halves of the menu.",
    url: "https://manna-sign-iota.vercel.app/",
  },
  // Add more deployed projects here
];

const DeployedProjectsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Deployed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deployedProjects.map((project, index) => (
            <ProjectLinkCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeployedProjectsSection;