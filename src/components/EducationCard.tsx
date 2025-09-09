import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Import Button
// import TranscriptRequestModal from './TranscriptRequestModal'; // Removed import

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  description?: string[];
  gpa?: string;
  // showTranscriptButton?: boolean; // Removed prop for transcript button
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, location, dates, description, gpa }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false); // Removed state

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{degree}</CardTitle>
          <CardDescription className="text-gray-700 dark:text-gray-300">
            {institution} {location && `• ${location}`} • {dates}
            {gpa && <p className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-200">GPA: {gpa}</p>}
          </CardDescription>
        </CardHeader>
        {(description && description.length > 0) ? (
          <CardContent>
            {description && description.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {/* Removed Transcript Request Button */}
          </CardContent>
        ) : null}
      </Card>
      {/* Removed TranscriptRequestModal component */}
    </>
  );
};

export default EducationCard;