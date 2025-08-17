import React from 'react';
import LeadershipCard from './LeadershipCard';

interface LeadershipExperience {
  title: string;
  organization: string;
  dates: string;
  description: string[];
}

const leadershipExperiences: LeadershipExperience[] = [
  {
    title: "Student Council President",
    organization: "North High School",
    dates: "August 2023 - May 2024",
    description: [
      "Led a team of 15 student representatives to organize school events.",
      "Initiated and managed a successful fundraising campaign for new library resources.",
      "Represented student body concerns to school administration."
    ],
  },
  {
    title: "Robotics Club Captain",
    organization: "North High School Robotics Club",
    dates: "September 2022 - May 2024",
    description: [
      "Guided a team of 10 members in designing and building competitive robots.",
      "Mentored junior members in programming and mechanical design.",
      "Secured regional championship in 2023."
    ],
  },
];

const LeadershipSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Leadership</h2>
        <div className="grid gap-8">
          {leadershipExperiences.map((experience, index) => (
            <LeadershipCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;