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
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Clients />
        <Process />
        <Blog />
    </div>
  );
};
