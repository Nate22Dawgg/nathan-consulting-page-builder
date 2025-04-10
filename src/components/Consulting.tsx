
import React from 'react';

const Consulting = () => {
  return (
    <section className="py-16 bg-consulting-50" id="consulting">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-consulting-800 mb-8">Consulting & Strategic Ops</h2>
        <div className="max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-consulting-700 mb-2">
              Erevna — Supported a stealth-mode biotech SaaS startup with landscape analysis, clinical trial sourcing, and early traction strategy
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-consulting-600">
                Helped identify market-fit by mapping Phase III trial opportunities for digital enablement
              </li>
              <li className="text-consulting-600">
                Developed strategic analytics dashboards for internal operations and investor positioning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
