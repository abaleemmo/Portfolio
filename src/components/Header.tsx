import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Abdul-Aleem Mohammed
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">About</Link>
          <Link to="/work-experiences" className="text-sm font-medium hover:text-primary">Experience</Link>
          <Link to="/volunteer-experiences" className="text-sm font-medium hover:text-primary">Volunteer</Link> {/* New link */}
          <Link to="/projects" className="text-sm font-medium hover:text-primary">Projects</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 pt-6">
                <Link to="/" className="text-lg font-medium hover:text-primary">Home</Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary">About</Link>
                <Link to="/work-experiences" className="text-lg font-medium hover:text-primary">Experience</Link>
                <Link to="/volunteer-experiences" className="text-lg font-medium hover:text-primary">Volunteer</Link> {/* New link */}
                <Link to="/projects" className="text-lg font-medium hover:text-primary">Projects</Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;