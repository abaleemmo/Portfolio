import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

interface IBScore {
  year: string;
  scores: { subject: string; score: string; }[];
}

const ibScores: IBScore[] = [
  {
    year: "2025",
    scores: [
      { subject: "Physics SL", score: "6" },
      { subject: "Psychology SL", score: "6" },
    ],
  },
  {
    year: "2026 (Expected)",
    scores: [
      { subject: "Math HL AA", score: "Expected" },
      { subject: "English HL", score: "Expected" },
      { subject: "Chemistry HL", score: "Expected" },
      { subject: "Spanish SL", score: "Expected" },
      { subject: "Sports Science SL", score: "Expected" },
    ],
  },
];

const IBTestScoresSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">International Baccalaureate (IB) Scores</h2>
        <div className="grid gap-8">
          <Card className="w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">IB Diploma Programme Scores</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                My IB scores reflect my performance in the rigorous International Baccalaureate Diploma Programme. For more information on IB scoring and subject details, please refer to the official International Baccalaureate Organization website (ibo.org).
              </CardDescription>
            </CardHeader>
            <CardContent>
              {ibScores.map((yearData, index) => (
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

export default IBTestScoresSection;