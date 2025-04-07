
import React from 'react';
import { Check } from 'lucide-react';

const SampleWins = () => {
  const wins = [
    "Reduced sample processing time by 40% through workflow optimization",
    "Implemented lab information system that increased data accuracy by 95%",
    "Designed scalable protocol that enabled 3x throughput without additional headcount",
    "Integrated existing systems to eliminate manual data entry and reduce errors by 85%",
    "Developed custom dashboard reducing report creation time from 3 days to 1 hour"
  ];

  return (
    <section className="bg-consulting-50" id="wins">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8">Sample Wins</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {wins.map((win, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-accent" />
                </span>
                <span className="text-lg text-consulting-700">{win}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SampleWins;
