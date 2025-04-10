
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-consulting-300" />
              <Link to="/contact" className="text-sm text-consulting-300 hover:text-white transition-colors">
                Contact Me
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="h-4 w-4 text-consulting-300" />
              <a 
                href="https://www.linkedin.com/in/nathan-youssef-5aab7742/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-consulting-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
