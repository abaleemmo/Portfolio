import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile

interface ExternalViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  description: string;
  zoomLevel?: number; // Keep this prop for specific overrides
}

const ExternalViewerModal: React.FC<ExternalViewerModalProps> = ({ isOpen, onClose, url, title, description, zoomLevel }) => {
  const isMobile = useIsMobile();
  // Use provided zoomLevel if available, otherwise default based on mobile status
  const effectiveZoomLevel = zoomLevel !== undefined ? zoomLevel : (isMobile ? 0.4 : 0.6);

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
            style={{ zoom: effectiveZoomLevel, MozTransform: `scale(${effectiveZoomLevel})`, MozTransformOrigin: '0 0' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExternalViewerModal;