import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface SchoolProjectCardProps {
  title: string;
  course: string;
  dates: string;
  description: string[];
  technologies?: string[];
}

const SchoolProjectCard: React.FC<SchoolProjectCardProps> = ({ title, course, dates, description, technologies }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {course} • {dates}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {technologies && technologies.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SchoolProjectCard;