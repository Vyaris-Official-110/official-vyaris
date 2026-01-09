import React from 'react';
import { ContactHero } from '../components/contact-sections/ContactHero';
import { ContactInfo } from '../components/contact-sections/ContactInfo';
import { ContactForm } from '../components/contact-sections/ContactForm';
import { ContactMap } from '../components/contact-sections/ContactMap';

export const Contact = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 bg-background min-h-screen flex flex-col">
      <ContactHero />

      {/* Floating Content Card */}
      <div className="relative z-20 px-6 -mt-32 mb-[-100px]">
        <div className="max-w-6xl mx-auto bg-[#18181B] rounded-sm shadow-2xl overflow-hidden p-8 md:p-16 border border-white/5">
          <div className="grid md:grid-cols-12 gap-12 md:gap-24">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>

      <ContactMap />
    </div>
  );
};
