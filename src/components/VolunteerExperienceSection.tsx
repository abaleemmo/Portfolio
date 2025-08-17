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
    location: "", // Assuming no specific location provided, similar to previous work experience
    dates: "Ongoing", // Assuming ongoing as no specific dates were given
    description: [
      "Managed food inventory",
      "Coordinated dozens of volunteers simultaneously",
      "Coordinated food supply logistics to feed 50 families weekly"
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