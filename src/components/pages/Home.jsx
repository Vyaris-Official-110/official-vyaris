import React from 'react';
import { Hero } from '../sections/Vyaris/Hero';
import { About } from '../sections/Vyaris/About';
import { Services } from '../sections/Vyaris/Services';
import { Portfolio } from '../sections/Vyaris/Portfolio';
import { Team } from '../sections/Vyaris/Team';
import { Testimonials } from '../sections/Vyaris/Testimonials';
import { Clients } from '../sections/Vyaris/Clients';
import { Process } from '../sections/Vyaris/Process';
import { Blog } from '../sections/Vyaris/Blog';
import { Ticker } from '../ui/Ticker';

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
