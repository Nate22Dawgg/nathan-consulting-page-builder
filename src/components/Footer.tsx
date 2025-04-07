
import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-consulting-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-consulting-300">
              © {currentYear} Nathan Biotech Consulting. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-consulting-300" />
            <a href="mailto:contact@example.com" className="text-sm text-consulting-300 hover:text-white transition-colors">
              contact@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
