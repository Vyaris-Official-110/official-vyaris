import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Footer = () => (
    <footer id="contact" className="bg-black text-white py-20 border-t border-zinc-900">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Column 1: Logo & Address */}
                <div className="space-y-8">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold tracking-tighter uppercase text-white flex items-center gap-2">
                        <div className="w-2 h-8 bg-primary"></div>
                        Vyaris
                    </Link>

                    <div className="space-y-4">
                        <div>
                            <h5 className="font-bold text-white mb-2">India</h5>
                            <p className="text-zinc-500 text-sm">Vadodara, Gujarat</p>
                        </div>
                    </div>


                </div>

                {/* Column 2: Useful Links */}
                <div className="lg:col-start-3">
                    <h4 className="text-lg font-bold mb-8">Useful Links</h4>
                    <ul className="space-y-3">
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'Expertise', path: '/expertise' },
                            { label: 'Team', path: '/team' },
                            { label: 'Contact', path: '/contact' }
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
                        <a href="mailto:official@vyaris.com" className="block text-zinc-500 hover:text-primary transition-colors">official@vyaris.com</a>
                        <a href="tel:+917862861266" className="block text-zinc-500 hover:text-primary transition-colors">+91-7862861266</a>
                        <a href="tel:+917600830568" className="block text-zinc-500 hover:text-primary transition-colors">+91-7600830568</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-4">
                    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors rounded-full">
                        <Facebook size={18} />
                    </a> */}
                    <a href="https://www.linkedin.com/company/vyarisofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors rounded-full">
                        <Linkedin size={18} />
                    </a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors rounded-full">
                        <Twitter size={18} />
                    </a> */}
                </div>

                <p className="text-zinc-600 text-sm">Copyright © 2025 Vyaris. All Rights Reserved</p>
            </div>
        </div>
    </footer>
);
