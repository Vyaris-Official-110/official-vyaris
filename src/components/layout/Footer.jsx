import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Footer = () => (
  <footer id="contact" className="bg-black text-white py-20 border-t border-zinc-900">
    <div className="container mx-auto px-6">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           {/* Column 1: Logo & Address */}
           <div className="space-y-8">
               <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-2xl font-bold tracking-tighter uppercase text-white flex items-center gap-2">
                 <div className="w-2 h-8 bg-primary"></div>
                 Vyaris
               </Link>
               
               <div className="space-y-4">
                   <div>
                       <h5 className="font-bold text-white mb-2">Australia</h5>
                       <p className="text-zinc-500 text-sm">Travel World House, Level 7, 17 Jones St, NSW, 2060</p>
                   </div>
                   <div>
                       <h5 className="font-bold text-white mb-2">Dubai</h5>
                       <p className="text-zinc-500 text-sm">Sheikh Mohammed bin salah, #234 B - Downtown - Dubai</p>
                   </div>
               </div>
               
               <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                   <input type="email" placeholder="Your Email" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 w-full focus:border-primary outline-none rounded-sm" />
                   <button type="submit" className="bg-primary text-black px-4 rounded-sm hover:bg-white transition-colors cursor-pointer">
                       <ArrowRight size={18} />
                   </button>
               </form>
           </div>
           
           {/* Column 2: Useful Links */}
           <div className="lg:col-start-3">
               <h4 className="text-lg font-bold mb-8">Useful Links</h4>
               <ul className="space-y-3">
                   {[
                       { label: 'About Us', path: '/' },
                       { label: 'Contact', path: '/contact' },
                       { label: 'FAQS', path: null }, 
                       { label: 'Services', path: '/expertise' },
                       { label: 'Term & Conditions', path: null },
                       { label: 'Privacy Policy', path: null }
                   ].map((item, index) => (
                       <li key={index}>
                           {item.path ? (
                               <Link 
                                   to={item.path}
                                   className="text-zinc-500 hover:text-primary transition-colors text-sm"
                               >
                                   {item.label}
                               </Link>
                           ) : (
                               <span className="text-zinc-500 text-sm cursor-not-allowed opacity-50">{item.label}</span>
                           )}
                       </li>
                   ))}
               </ul>
           </div>
           
           {/* Column 3: Contact Info */}
           <div>
               <h4 className="text-lg font-bold mb-8">Contact Us</h4>
               <div className="space-y-4">
                   <a href="mailto:info@Vyaris.com" className="block text-zinc-500 hover:text-primary transition-colors">info@Vyaris.com</a>
                   <a href="tel:+4733378901" className="block text-zinc-500 hover:text-primary transition-colors">+47 333 78 901</a>
               </div>
           </div>
       </div>
       
       <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex gap-4">
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors rounded-full">
                   <Facebook size={18} />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors rounded-full">
                   <Linkedin size={18} />
               </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors rounded-full">
                   <Twitter size={18} />
               </a>
           </div>
           
           <p className="text-zinc-600 text-sm">Copyright © 2025 Vyaris. All Rights Reserved</p>
       </div>
    </div>
  </footer>
);
