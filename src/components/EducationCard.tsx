import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Import Button
import TranscriptRequestModal from './TranscriptRequestModal'; // Import the new modal

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  description?: string[];
  gpa?: string;
  showTranscriptButton?: boolean; // New prop for transcript button
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, location, dates, description, gpa, showTranscriptButton }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{degree}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {institution} {location && `• ${location}`} • {dates}
            {gpa && <p className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-200">GPA: {gpa}</p>}
          </CardDescription>
        </CardHeader>
        {(description && description.length > 0) || showTranscriptButton ? (
          <CardContent>
            {description && description.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {showTranscriptButton && (
              <div className="mt-6 text-center">
                <Button
                  onClick={() => setIsModalOpen(true)} // Open the modal
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Request Transcript
                </Button>
              </div>
            )}
          </CardContent>
        ) : null}
      </Card>
      <TranscriptRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default EducationCard;