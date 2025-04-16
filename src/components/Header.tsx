import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-8 border-b border-border relative z-20" style={{ background: 'none' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Nathan
            </h1>
          </div>
          <div>
            <Button asChild className="btn-gradient">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_24px_rgba(6,182,212,0.25)]">
            Builder. Strategist. Biotech Generalist.
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto drop-shadow-[0_1px_8px_rgba(6,182,212,0.12)]">
            Helping biotech organizations streamline operations, implement effective systems, 
            and scale efficiently through strategic consulting and tailored solutions.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
