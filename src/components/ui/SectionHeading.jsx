import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ subtitle, title, align = "left" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <div className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-[1px] w-12 bg-primary"></span>
      <span className="text-primary font-mono text-xs tracking-widest uppercase">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
      {title}
    </h2>
  </motion.div>
);
