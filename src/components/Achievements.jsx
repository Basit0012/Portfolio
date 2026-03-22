import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-transparent border-t border-[#ffffff0d] font-sans">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        <div className="mb-16">
          <h4 className="text-[#00e5ff] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">OPEN SOURCE</h4>
          <h2 className="text-[2.5rem] font-bold text-[#f0f4f8] font-display">
            Open Source & <span className="text-[#00e5ff]">Achievements</span>
          </h2>
        </div>

        {/* GitHub Contribution Graph Image */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
           className="w-full bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] rounded-[16px] overflow-hidden hover:border-[#00e5ff]/20 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
         >
           <img 
             src="/github-contributions.png" 
             alt="GitHub Contributions" 
             className="w-full h-auto object-cover"
           />
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
