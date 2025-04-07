
import React from 'react';
import { Check } from 'lucide-react';

const ServicesList = () => {
  const services = [
    "Streamline operations through process mapping and optimization",
    "Identify and eliminate bottlenecks in your workflows",
    "Implement scalable systems that grow with your organization",
    "Select and integrate the right technological solutions",
    "Train teams on new procedures and tools",
    "Develop custom dashboards and reporting systems"
  ];

  return (
    <section className="bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8">What I Can Do For You</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-accent" />
                </span>
                <span className="text-lg text-consulting-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
