import React from 'react';
import { Check } from 'lucide-react';

const HowIWork = () => {
  const workApproach = [
    "Architect high-performance workflows that unlock 30-50% efficiency gains",
    "Eliminate critical bottlenecks to accelerate time-to-market by months",
    "Engineer scalable systems that drive sustainable growth and reduce operational friction",
    "Curate and deploy mission-critical technology that delivers quantifiable ROI",
    "Transform teams through evidence-based training protocols that maximize adoption",
    "Construct decision intelligence dashboards that convert complex data into strategic advantage"
  ];

  return (
    <section className="py-16 glow" id="how-i-work">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">How I Work</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 inline-block text-left">
            {workApproach.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-accent" />
                </span>
                <span className="text-lg text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
