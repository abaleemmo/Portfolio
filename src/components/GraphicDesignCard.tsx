import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GraphicDesignCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string; // Optional link to a larger view or external site
}

const GraphicDesignCard: React.FC<GraphicDesignCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9} className="rounded-t-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
          <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
        </div>
        {link && (
          <div className="mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
              View Project
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GraphicDesignCard;