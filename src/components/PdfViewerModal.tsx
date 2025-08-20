import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description: string;
}

const AP_RESEARCH_PDF_URL = "/lloyd-expressway-traffic-paper.pdf";
const GOOGLE_DRIVE_EMBED_URL = "https://drive.google.com/file/d/1K49YijsfPpVi4rA67gUPJAyr0b40h434/preview";

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title, description }) => {
  const isMobile = useIsMobile();

  const isApResearchOnMobile = isMobile && pdfUrl === AP_RESEARCH_PDF_URL;

  const iframeSrc = isApResearchOnMobile ? GOOGLE_DRIVE_EMBED_URL : pdfUrl;
  const iframeStyle = isApResearchOnMobile
    ? {} // Google Drive embed handles its own scaling, no custom zoom needed
    : { zoom: isMobile ? 0.3 : 0.8, MozTransform: `scale(${isMobile ? 0.3 : 0.8})`, MozTransformOrigin: '0 0' };

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
            src={iframeSrc}
            className="w-full h-full"
            title={title}
            allowFullScreen
            style={iframeStyle}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerModal;