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

// Map of local PDF paths to their Google Drive embed URLs
const PDF_EMBED_MAP: { [key: string]: string } = {
  "/lloyd-expressway-traffic-paper.pdf": "https://drive.google.com/file/d/1K49YijsfPpVi4rA67gUPJAyr0b40h434/preview",
  "/m3-challenge-solution-paper.pdf": "https://drive.google.com/file/d/1RaBg5siiWj4r_a-HqwSIdAzj-L4SHpeX/preview",
  "/pendulum-damping-paper.pdf": "https://drive.google.com/file/d/1ojpsM2KQzkA9NxSC5zvSI1YfiOBL4fMM/preview",
  "/note-taking-memory-paper.pdf": "https://drive.google.com/file/d/1JV9s-m6zVqYkUB4ESdjwfG7nkcSc9ESP/preview",
  "/mass-media-manipulation-paper.pdf": "https://drive.google.com/file/d/1eC3myObE6YiENzR5Uqd7pDZGlvPnfBip/preview",
  "/h1b-visa-impact-paper.pdf": "https://drive.google.com/file/d/1mU4v8LCfMyGNZoXrhmY9ZOf7_IHh27r3/preview",
  "/wharton-investment-report.pdf": "https://drive.google.com/file/d/12vJ8uCh6yxafLIk57-nh6UpMHlkE6gKr/preview",
  "/wharton-investment-report-2024.pdf": "https://drive.google.com/file/d/1dx2txKwepE5wL3XabWysVkC27OOgggZD/preview",
};

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title, description }) => {
  const isMobile = useIsMobile();

  // Determine if we should use a Google Drive embed for the current PDF on mobile
  const googleDriveEmbedUrl = PDF_EMBED_MAP[pdfUrl];
  const useGoogleDriveEmbed = isMobile && googleDriveEmbedUrl;

  const iframeSrc = useGoogleDriveEmbed ? googleDriveEmbedUrl : pdfUrl;
  const iframeStyle = useGoogleDriveEmbed
    ? {} // Google Drive embed handles its own scaling, no custom zoom needed
    : { zoom: isMobile ? 0.3 : 0.8, MozTransform: `scale(${isMobile ? 0.3 : 0.8})`, MozTransformOrigin: '0 0' };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[98vw] h-[98vh] max-w-full max-h-full flex flex-col p-4 sm:p-6 md:p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">
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