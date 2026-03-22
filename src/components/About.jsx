import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent min-h-screen border-t border-[#ffffff0d] font-sans">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-left">
        <div className="mb-16">
          <h4 className="text-[#00E5FF] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">LEARN MORE</h4>
          <h2 className="text-[2.5rem] font-bold text-[#f0f4f8] font-display">
            About <span className="text-[#00E5FF]">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-[#94a3b8] text-[1.1rem] leading-relaxed space-y-6"
          >
            <p>
              Hello! My name is <strong className="text-[#00E5FF] font-medium">Md Abdul Basit</strong> and I enjoy building secure, high-performance logic that lives on the internet. My interest in software engineering started when I learned how to modify simple game scripts—turns out parsing data structures taught me a lot about problem solving!
            </p>
            <p>
              Fast-forward to today, I'm pursuing my B.Tech in CSE at <span className="text-[#00E5FF]">Lovely Professional University</span>. I've had the privilege of training under senior architects and learning core paradigms of scaling databases and writing robust APIs. My main focus these days is building <span className="text-slate-300 font-medium">Full-Stack products</span> that enforce security at the deepest levels.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4 text-[0.85rem] font-mono text-slate-400">
              <li className="flex items-center gap-2"><span className="text-[#00E5FF] text-[8px]">▹</span> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF] text-[8px]">▹</span> Tailwind CSS</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF] text-[8px]">▹</span> React.js</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF] text-[8px]">▹</span> Node.js</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF] text-[8px]">▹</span> MongoDB</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF] text-[8px]">▹</span> Python</li>
            </ul>
          </motion.div>

          {/* Simple floating right-side profile frame mimicking Anikket's standard layout */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative w-full max-w-[380px] mx-auto lg:mx-0 group"
          >
            <div className="absolute inset-0 bg-[#00E5FF] rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
            <div className="relative z-10 w-full aspect-square rounded-lg border-2 border-[#00E5FF] overflow-hidden">
              <img src="/about-illustration.png" alt="About Md Abdul Basit" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
