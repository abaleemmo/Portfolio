import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
      <div className="container">
        {new Date().getFullYear()} Abdul-Aleem Mohammed.
      </div>
    </footer>
  );
};

export default Footer;