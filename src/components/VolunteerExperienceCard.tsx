import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface VolunteerExperienceCardProps {
  title: string;
  organization: string;
  location: string;
  dates: string;
  description: string[];
}

const VolunteerExperienceCard: React.FC<VolunteerExperienceCardProps> = ({ title, organization, location, dates, description }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {organization} {location && `• ${location}`} • {dates}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default VolunteerExperienceCard;