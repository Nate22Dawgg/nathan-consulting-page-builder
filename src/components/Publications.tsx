import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const publications = [
  "Silverberg J, Cho J, Patel M, Youssef N, Mingozzi F, Cohen D, Armour S. Expanding the Toolbox of Ubiquitous Promoters for Gene Therapy. Molecular Therapy, ASGCT Conference 2023",
  "Dutt T, Karger B, Fox A, Youssef N, et al. Mucosal exposure to non-tuberculous mycobacteria elicits B cell-mediated immunity against pulmonary tuberculosis. Cell Reports, 2022",
  "Vera-Cabrera L, Ramos-Cavazos C, Youssef N, et al. Mycobacterium leprae Infection in a Wild Nine-Banded Armadillo, Nuevo León, Mexico. Emerging Infectious Diseases, 2022",
  "Youssef N. A SuperPro model to manufacture recombinant IL-2 from E. coli. Presented to Bioengineering and Bioseparations, CSU, 2020",
  "Peccoud J, Youssef N, et al. Current Engineering Strategies for AAV Vaccine Vector Design. Submitted Review Article, 2020",
  "Youssef N, Spencer J, Ghiringhelli B. A Novel Approach to Detect LAM using a Capture-Detection ELISA System. Poster Presentation, CSU, 2019"
];

const Publications = () => {
  return (
    <section className="py-16 glow" id="publications">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Publications</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication, idx) => (
            <Card key={idx} className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-card/80 border-accent/30">
              <CardHeader />
              <CardContent>
                <div className="text-gray-300 text-sm text-left">{publication}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
