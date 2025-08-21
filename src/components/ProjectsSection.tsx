import React from 'react';
import ProjectLinkCard from './ProjectLinkCard';
import GraphicDesignCard from './GraphicDesignCard';
import { Separator } from '@/components/ui/separator'; // Re-import Separator for stacking

interface DeployedProject {
  title: string;
  description: string;
  url: string;
  zoomLevel?: number;
  canEmbed?: boolean;
}

const deployedProjects: DeployedProject[] = [
  {
    title: "Digital Menu for Manna Mediterranean Grill",
    description: "A modern, interactive digital menu designed for Manna Mediterranean Grill, enhancing customer experience and streamlining ordering. This menu is optimized for a 43-inch TV display, so please zoom to 80% for the best viewing experience. Use the arrow keys or click on the logo to switch between the different halves of the menu.",
    url: "https://manna-sign-iota.vercel.app/",
    zoomLevel: 0.6,
    canEmbed: true,
  },
  {
    title: "Informational Website for Boomerang Learning LLC",
    description: "An informational website for Boomerang Learning LLC, a company I co-founded. This website was used for networking, raising awareness, and communicating our mission.",
    url: "https://boomerang-learning-website.vercel.app/",
    zoomLevel: 1.0,
    canEmbed: true,
  },
  {
    title: "BulliBuddy",
    description: "A platform inspired by a teacher's need, BulliBuddy enhances student-teacher accessibility, making it easier for educators to connect with students and efficiently answer their questions.",
    url: "https://bulli-buddy.vercel.app/",
    zoomLevel: 1.0,
    canEmbed: true,
  },
  {
    title: "Shopify Store for Paradime Enterprise LLC",
    description: "Developed and managed a comprehensive e-commerce platform on Shopify for Paradime Enterprise LLC, showcasing products with an intuitive user experience and robust backend functionality. Due to security settings, this site cannot be embedded, but you can view it in a new tab.",
    url: "https://paradimeent.com/",
    canEmbed: false,
  },
];

interface GraphicDesignProject {
  title: string;
  description: string;
  imageUrl: string;
}

const graphicDesignProjects: GraphicDesignProject[] = [
  {
    title: "Marketing Label for Paradime Enterprise",
    description: "Designed a marketing label for Paradime Enterprise to direct customers to the new website. The design was optimized for cost-effective printing on a label printer and high visibility when affixed to product boxes.",
    imageUrl: "/paradime-marketing-label.png",
  },
  {
    title: "Business Card for Paradime Enterprise LLC",
    description: "Designed a professional business card for Paradime Enterprise LLC, incorporating brand elements and essential contact information for networking and client engagement.",
    imageUrl: "/paradime-business-card.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Projects</h2>
        
        {/* Deployed Projects Sub-section */}
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">Deployed Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deployedProjects.map((project, index) => (
            <ProjectLinkCard key={index} {...project} zoomLevel={project.zoomLevel} canEmbed={project.canEmbed} /> 
          ))}
        </div>

        <Separator className="my-12 md:my-24" /> {/* Separator between sections */}

        {/* Graphic Design Projects Sub-section */}
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">Graphic Design & Marketing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicDesignProjects.map((project, index) => (
            <GraphicDesignCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;