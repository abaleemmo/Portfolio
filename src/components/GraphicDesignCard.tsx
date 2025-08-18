import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PdfViewerModal from './PdfViewerModal'; // Import PdfViewerModal

interface GraphicDesignCardProps {
  title: string;
  description: string;
  pdfUrl: string; // Changed from imageUrl and link
}

const GraphicDesignCard: React.FC<GraphicDesignCardProps> = ({ title, description, pdfUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end">
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
            View More
          </Button>
        </CardContent>
      </Card>
      <PdfViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={pdfUrl}
        title={title}
        description={description}
      />
    </>
  );
};

export default GraphicDesignCard;