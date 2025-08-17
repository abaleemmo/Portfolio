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
    title: "Evansville Catapult",
    company: "Nextech",
    location: "Evansville, IN", // Assuming Evansville, IN based on "Evansville Catapult"
    dates: "June 2025 - July 2025",
    description: [
      "Completed immersive computer science training with industry mentors and educators.",
      "Gained hands-on experience with CSS, HTML, and Javascript.",
      "Strengthened teamwork, problem-solving, and presentation skills.",
      "Explored career pathways through networking, workshops, and guest speakers."
    ],
  },
  {
    title: "Summer Intern",
    company: "Tech Solutions Inc.",
    location: "Remote",
    dates: "June 2023 - August 2023",
    description: [
      "Assisted in developing and testing new features for a web application using React and Node.js.",
      "Collaborated with a team of engineers to debug and optimize existing code.",
      "Gained hands-on experience with agile development methodologies and version control (Git)."
    ],
  },
  {
    title: "Volunteer Web Developer",
    company: "Local Community Center",
    location: "Your City, State",
    dates: "September 2022 - May 2023",
    description: [
      "Designed and built a responsive website for the community center using HTML, CSS, and JavaScript.",
      "Implemented a dynamic events calendar and contact form to improve user engagement.",
      "Trained staff on how to update website content, ensuring long-term maintainability."
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