import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="group relative p-8 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

    <Icon className="w-12 h-12 text-zinc-600 group-hover:text-primary transition-colors duration-300 mb-6" strokeWidth={1} />

    <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>

    <div className="mt-8 flex items-center text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Learn More <ChevronRight className="w-4 h-4 ml-1" />
    </div>
  </motion.div>
);
