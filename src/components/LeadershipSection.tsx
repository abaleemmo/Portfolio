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
    title: "President",
    organization: "Signature School Business Club",
    dates: "August 2025 - Ongoing",
    description: [
      "Mentored teams to develop business ideas",
      "Coached teams and refined underclassmen pitching skills",
      "Established a pitch competition at Signature School"
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
        {leadershipExperiences.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No leadership experiences to display yet. Add your leadership roles here!
          </p>
        )}
      </div>
    </section>
  );
};

export default LeadershipSection;