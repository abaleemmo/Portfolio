import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title, description }) => {
  const isMobile = useIsMobile();
  const zoomLevel = isMobile ? 0.6 : 0.8; // Zoom out more on mobile

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[98vw] h-[98vh] max-w-full max-h-full flex flex-col p-4 sm:p-6 md:p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow rounded-md border overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title}
            allowFullScreen
            style={{ zoom: zoomLevel, MozTransform: `scale(${zoomLevel})`, MozTransformOrigin: '0 0' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerModal;