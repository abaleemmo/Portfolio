import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full py-10 md:py-20 lg:py-28 xl:py-36 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Monogram image adjusted to be 75% width of the text */}
          <img src="/monogram.png" alt="Abdul-Aleem Mohammed Monogram" className="w-3/4 max-w-2xl h-auto dark:invert mb-4 mx-auto" />
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-900 dark:text-gray-50">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abdul-Aleem Mohammed</span>
            </h1>
          </div>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            A passionate high school student exploring the world of technology and creativity.
          </p>
          {/* Removed the "View My Work" and "Get in Touch" buttons */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;