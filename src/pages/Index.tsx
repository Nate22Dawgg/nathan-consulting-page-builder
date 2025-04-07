
import React from 'react';
import Header from "@/components/Header";
import ServicesList from "@/components/ServicesList";
import SampleWins from "@/components/SampleWins";
import ContactForm from "@/components/ContactForm";
import PDFDownload from "@/components/PDFDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-consulting-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-consulting-800 mb-6">
              Nathan – Biotech Ops & Systems Consultant
            </h1>
            <p className="text-xl text-consulting-600 max-w-3xl mx-auto">
              Helping biotech organizations streamline operations, implement effective systems, 
              and scale efficiently through strategic consulting and tailored solutions.
            </p>
          </div>
        </section>
        
        <ServicesList />
        <SampleWins />
        <PDFDownload />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
