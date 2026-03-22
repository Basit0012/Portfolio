import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ subtitle, title, highlight }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {subtitle && <h4 className="text-cyan-400 tracking-[0.2em] text-sm uppercase font-bold mb-3">{subtitle}</h4>}
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100">
        {title} <span className="text-cyan-400">{highlight}</span>
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
