import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full py-6 md:py-12 lg:py-16 xl:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-3"> {/* Reduced space-y */}
          {/* Monogram image adjusted to be 60% width of the text */}
          <img src="/monogram.png" alt="Abdul-Aleem Mohammed Monogram" className="w-2/3 max-w-xl h-auto dark:invert mb-2 mx-auto" /> {/* Reduced width and margin-bottom */}
          <div className="flex items-center justify-center gap-3"> {/* Reduced gap */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50"> {/* Reduced font sizes */}
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abdul-Aleem Mohammed</span>
            </h1>
          </div>
          <p className="mx-auto max-w-[600px] text-gray-600 md:text-lg dark:text-gray-300"> {/* Reduced max-width and font size */}
            A passionate high school student exploring the world of technology and creativity.
          </p>
          {/* Removed the "View My Work" and "Get in Touch" buttons */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;