import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const work = [
  {
    title: 'Spark Therapeutics — Discovery Research (Gene Therapy)',
    items: [
      'Supported AAV-based neuroscience payload optimization, focusing on DNA tile construction, codon-optimized sequence verification, and transgene screening',
      'Developed and transferred high-throughput antigen-detection and enzymatic assays (ELISA, chromogenic, flow cytometry) for preclinical assessment and downstream process development',
      'Facilitated lead candidate selection and seamless tech transfer into process development for HemA and Huntington\'s programs',
    ],
  },
  {
    title: 'CSU Mycobacteria Labs — Researcher (Academic R&D)',
    items: [
      'Conducted preclinical immunological studies in BSL-3, analyzing host responses to non-tuberculous mycobacteria and tuberculosis vaccines',
      'Designed and performed high-dimensional flow cytometry, molecular diagnostics (PCR, qPCR, sequencing), and ELISA-based detection for host-pathogen profiling',
      'Trained research assistants and standardized protocols for global collaborations on mycobacterial diagnostics, mucosal immunity, and surveillance tools',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="py-16 glow" id="work-experience">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Work</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {work.map((job, idx) => (
            <Card key={idx} className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-card/80 border-accent/30">
              <CardHeader>
                <CardTitle className="text-lg text-white text-center mb-2">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-left">
                  {job.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-300 text-sm">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
