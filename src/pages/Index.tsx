import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      {/* Future sections like About, Projects, Contact will go here */}
      <MadeWithDyad />
    </Layout>
  );
};

export default Index;