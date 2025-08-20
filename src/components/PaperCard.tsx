import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PdfViewerModal from './PdfViewerModal';

interface PaperCardProps {
  title: string;
  description: string;
  pdfUrl: string;
}

const PaperCard: React.FC<PaperCardProps> = ({ title, description, pdfUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
        <CardHeader> {/* Removed AspectRatio and img from here */}
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
        zoomLevel={0.8} // Pass zoomLevel to the modal
      />
    </>
  );
};

export default PaperCard;