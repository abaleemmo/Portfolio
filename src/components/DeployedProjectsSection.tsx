import React from 'react';
import ProjectLinkCard from './ProjectLinkCard';

interface DeployedProject {
  title: string;
  description: string;
  url: string;
  zoomLevel?: number; // Added zoomLevel to the interface
}

const deployedProjects: DeployedProject[] = [
  {
    title: "Digital Menu for Manna Mediterranean Grill",
    description: "A modern, interactive digital menu designed for Manna Mediterranean Grill, enhancing customer experience and streamlining ordering. This menu is optimized for a 43-inch TV display, so please zoom to 80% for the best viewing experience. Use the arrow keys or click on the logo to switch between the different halves of the menu.",
    url: "https://manna-sign-iota.vercel.app/",
    zoomLevel: 0.6, // Set zoom to 60% for this project
  },
  {
    title: "Informational Website for Boomerang Learning LLC",
    description: "An informational website for Boomerang Learning LLC, a company I co-founded. This website was used for networking, raising awareness, and communicating our mission.",
    url: "https://boomerang-learning-website.vercel.app/",
    zoomLevel: 1.0, // Set zoom to 100% for this project
  },
  {
    title: "BulliBuddy",
    description: "A platform inspired by a teacher's need, BulliBuddy enhances student-teacher accessibility, making it easier for educators to connect with students and efficiently answer their questions.",
    url: "https://bulli-buddy.vercel.app/",
    zoomLevel: 1.0, // Set zoom to 100% for this project
  },
  {
    title: "Shopify Store for Paradime Enterprise LLC",
    description: "Developed and managed a comprehensive e-commerce platform for Paradime Enterprise LLC, showcasing products with an intuitive user experience and robust backend functionality.",
    url: "https://paradimeent.com/",
    zoomLevel: 1.0, // Set zoom to 100% for this project
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
            <ProjectLinkCard key={index} {...project} zoomLevel={project.zoomLevel} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeployedProjectsSection;