import React from 'react';
import SchoolProjectCard from './SchoolProjectCard';

interface SchoolProject {
  title: string;
  course: string;
  dates: string;
  description: string[];
  technologies?: string[];
}

const schoolProjects: SchoolProject[] = [
  {
    title: "Interactive Story Game",
    course: "AP Computer Science Principles",
    dates: "Fall 2023",
    description: [
      "Developed a text-based interactive story game using Python.",
      "Implemented branching narratives and multiple endings based on user choices.",
      "Designed a modular code structure for easy expansion of story content."
    ],
    technologies: ["Python"]
  },
  {
    title: "Historical Timeline Web App",
    course: "AP US History",
    dates: "Spring 2024",
    description: [
      "Created a responsive web application to visualize key historical events.",
      "Utilized HTML, CSS, and JavaScript to build an interactive timeline.",
      "Integrated data from a JSON file to dynamically populate events."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JSON"]
  },
];

const SchoolProjectsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">School Projects</h2>
        <div className="grid gap-8">
          {schoolProjects.map((project, index) => (
            <SchoolProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolProjectsSection;