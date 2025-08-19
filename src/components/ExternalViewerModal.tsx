import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ExternalViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  description: string;
  zoomLevel?: number; // New prop for zoom level
}

const ExternalViewerModal: React.FC<ExternalViewerModalProps> = ({ isOpen, onClose, url, title, description, zoomLevel = 0.6 }) => { // Default to 0.6 if not provided
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
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
            style={{ zoom: zoomLevel, MozTransform: `scale(${zoomLevel})`, MozTransformOrigin: '0 0' }} // Use zoomLevel here
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExternalViewerModal;