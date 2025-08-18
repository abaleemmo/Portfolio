import React from 'react';
import EducationCard from './EducationCard';

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  description?: string[];
  gpa?: string; // Added GPA to the interface
}

const educationEntries: EducationEntry[] = [
  {
    degree: "High School Diploma",
    institution: "Signature School",
    location: "Evansville, IN",
    dates: "August 2022 - May 2026 (Expected)",
    gpa: "4.5870 / 4.0 Scale", // Added GPA here
    description: [
      "Signature School is a nationally recognized, tuition-free charter high school known for its rigorous curriculum in STEM and liberal arts. Consistently ranked among the top high schools in the nation, it fosters an environment of academic excellence and critical thinking.",
      "Engaged in a challenging academic program designed to prepare students for top universities, emphasizing critical thinking, problem-solving, and interdisciplinary learning.",
      "Actively participated in various academic clubs and competitions, further developing skills in leadership, teamwork, and specialized subjects.",
      "Undertook advanced coursework in subjects like AP Calculus, AP Physics, and Computer Science, demonstrating a strong aptitude for rigorous academic challenges.",
      "Collaborated on numerous projects, fostering a collaborative learning environment and enhancing communication skills."
    ],
  },
  {
    degree: "Future College Education",
    institution: "Pursuing higher education",
    location: "TBD",
    dates: "Fall 2026 - Ongoing",
    description: [
      "Looking forward to continuing my academic journey, with a strong interest in pursuing Physics and Mathematics to PhD levels. I am also considering exploring Mechanical Engineering and Entrepreneurship."
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