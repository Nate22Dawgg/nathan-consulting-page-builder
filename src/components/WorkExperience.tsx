
import React from 'react';

const WorkExperience = () => {
  return (
    <section className="py-16 bg-background" id="work">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Work</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Spark Therapeutics — Discovery Research (Gene Therapy)</h3>
            <ul className="list-disc pl-6 space-y-2 inline-block mx-auto">
              <li className="text-gray-300">
                Supported AAV-based neuroscience payload optimization, focusing on DNA tile construction, codon-optimized sequence verification, and transgene screening
              </li>
              <li className="text-gray-300">
                Developed and transferred high-throughput antigen-detection and enzymatic assays (ELISA, chromogenic, flow cytometry) for preclinical assessment and downstream process development
              </li>
              <li className="text-gray-300">
                Facilitated lead candidate selection and seamless tech transfer into process development for HemA and Huntington's programs
              </li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-semibold text-white mb-2 text-center">CSU Mycobacteria Labs — Researcher (Academic R&D)</h3>
            <ul className="list-disc pl-6 space-y-2 inline-block mx-auto">
              <li className="text-gray-300">
                Conducted preclinical immunological studies in BSL-3, analyzing host responses to non-tuberculous mycobacteria and tuberculosis vaccines
              </li>
              <li className="text-gray-300">
                Designed and performed high-dimensional flow cytometry, molecular diagnostics (PCR, qPCR, sequencing), and ELISA-based detection for host-pathogen profiling
              </li>
              <li className="text-gray-300">
                Trained research assistants and standardized protocols for global collaborations on mycobacterial diagnostics, mucosal immunity, and surveillance tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
