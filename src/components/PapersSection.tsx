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
    title: "M3 Challenge Solution Paper",
    description: "This paper was my team's submission for the 2025 M3 Challenge. I wrote it alongside 4 of my friends in a 14-hour span, analyzing data provided to us and leveraging physics principles and math to model the data, as well as leveraging machine learning.",
    pdfUrl: "/m3-challenge-solution-paper.pdf", // Path to your PDF in the public folder
  },
  {
    title: "Effect of Surface Area of a Spherical Bob on the Damping of a Simple Pendulum",
    description: "This paper looks at the effect of surface area of a spherical bob on the damping of a simple pendulum. I wrote this paper during my junior year as a part of my IB Physics SL curriculum, and received a 19 raw mark and 18 moderated mark.",
    pdfUrl: "/pendulum-damping-paper.pdf", // Path to your PDF in the public folder
  },
  {
    title: "Effect of Note-Taking Medium on Memory Recall",
    description: "This paper looks at the effect of note-taking medium on memory recall as guided by the external storage hypothesis. I wrote this paper during my junior year as a part of my IB Psychology SL curriculum, conducting the experiment in a group of 5 on freshmen. I received a 17 raw and moderated mark.",
    pdfUrl: "/note-taking-memory-paper.pdf", // Path to your PDF in the public folder
  },
  {
    title: "An Analysis of the Role of Mass Media and the United States Government in Manipulating Public Opinion During Times of Crisis with Modern Application",
    description: "This paper was written during my sophomore year as a part of my AP Seminar class, and it was a part of the reason why I received the AP Capstone Diploma.",
    pdfUrl: "/mass-media-manipulation-paper.pdf", // Path to your PDF in the public folder
  },
  {
    title: "United States Immigration Policy Consideration: Impact of the H-1B Visa Program on the United States Job Market",
    description: "This paper was written during my sophomore year as a part of a collaborative project, exploring the impact of the H-1B Visa Program on the U.S. job market.",
    pdfUrl: "/h1b-visa-impact-paper.pdf", // Path to your PDF in the public folder
  },
  {
    title: "2024-2025 Wharton Investment Competition Final Report",
    description: "This report was written during my junior year with a group to justify our investment strategy in curating a portfolio in accordance with a case study.",
    pdfUrl: "/wharton-investment-report.pdf", // Path to your PDF in the public folder
  },
  {
    title: "2023-2024 Wharton Investment Competition Final Report",
    description: "This report was my team's submission for the 2023-2024 Wharton Investment Competition, written during my sophomore year to justify our investment strategy in accordance with a case study.",
    pdfUrl: "/wharton-investment-report-2024.pdf", // Path to your PDF in the public folder
  },
];

const PapersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Writing</h2>
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