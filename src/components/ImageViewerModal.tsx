import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
}

const ImageViewerModal: React.FC<ImageViewerModalProps> = ({ isOpen, onClose, imageUrl, title, description }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden rounded-md border flex items-center justify-center">
          <img src={imageUrl} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewerModal;