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
import Background from "@/components/Background";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
      {/* Interactive animated background with professional particles effect */}
      <Background />
      
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
