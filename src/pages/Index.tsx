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
      {/* Interactive animated background and floating blobs */}
      <div className="interactive-bg" aria-hidden="true">
        {/* Mesh gradient SVG overlay */}
        <svg className="mesh-bg" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <radialGradient id="mesh1" cx="50%" cy="50%" r="80%" fx="60%" fy="40%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh2" cx="50%" cy="50%" r="80%" fx="30%" fy="70%" gradientTransform="rotate(-15)">
              <stop offset="0%" stopColor="#a21caf" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mesh3" cx="50%" cy="50%" r="80%" fx="80%" fy="80%" gradientTransform="rotate(10)">
              <stop offset="0%" stopColor="#f59e42" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#mesh1)" />
          <rect width="1200" height="800" fill="url(#mesh2)" />
          <rect width="1200" height="800" fill="url(#mesh3)" />
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
