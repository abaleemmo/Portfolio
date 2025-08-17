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
  {
    title: "Vice President",
    organization: "Signature School Business Club",
    dates: "August 2024 - May 2025",
    description: [
      "Mentored teams to top 20 in the UE Changemaker Challenge",
      "Mentored teams to the regionals round of the Innovate WithIN competition",
      "Coordinated a team of underclassmen in a fundraising competition",
      "Collaborated with other officers"
    ],
  },
  {
    title: "Member",
    organization: "Signature School Business Club",
    dates: "August 2023 - May 2024",
    description: [
      "Pitched in the 2024 UE Changemaker Challenge, winning 3rd place",
      "Pitched in the 2025 UE Changemaker Challenge, winning 2nd place",
      "Pitched in StartedUP Foundation's Innovate WithIN pitch competition, advancing to the regional round",
      "Competed in the University of Pennsylvania's Investment Competition"
    ],
  },
  {
    title: "Founder and Team Captain",
    organization: "Signature School American Rocketry Challenge Team",
    dates: "August 2024 - Ongoing",
    description: [
      "Designed a model rocket to the American Rocketry Challenge specifications",
      "Coordinated 10 team members to conduct multiple tasks including fundraising, rocket design, rocket building, and team marketing",
      "Financed the cost of the model rockets through fundraising"
    ],
  },
  {
    title: "Vice President",
    organization: "Signature School Robotics Club",
    dates: "August 2025 - Ongoing",
    description: [
      "Restarted Signature School's robotics competition teams after a 5-year hiatus",
      "Fundraised to establish teams"
    ],
  },
  {
    title: "Co-Founder and A-Team member",
    organization: "Signature School National Science Bowl Team",
    dates: "August 2024 - Ongoing",
    description: [
      "Studied physics concepts",
      "Collaborated in a team to answer high-level STEM questions"
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