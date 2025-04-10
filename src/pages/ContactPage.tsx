
import React from 'react';
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 text-white hover:bg-background/50">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-center mb-8">Contact Me</h1>
            <p className="text-center text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              I'm here to help your biotech organization optimize operations and implement 
              effective systems. Let me know what challenges you're facing, and we can discuss 
              how I can assist you.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
