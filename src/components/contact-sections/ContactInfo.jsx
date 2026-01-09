import React from 'react';
import { Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export const ContactInfo = () => (
  <div className="md:col-span-4 space-y-12">
    {/* Phone Block (Highlighted High-Vis) */}
    <div>
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-2xl font-bold text-primary">+47 333 78 901</span>
      </div>
    </div>

    {/* Location Block */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold uppercase text-zinc-300 tracking-wider">Location</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">
        55 Main Street, The Grand Avenue <br />
        2nd Block, New York City
      </p>
    </div>

    {/* Email Block */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold uppercase text-zinc-300 tracking-wider">Official Email</h4>
      <a href="mailto:info@digital.com" className="block text-zinc-500 hover:text-white transition-colors text-sm">
        info@digital.com
      </a>
    </div>

    {/* Socials Block */}
    <div className="flex gap-3 pt-4">
      {[Facebook, Twitter, Linkedin].map((Icon, i) => (
        <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-all duration-300">
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  </div>
);
