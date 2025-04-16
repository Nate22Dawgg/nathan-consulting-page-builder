import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-8 border-b border-border glow relative z-20" style={{ background: 'linear-gradient(90deg, rgba(30,41,59,0.85) 0%, rgba(6,182,212,0.15) 100%)' }}>
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
        <div className="flex flex-col items-center justify-center">
          <div
            className="backdrop-blur-2xl bg-white/10 rounded-3xl px-6 py-8 md:px-12 md:py-12 shadow-2xl max-w-2xl w-full text-center"
            style={{
              boxShadow: '0 8px 48px 0 rgba(6,182,212,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10) inset',
              border: 'none',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Builder. Strategist. Biotech Generalist.
            </h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Helping biotech organizations streamline operations, implement effective systems, 
              and scale efficiently through strategic consulting and tailored solutions.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
