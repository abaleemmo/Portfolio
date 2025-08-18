import React from 'react';
import GraphicDesignCard from './GraphicDesignCard';

interface GraphicDesignProject {
  title: string;
  description: string;
  pdfUrl: string; // Changed from imageUrl and link
}

const graphicDesignProjects: GraphicDesignProject[] = [
  {
    title: "Marketing Label for Paradime Enterprise",
    description: "Designed a marketing label for Paradime Enterprise to direct customers to the new website. The design was optimized for cost-effective printing on a label printer and high visibility when affixed to product boxes.",
    pdfUrl: "/paradime-marketing-label.pdf", // Path to your PDF in the public folder
  },
  // Add more graphic design projects here
];

const GraphicDesignProjectsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Graphic Design Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for horizontal spread */}
          {graphicDesignProjects.map((project, index) => (
            <GraphicDesignCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignProjectsSection;