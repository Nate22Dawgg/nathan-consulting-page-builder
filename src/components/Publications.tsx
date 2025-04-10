
import React from 'react';

const Publications = () => {
  const publications = [
    "Silverberg J, Cho J, Patel M, Youssef N, Mingozzi F, Cohen D, Armour S. Expanding the Toolbox of Ubiquitous Promoters for Gene Therapy. Molecular Therapy, ASGCT Conference 2023",
    "Dutt T, Karger B, Fox A, Youssef N, et al. Mucosal exposure to non-tuberculous mycobacteria elicits B cell-mediated immunity against pulmonary tuberculosis. Cell Reports, 2022",
    "Vera-Cabrera L, Ramos-Cavazos C, Youssef N, et al. Mycobacterium leprae Infection in a Wild Nine-Banded Armadillo, Nuevo León, Mexico. Emerging Infectious Diseases, 2022",
    "Youssef N. A SuperPro model to manufacture recombinant IL-2 from E. coli. Presented to Bioengineering and Bioseparations, CSU, 2020",
    "Peccoud J, Youssef N, et al. Current Engineering Strategies for AAV Vaccine Vector Design. Submitted Review Article, 2020",
    "Youssef N, Spencer J, Ghiringhelli B. A Novel Approach to Detect LAM using a Capture-Detection ELISA System. Poster Presentation, CSU, 2019"
  ];

  return (
    <section className="py-16 bg-consulting-50" id="publications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-consulting-800 mb-8">Publications</h2>
        <div className="max-w-4xl">
          <ul className="space-y-4">
            {publications.map((publication, index) => (
              <li key={index} className="text-consulting-600">{publication}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
