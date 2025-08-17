import React from 'react';
import VolunteerExperienceCard from './VolunteerExperienceCard';

interface VolunteerExperience {
  title: string;
  organization: string;
  location: string;
  dates: string;
  description: string[];
}

const volunteerExperiences: VolunteerExperience[] = [
  {
    title: "Volunteer Coordinator",
    organization: "Mobile Food Pantry by MASIHA",
    location: "",
    dates: "January 2024 - Ongoing",
    description: [
      "Managed food inventory",
      "Coordinated dozens of volunteers simultaneously",
      "Coordinated food supply logistics to feed over 50 families weekly",
      "Represented the organization at dozens of outreach events, engaging with the community and raising awareness in English and Spanish"
    ],
  },
  {
    title: "Volunteer",
    organization: "Mobile Food Pantry by MASIHA",
    location: "",
    dates: "January 2021 - Ongoing",
    description: [
      "Organized nutritious meals into distributable portions",
      "Made 200 portions of food meant to last 4-5 meals weekly",
      "Utilized manual dexterity for efficient food portioning and packaging.",
      "Consistently met tight deadlines to ensure timely food distribution."
    ],
  },
  {
    title: "Youth Mentor",
    organization: "Islamic Society of Evansville's Youth Group",
    location: "", // Assuming no specific location provided, keeping it empty
    dates: "June 2024 - Ongoing",
    description: [
      "Researched and developed Islamic lectures",
      "Mentored a group of a dozen middle and elementary school students",
      "Delivered lectures to groups of 15 or more on a weekly basis"
    ],
  },
];

const VolunteerExperienceSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Volunteer Experience</h2>
        <div className="grid gap-8">
          {volunteerExperiences.map((experience, index) => (
            <VolunteerExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperienceSection;