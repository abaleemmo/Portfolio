import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ExternalViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  description: string;
}

const ExternalViewerModal: React.FC<ExternalViewerModalProps> = ({ isOpen, onClose, url, title, description }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden rounded-md border">
          <iframe 
            src={url} 
            className="w-full h-full" 
            title={title} 
            allowFullScreen 
            style={{ zoom: '0.75', MozTransform: 'scale(0.75)', MozTransformOrigin: '0 0' }} // Zoom changed to 75%
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExternalViewerModal;