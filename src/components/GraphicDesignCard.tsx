import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ImageViewerModal from './ImageViewerModal';

interface GraphicDesignCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const GraphicDesignCard: React.FC<GraphicDesignCardProps> = ({ title, description, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
        <CardHeader> {/* Removed AspectRatio and img from here */}
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              View More
            </Button>
          </div>
        </CardContent>
      </Card>
      <ImageViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
        title={title}
        description={description}
      />
    </>
  );
};

export default GraphicDesignCard;