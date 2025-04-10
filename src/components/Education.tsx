
import React from 'react';

const Education = () => {
  return (
    <section className="py-16 bg-white" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-consulting-800 mb-8">Education & MBA Core</h2>
        <div className="max-w-4xl">
          <h3 className="text-xl font-semibold text-consulting-700 mb-2">
            Professional Science Master's — Colorado State University
          </h3>
          <p className="text-consulting-600 mb-4">
            Biotechnology and Biomanufacturing, 2020–2022
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-consulting-600">
              Integrated a year-long MBA core in marketing, healthcare analytics, and business operations
            </li>
            <li className="text-consulting-600">
              Built financial models, analyzed incentive structures, and applied statistical tools in Excel and R
            </li>
            <li className="text-consulting-600">
              Gained hands-on experience translating science into strategy across regulatory, commercialization, and data analysis contexts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
