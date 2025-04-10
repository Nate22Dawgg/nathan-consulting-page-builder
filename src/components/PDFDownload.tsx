
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const PDFDownload = () => {
  // In a real implementation, the PDF URL would be dynamic or stored in a CMS
  const pdfUrl = '#'; // Placeholder URL
  
  return (
    <section className="bg-black text-white py-12" id="download">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white mb-4">Want to Learn More?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Download my one-page deck for a comprehensive overview of my services, 
          approach, and how I can help your biotech organization optimize operations.
        </p>
        <Button className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2 mx-auto">
          <Download className="h-5 w-5" />
          Download My 1-Page Deck
        </Button>
      </div>
    </section>
  );
};

export default PDFDownload;
