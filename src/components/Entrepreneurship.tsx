import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ventures = [
  {
    title: 'SustainableLather.com',
    description: 'Founded a handcrafted soap company focused on zero-waste packaging and ethical ingredients',
    items: [
      'Built e-commerce storefront, managed ad strategy, and used analytics to drive targeting for product-market fit',
      'Bootstrapped sales through social, word of mouth, and Google ads while learning full-stack Shopify customization',
    ],
  },
];

const Entrepreneurship = () => {
  return (
    <section className="py-16 glow" id="entrepreneurship">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Entrepreneurship</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, idx) => (
            <Card key={idx} className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-card/80 border-accent/30">
              <CardHeader>
                <CardTitle className="text-lg text-white text-center mb-2">{venture.title}</CardTitle>
                <div className="text-gray-400 text-sm text-center mb-2">{venture.description}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-left">
                  {venture.items.map((item, itemIdx) => (
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

export default Entrepreneurship;
