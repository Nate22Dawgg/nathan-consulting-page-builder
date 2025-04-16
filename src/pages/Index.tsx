import React from 'react';
import Header from "@/components/Header";
import About from "@/components/About";
import Now from "@/components/Now";
import HowIWork from "@/components/HowIWork";
import ProjectExpertise from "@/components/ProjectExpertise";
import WorkExperience from "@/components/WorkExperience";
import Consulting from "@/components/Consulting";
import Entrepreneurship from "@/components/Entrepreneurship";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import PDFDownload from "@/components/PDFDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
      {/* Interactive animated mesh background and floating blobs */}
      <div className="interactive-bg" aria-hidden="true">
        {/* Mesh gradient SVG background */}
        <svg className="mesh-bg" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="80" />
            </filter>
          </defs>
          <circle cx="300" cy="300" r="220" fill="#06b6d4" filter="url(#blur1)" fillOpacity="0.7" />
          <circle cx="900" cy="200" r="180" fill="#a21caf" filter="url(#blur1)" fillOpacity="0.5" />
          <circle cx="700" cy="600" r="260" fill="#3b82f6" filter="url(#blur1)" fillOpacity="0.5" />
          <circle cx="400" cy="700" r="180" fill="#f59e42" filter="url(#blur1)" fillOpacity="0.4" />
          <circle cx="1000" cy="700" r="120" fill="#22d3ee" filter="url(#blur1)" fillOpacity="0.4" />
        </svg>
        <div className="floating-blob floating-blob-1" />
        <div className="floating-blob floating-blob-2" />
        <div className="floating-blob floating-blob-3" />
        <div className="floating-blob floating-blob-4" />
        <div className="floating-blob floating-blob-5" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <About />
          <Now />
          <HowIWork />
          <ProjectExpertise />
          <WorkExperience />
          <Consulting />
          <Entrepreneurship />
          <Publications />
          <Education />
          <PDFDownload />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
