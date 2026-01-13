import React from 'react';
import { Hero } from '../components/home-sections/Hero';
import { About } from '../components/home-sections/About';
import { Services } from '../components/home-sections/Services';
import { Portfolio } from '../components/home-sections/Portfolio';
import { Team } from '../components/home-sections/Team';
import { Testimonials } from '../components/home-sections/Testimonials';
import { Clients } from '../components/home-sections/Clients';
import { Process } from '../components/home-sections/Process';
import { Blog } from '../components/home-sections/Blog';
import { Ticker } from '../components/ui/Ticker';

export const Home = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* 1. Hero/Banner Section */}
      <Hero />

      {/* 2. Ticker (Brand accent) */}
      <Ticker />

      {/* 3. About Section */}
      <About />

      {/* 4. Services Section */}
      <Services />

      {/* 5. Portfolio/Projects Section */}
      {/* <Portfolio /> */}

      {/* 6. Team Section */}
      <Team />

      {/* 7. Testimonials Section */}
      <Testimonials />

      {/* 8. Clients Section */}
      <Clients />

      {/* 9. Process/Workflow Section */}
      <Process />

      {/* 10. Blog Section */}
      {/* <Blog /> */}

      {/* Note: Contact is in its own page route */}
    </div>
  );
};
