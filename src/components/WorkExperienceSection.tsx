import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
}

const workExperiences: WorkExperience[] = [
  {
    title: "Inventory Manager",
    company: "Paradime Enterprise LLC",
    location: "", // Removed "Remote"
    dates: "January 2025 - Present",
    description: [
      "Managed five figures worth of perfume inventory", // Updated wording
      "Fulfilled hundreds of orders",
      "Designed marketing materials including an online store"
    ],
  },
  {
    title: "Evansville Catapult",
    company: "Nextech",
    location: "Evansville, IN",
    dates: "June 2025 - July 2025",
    description: [
      "Completed immersive computer science training with industry mentors and educators",
      "Gained hands-on experience with CSS, HTML, and Javascript",
      "Strengthened teamwork, problem-solving, and presentation skills",
      "Explored career pathways through networking, workshops, and guest speakers"
    ],
  },
  {
    title: "Multimedia and Marketing Intern",
    company: "Catena LLC",
    location: "", // Removed "Remote"
    dates: "May 2024 - October 2024",
    description: [
      "Worked across the sales and marketing teams",
      "Aided in the design of product labels",
      "Went to outreach and networking events to identify customer segments",
      "Generated dozens of leads"
    ],
  },
];

const WorkExperienceSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Work Experience</h2>
        <div className="grid gap-8">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;