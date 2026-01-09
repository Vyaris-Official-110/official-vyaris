import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactForm = () => (
  <div className="md:col-span-8">
    <div className="mb-10">
      <div className="inline-block px-3 py-1 border border-white/10 rounded-full mb-4">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400">Have Questions?</span>
      </div>
      <h2 className="text-4xl font-bold text-white mb-2">Send us a Massage</h2>
    </div>

    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-8">
        <div className="group relative">
          <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors text-sm" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative">
            <input type="email" placeholder="Email*" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors text-sm" />
          </div>
          <div className="group relative">
            <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors text-sm" />
          </div>
        </div>

        <div className="group relative">
          <textarea placeholder="Tell Us About Project *" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors text-sm min-h-[100px] resize-none"></textarea>
          <div className="absolute bottom-3 right-0 w-2 h-2 border-r border-b border-zinc-600"></div>
        </div>
      </div>

      <div className="pt-2">
        <Button primary className="w-full md:w-auto px-10">
          Get in Touch <Send className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  </div>
);
