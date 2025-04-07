
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white py-6 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-consulting-800">
            Nathan
          </h1>
          <p className="text-consulting-600 text-sm md:text-base">
            Biotech Ops & Systems Consultant
          </p>
        </div>
        <div>
          <Button asChild className="bg-consulting-700 hover:bg-consulting-800 text-white">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
