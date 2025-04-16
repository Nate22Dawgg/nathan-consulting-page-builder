import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const educations = [
  {
    school: 'Colorado State University',
    degree: 'Professional Science Master\'s, Biomedical/Medical Engineering',
    period: '2020 - 2021',
    skills: [
      'Advanced Bioprocess Engineering', 
      'Precision Immunoassay Development',
      'cGMP Process Excellence',
      'Regulatory Compliance Strategy',
      'Quality by Design Implementation',
      'Process Scale-Up Mastery',
      'Executive Business Analytics',
      'Strategic Operations Leadership',
      'Advanced Statistical Modeling',
      'Regulatory Intelligence',
      'Technical Transfer Excellence',
      'Enterprise Data Analysis'
    ]
  },
  {
    school: 'Colorado State University',
    degree: 'Bachelor of Science - BS, Microbiology and Immunology',
    period: '2018 - 2019',
    skills: [
      'Advanced Immunodiagnostics',
      'Multi-parameter Flow Cytometry',
      'High-throughput Molecular Diagnostics',
      'qPCR Assay Development',
      'Next-generation Sequencing',
      'High-sensitivity Immunoassays',
      'Host-Pathogen Systems Biology',
      'Containment Level 3 Operations',
      'Mycobacterial Research Specialization',
      'GLP Protocol Development'
    ]
  },
  {
    school: 'Middlebury College',
    degree: 'Biochemistry and Molecular Biology',
    period: '2013 - 2016',
    skills: [
      'Advanced Molecular Biology Techniques',
      'Structural Biochemistry Analysis',
      'Precision Laboratory Methodologies',
      'Scientific Publication Excellence',
      'Research Method Development',
      'Critical Systems Analysis',
      'Protein Characterization Expertise',
      'Organic Synthesis Applications'
    ]
  }
];

const Education = () => {
  return (
    <section className="py-16 glow" id="education">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        <div className="centered-grid gap-8">
          {educations.map((education, idx) => (
            <Card key={idx} className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-card/80 border-accent/30 w-full">
              <CardHeader>
                <CardTitle className="text-lg text-white text-center mb-2">{education.school}</CardTitle>
                <div className="text-gray-400 text-sm text-center mb-2">{education.degree}</div>
                <div className="text-gray-400 text-sm text-center">{education.period}</div>
                {education.skills && (
                  <div className="text-gray-400 text-sm text-center mt-2">
                    <span className="font-medium">Skills:</span> {education.skills.join(' · ')}
                  </div>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
