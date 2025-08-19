import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ExternalViewerModal from './ExternalViewerModal';

interface ProjectLinkCardProps {
  title: string;
  description: string;
  url: string;
}

const ProjectLinkCard: React.FC<ProjectLinkCardProps> = ({ title, description, url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              View Live
            </Button>
          </div>
        </CardContent>
      </Card>
      <ExternalViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={url}
        title={title}
        description={description}
      />
    </>
  );
};

export default ProjectLinkCard;