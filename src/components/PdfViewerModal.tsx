import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css'; // Corrected path
import 'react-pdf/dist/Page/TextLayer.css';     // Corrected path
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Set up the worker source for pdf.js
// This is crucial for react-pdf to work correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title, description }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // New state for error

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1); // Reset to first page on new document load
    setIsLoading(false);
    setError(null); // Clear any previous errors
  }

  function onDocumentLoadError(err: any) {
    console.error("Error loading PDF:", err);
    setIsLoading(false);
    setError("Failed to load PDF. Please ensure the file exists and is accessible."); // Set error message
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      if (numPages && newPage >= 1 && newPage <= numPages) {
        return newPage;
      }
      return prevPageNumber;
    });
  }

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[98vw] h-[98vh] max-w-full max-h-full flex flex-col p-4 sm:p-6 md:p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow rounded-md border overflow-y-auto flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
          {isLoading && !error && <p className="text-lg text-gray-500 dark:text-gray-300">Loading PDF...</p>}
          {error && <p className="text-lg text-red-500 dark:text-red-400 text-center">{error}</p>} {/* Display error message */}
          {!error && ( // Only render Document if no error
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError} // Use the new error handler
              className="w-full h-full flex justify-center items-center" // Center the document
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={true}
                renderTextLayer={true}
                className="max-w-full h-auto" // Ensure page scales within container
                width={Math.min(window.innerWidth * 0.8, 800)} // Adjust width for responsiveness
              />
            </Document>
          )}
        </div>
        {numPages && numPages > 1 && !error && ( // Only show controls if no error and multiple pages
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button
              onClick={previousPage}
              disabled={pageNumber <= 1 || isLoading}
              variant="outline"
              size="icon"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <p className="text-sm font-medium">
              Page {pageNumber} of {numPages}
            </p>
            <Button
              onClick={nextPage}
              disabled={pageNumber >= numPages || isLoading}
              variant="outline"
              size="icon"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerModal;