
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-2xl font-bold text-consulting-800">
              Nathan
            </h1>
          </div>
          <div>
            <Button asChild className="bg-consulting-700 hover:bg-consulting-800 text-white">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        
        <div className="text-center py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-consulting-800 mb-6">
            Builder. Strategist. Biotech Generalist.
          </h2>
          <p className="text-xl text-consulting-600 max-w-3xl mx-auto">
            Helping biotech organizations streamline operations, implement effective systems, 
            and scale efficiently through strategic consulting and tailored solutions.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
