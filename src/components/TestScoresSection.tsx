import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface APScore {
  year: string;
  scores: { subject: string; score: string; }[];
}

const apScores: APScore[] = [
  {
    year: "2023",
    scores: [
      { subject: "AP United States History", score: "4" },
    ],
  },
  {
    year: "2024",
    scores: [
      { subject: "AP Physics 1: Algebra-Based", score: "4" },
      { subject: "AP United States Government and Politics", score: "5" },
      { subject: "AP English Language and Composition", score: "5" },
      { subject: "AP World History: Modern", score: "5" },
      { subject: "AP Seminar", score: "4" },
      { subject: "AP Precalculus", score: "5" },
      { subject: "AP Microeconomics", score: "3" },
      { subject: "AP Macroeconomics", score: "4" },
    ],
  },
  {
    year: "2025",
    scores: [
      { subject: "AP English Literature and Composition", score: "4" },
      { subject: "AP Calculus BC", score: "5, AB Subscore: 5" },
      { subject: "AP Spanish Language and Culture", score: "5" },
      { subject: "AP Physics 2: Algebra-Based", score: "5" },
      { subject: "AP Research", score: "5" },
      { subject: "AP Chemistry", score: "5" },
    ],
  },
];

const TestScoresSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Test Scores</h2>
        <div className="grid gap-8">
          <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Advanced Placement (AP) Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Your AP scores consistently demonstrate a strong grasp of advanced subjects, with many scores at or above the national average for these challenging exams. For specific national average scores by subject and year, please refer to the official College Board website (collegeboard.org).
              </p>
              {apScores.map((yearData, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">• {yearData.year}:</h3>
                  <ul className="list-disc pl-8 space-y-1 text-gray-700 dark:text-gray-300">
                    {yearData.scores.map((score, scoreIndex) => (
                      <li key={scoreIndex}>{score.subject} ({score.score})</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestScoresSection;