import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'; // Import CardDescription

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
  {
    year: "2026 (Expected)",
    scores: [
      { subject: "AP Computer Science A", score: "Expected" },
      { subject: "AP Physics C: Mechanics", score: "Expected" },
      { subject: "AP Physics C: Electricity and Magnetism", score: "Expected" },
      { subject: "AP Statistics", score: "Expected" },
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
              <CardDescription className="text-gray-600 dark:text-gray-400">
                My AP scores consistently reflect strong performance in challenging subjects, with many results significantly exceeding national averages. For detailed national average scores by subject and year, please refer to the official College Board website (collegeboard.org).
              </CardDescription>
            </CardHeader>
            <CardContent>
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