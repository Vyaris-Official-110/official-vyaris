import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const Contact = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 bg-background min-h-screen flex flex-col">
    
    {/* 1. Page Header / Breadcrumb */}
    {/* This section provides the dark top background and the title */}
    <div className="relative pt-40 pb-64 flex flex-col items-center justify-center bg-[#0E0F11] overflow-hidden">
        {/* Abstract Background Shapes/Gradients to match the 'swirl' effect in the image */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-zinc-800/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-background to-background opacity-80"></div>
        
        <div className="relative z-10 text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Get In Touch</h1>
            <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
                <span className="text-zinc-600">/</span>
                <span className="text-white">Contact-Us</span>
            </div>
        </div>
    </div>

    {/* 2. Floating Content Card */}
    {/* This container has a negative top margin to pull it up over the header/background, 
        and z-index to stay on top of the map below. */}
    <div className="relative z-20 px-6 -mt-32 mb-[-100px]">
      <div className="max-w-6xl mx-auto bg-[#18181B] rounded-sm shadow-2xl overflow-hidden p-8 md:p-16 border border-white/5">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Column: Contact Info */}
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

          {/* Right Column: Form */}
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

        </div>
      </div>
    </div>

    {/* 3. Map Area (Background for the card's bottom half) */}
    <div className="relative h-[600px] w-full z-0 mt-[-100px]">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48388.929990966964!2d-74.00332!3d40.711233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653598669477!5m2!1sen!2sus" 
            className="w-full h-full border-0 filter grayscale invert contrast-[1.1] brightness-[0.8]" 
            allowFullScreen="" 
            loading="lazy"
        ></iframe>
    </div>

  </div>
);
