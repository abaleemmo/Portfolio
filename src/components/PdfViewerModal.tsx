import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description: string;
  // Removed zoomLevel prop as it's no longer needed for this approach
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title, description }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow rounded-md border">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title}
            allowFullScreen
            // Removed style={{ zoom: zoomLevel, MozTransform: `scale(${zoomLevel})`, MozTransformOrigin: '0 0' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerModal;