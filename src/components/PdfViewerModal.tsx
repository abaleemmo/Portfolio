import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title, description }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] h-[90vh] flex flex-col sm:max-w-lg md:max-w-4xl"> {/* Adjusted width for mobile, and set max-widths for larger screens */}
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow rounded-md border overflow-y-auto"> {/* Added overflow-y-auto to allow scrolling within this container */}
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title}
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerModal;