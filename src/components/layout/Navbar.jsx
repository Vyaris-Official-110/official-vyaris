import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
       setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleNavClick = () => {
      setIsOpen(false);
      window.scrollTo(0,0);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
             {/* <img src="/assets/img/logo-light.png" alt="Vyaris" className="h-10 hidden" />  */}
             {/* Fallback Logo if image missing */}
             <div className="text-2xl font-bold tracking-tighter uppercase text-white flex items-center gap-2">
               <div className="w-2 h-8 bg-primary"></div>
               Vyaris
             </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                   <Link 
                     to={link.path}
                     className={`text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors ${isActive(link.path) ? 'text-white' : 'text-zinc-300'}`}
                   >
                     {link.label}
                   </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Side Menu / Mobile Menu - Rendered outside nav for proper fixed positioning */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay - click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-[100]"
              onClick={() => setIsOpen(false)}
            />
            {/* Side Panel */}
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-zinc-900 z-[101] p-12 border-l border-zinc-800 shadow-2xl overflow-y-auto"
            >
              <button className="absolute top-6 right-6 text-zinc-400 hover:text-white" onClick={() => setIsOpen(false)}>
                  <X size={32} />
              </button>
              
              <div className="mb-12 mt-8">
                   <div className="text-2xl font-bold tracking-tighter uppercase text-white flex items-center gap-2 mb-8">
                     <div className="w-2 h-8 bg-primary"></div>
                     Vyaris
                   </div>
                   <p className="text-zinc-400 leading-relaxed">
                       Providing innovative solutions in branding, marketing, design, and advertising.
                   </p>
              </div>
              
              <div className="space-y-8">
                  <div>
                       <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Menu</h4>
                       <ul className="space-y-4">
                           {navLinks.map((link) => (
                              <li key={link.path}>
                                  <Link 
                                      to={link.path}
                                      onClick={handleNavClick}
                                      className={`text-xl font-bold hover:text-primary block ${isActive(link.path) ? 'text-white' : 'text-zinc-500'}`}
                                  >
                                      {link.label}
                                  </Link>
                              </li>
                           ))}
                       </ul>
                  </div>

                  <div>
                      <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Address</h4>
                      <p className="text-zinc-400">Vadodara, Gujarat</p>
                      <p className="text-zinc-400 mt-2">official@vyaris.com</p>
                  </div>
                  
                  <div className="pt-4">
                      <div className="flex">
                          <input type="email" placeholder="Enter your e-mail" className="bg-zinc-800 border-none text-white px-4 py-3 w-full focus:ring-1 focus:ring-primary outline-none" />
                          <button className="bg-primary text-black px-4 hover:bg-white transition-colors">
                              <ArrowRight />
                          </button>
                      </div>
                  </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

