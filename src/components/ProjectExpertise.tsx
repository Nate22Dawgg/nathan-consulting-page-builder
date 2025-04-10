
import React from 'react';

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
        "Increased vector titer and packaging efficiency through process innovation and smart QC systems"
      ]
    },
    {
      title: "Data & Infrastructure",
      items: [
        "Built custom dashboards reducing reporting cycles from days to hours",
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
    <section className="py-16 bg-card" id="project-expertise">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Project Expertise</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {expertise.map((category, index) => (
            <div key={index} className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.title}</h3>
              <ul className="list-disc pl-6 space-y-2 inline-block mx-auto">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExpertise;
