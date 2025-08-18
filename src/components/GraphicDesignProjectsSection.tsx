import React from 'react';
import GraphicDesignCard from './GraphicDesignCard';

interface GraphicDesignProject {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const graphicDesignProjects: GraphicDesignProject[] = [
  {
    title: "Boomerang Learning LLC Marketing Materials",
    description: "Designed various marketing materials including an informational website, pamphlets, business cards, and shirts for Boomerang Learning LLC.",
    imageUrl: "/placeholder.svg", // Placeholder image, replace with actual image
    link: "#", // Replace with actual link if available
  },
  {
    title: "Paradime Enterprise LLC Online Store",
    description: "Designed the online store and product labels for Paradime Enterprise LLC, managing perfume inventory and fulfilling orders.",
    imageUrl: "/placeholder.svg", // Placeholder image, replace with actual image
    link: "#", // Replace with actual link if available
  },
  // Add more graphic design projects here
];

const GraphicDesignProjectsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Graphic Design Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicDesignProjects.map((project, index) => (
            <GraphicDesignCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignProjectsSection;