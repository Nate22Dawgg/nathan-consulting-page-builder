import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const consultingProjects = [
  {
    title: 'Stealth Mode Biotech SaaS',
    description: 'Supported a stealth-mode biotech SaaS startup with landscape analysis, clinical trial sourcing, and early traction strategy',
    items: [
      'Helped identify market-fit by mapping clinical trial opportunities for digital enablement',
      'Developed strategic analytics dashboards for internal operations and investor positioning',
    ],
  },
];

const Consulting = () => {
  return (
    <section className="py-16 glow" id="consulting">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Consulting & Strategic Ops</h2>
        <div className="centered-grid gap-8">
          {consultingProjects.map((project, idx) => (
            <Card key={idx} className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-card/80 border-accent/30 w-full">
              <CardHeader>
                <CardTitle className="text-lg text-white text-center mb-2">{project.title}</CardTitle>
                <div className="text-gray-400 text-sm text-center mb-2">{project.description}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-left">
                  {project.items.map((item, itemIdx) => (
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

export default Consulting;
