import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-900 dark:text-gray-50">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abdul-Aleem Mohammed</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            A passionate high school student exploring the world of technology and creativity.
          </p>
          <div className="space-x-4 pt-4">
            <Link to="/projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">View My Work</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;