import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ProjectExpertise = () => {
  const expertise = [
    {
      title: "DNA Synthesis & Synthetic Biology",
      items: [
        "Designed and optimized workflows for high-efficiency DNA synthesis",
        "Built codon-optimized transgenes for mammalian and microbial expression"
      ]
    },
    {
      title: "Process Design & Scale-Up",
      items: [
        "Quality by design and Design of Experiment (DoE) principles applied in SuperPro designer to model large-scale biomanufacturing platforms",
        "Led lab buildouts and system integrations to support GMP-aligned workflows"
      ]
    },
    {
      title: "Viral Vector & AAV Platforms",
      items: [
        "Implemented upstream/downstream protocols for rAAV and lentiviral vector delivery systems",
        "Increased viral vector potency by supporting codon optimization algorithm development and by developing cell-based functional assays to streamline candidate selection"
      ]
    },
    {
      title: "Data & Infrastructure",
      items: [
        "At Erevna, developed clinical trial analytics pipelines by synthesizing trial and site data from ClinicalTrials.gov to identify Phase III digital trial opportunities",
        "Built pharma evaluation dashboards to support strategic positioning and outreach with insights on therapeutic area trends, trial density, and investigator networks"
      ]
    },
    {
      title: "Scientific Insights",
      items: [
        "Developed epidemiological modeling pipelines and supported public health surveillance with SNP-based diagnostic deployment in international settings",
        "Designed machine learning models (CNN, scikit-learn, PyTorch) for bioprocess forecasting and immunoassay pattern recognition",
        "Supported preclinical assay development for gene therapies and immunotherapies (ELISA, flow cytometry, chromogenic activity assays)",
        "Led technology transfer of transgenes and bioassays into regulated preclinical platforms"
      ]
    }
  ];

  return (
    <section className="py-16 glow" id="project-expertise">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Project Expertise</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((category, index) => (
            <Card key={index} className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-card/80 border-accent/30">
              <CardHeader>
                <CardTitle className="text-lg text-white text-center mb-2">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-left">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm">{item}</li>
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

export default ProjectExpertise;
