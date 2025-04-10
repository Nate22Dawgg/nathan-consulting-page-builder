
import React from 'react';
import { Check } from 'lucide-react';

const HowIWork = () => {
  const workApproach = [
    "Map & optimize workflows to uncover hidden efficiencies",
    "Eliminate bottlenecks and reduce processing time",
    "Scale systems that grow with your team, not against it",
    "Select and integrate tech that supports real work",
    "Train teams with empathy and clarity",
    "Build custom dashboards that turn data into decisions"
  ];

  return (
    <section className="py-16 bg-white" id="how-i-work">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-consulting-800 mb-6">How I Work</h2>
        <div className="max-w-3xl">
          <ul className="space-y-4">
            {workApproach.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-accent" />
                </span>
                <span className="text-lg text-consulting-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
