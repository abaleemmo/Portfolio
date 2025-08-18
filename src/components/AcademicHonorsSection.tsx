import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

interface AcademicHonor {
  title: string;
  issuer: string;
  dates: string;
  description: string;
}

const academicHonors: AcademicHonor[] = [
  {
    title: "AP Scholar with Distinction",
    issuer: "College Board",
    dates: "Sophomore and Junior Year",
    description: "Awarded for achieving an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams.",
  },
  {
    title: "AP Capstone Diploma",
    issuer: "College Board",
    dates: "End of Junior Year",
    description: "Received for earning scores of 3 or higher in AP Seminar and AP Research and on four additional AP Exams.",
  },
  {
    title: "Indiana Rising Stars Nomination",
    issuer: "Signature School",
    dates: "Nominated",
    description: "Nominated by my school for the Indiana Rising Stars program, recognizing high-achieving high school juniors.",
  },
  {
    title: "Indiana High School Honors Diploma",
    issuer: "State of Indiana",
    dates: "Expected (May 2026)",
    description: "Expected to receive the Indiana Academic Honors Diploma, which requires a rigorous curriculum, high GPA, and specific test scores.",
  },
  {
    title: "National Merit Scholarship Program (NMSQT) Award",
    issuer: "National Merit Scholarship Corporation",
    dates: "Expected",
    description: "Expected to receive an award from the National Merit Scholarship Program based on PSAT/NMSQT scores.",
  },
];

const AcademicHonorsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Academic Honors</h2>
        <div className="grid gap-8">
          {academicHonors.map((honor, index) => (
            <Card key={index} className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{honor.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {honor.issuer} • {honor.dates}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{honor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicHonorsSection;