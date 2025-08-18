import React from 'react';
import PaperCard from './PaperCard';

interface Paper {
  title: string;
  description: string;
  pdfUrl: string;
}

const papers: Paper[] = [
  {
    title: "Lloyd Expressway Traffic Signal Logic Optimization",
    description: "This paper, written over the course of my junior year, was submitted for AP Research (on which I received a 5) and my IB Extended Essay. It explores the optimization of traffic signal logic on the Lloyd Expressway.",
    pdfUrl: "/lloyd-expressway-traffic-paper.pdf", // Path to your PDF in the public folder
  },
  {
    title: "My First Research Paper",
    description: "This paper explores the initial findings of my research into [brief topic]. It details the methodology, results, and conclusions drawn from the study.",
    pdfUrl: "/paper1.pdf", // Path to your PDF in the public folder
  },
  {
    title: "An Analysis of [Another Topic]",
    description: "A comprehensive analysis of [another brief topic], discussing its implications and future research directions. This paper highlights key insights and challenges.",
    pdfUrl: "/paper2.pdf", // Path to your PDF in the public folder
  },
  // Add more papers here
];

const PapersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Papers</h2>
        <div className="grid gap-8">
          {papers.map((paper, index) => (
            <PaperCard key={index} {...paper} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PapersSection;