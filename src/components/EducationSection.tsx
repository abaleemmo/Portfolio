import React from 'react';
import EducationCard from './EducationCard';

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  description?: string[];
}

const educationEntries: EducationEntry[] = [
  {
    degree: "High School Diploma",
    institution: "Signature School",
    location: "Evansville, IN",
    dates: "August 2022 - May 2026 (Expected)",
    description: [
      "Ranked among the top high schools nationally.",
      "Focus on STEM and liberal arts curriculum.",
      "Participated in various extracurricular activities and clubs."
    ],
  },
  {
    degree: "Dual Credit Courses",
    institution: "University of Southern Indiana",
    location: "Evansville, IN",
    dates: "August 2024 - Ongoing",
    description: [
      "Completed courses in Calculus I, Physics, and Computer Science.",
      "Gained college-level academic experience."
    ],
  },
];

const EducationSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Education</h2>
        <div className="grid gap-8">
          {educationEntries.map((entry, index) => (
            <EducationCard key={index} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;