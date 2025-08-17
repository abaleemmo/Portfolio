import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
// import { MadeWithDyad } from "@/components/made-with-dyad"; // Removed import

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      {/* Future sections like About, Projects, Contact will go here */}
      {/* <MadeWithDyad /> Removed component */}
    </Layout>
  );
};

export default Index;