import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 w-full pt-16 md:pt-0">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Side: Text */}
        <div className="flex-1 w-full max-w-[600px] text-left">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <p className="text-[#00E5FF] font-mono mb-6 text-sm md:text-lg tracking-wide uppercase font-semibold">
              Hi, my name is
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-[5rem] font-bold text-[#f0f4f8] font-display leading-[1.1] mb-2 tracking-tight">
              Md Abdul Basit.
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-[4rem] font-bold text-[#718096] font-display leading-tight mb-8 tracking-tight">
              I build scalable data logic.
            </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[#a0aec0] font-sans text-lg md:text-[1.125rem] leading-[1.8] mb-12 max-w-[540px]">
              I'm a software engineer specializing in building rigorous backend logic, data-driven pipelines, and exceptional web experiences. Currently, I'm focused on mastering full-stack capabilities at <span className="text-[#00e5ff] font-medium">Lovely Professional University</span>.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex flex-wrap gap-4"
          >
            <a href="/cv.pdf" download="Md_Abdul_Basit_CV" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00E5FF] text-[#000] font-display font-bold text-[1rem] rounded-full hover:bg-[#5effff] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
            <a href="#contact" className="inline-block px-8 py-4 border-2 border-[#ffffff26] text-[#f0f4f8] font-display font-semibold text-[1rem] rounded-full hover:border-[#00E5FF] hover:text-[#00E5FF] hover:bg-[#00e5ff26] transition-all">
              Get in Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 pt-6 border-t border-[#ffffff0d] w-full max-w-[540px]"
          >
            <a href="https://github.com/Basit0012" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full border border-[#ffffff0d] bg-[#ffffff05] flex items-center justify-center text-[#a0aec0] hover:text-[#00e5ff] hover:border-[#00e5ff] hover:bg-[#00e5ff10] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/md-abdul-basit18" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full border border-[#ffffff0d] bg-[#ffffff05] flex items-center justify-center text-[#a0aec0] hover:text-[#00e5ff] hover:border-[#00e5ff] hover:bg-[#00e5ff10] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated Circular Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="shrink-0 relative hidden lg:block"
        >
          <div className="relative w-[440px] h-[440px] flex items-center justify-center p-[10px]">
            {/* The outer rotating CSS conic gradient ring */}
            <div className="absolute inset-0 rounded-full" style={{
                background: 'conic-gradient(from 0deg, transparent 0%, #00e5ff 30%, #ffffff0d 60%, transparent 100%)',
                animation: 'spin 12s linear infinite'
            }}></div>
            
            {/* The inner photo frame — FIXED, no spin */}
            <div className="absolute inset-[10px] rounded-full border-4 border-[#000] bg-[#020610] overflow-hidden">
                <img src="/profile.jpg" alt="Md Abdul Basit" className="w-full h-full object-cover object-top" />
            </div>

            {/* Floating badges */}
            <div className="absolute top-[5%] left-[0%] z-10 w-[44px] h-[44px] bg-[#000] border border-[#ffffff0d] rounded-full flex items-center justify-center text-[#00e5ff] font-bold shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all cursor-default">
              {'</>'}
            </div>
            <div className="absolute bottom-[8%] right-[10%] z-10 w-[44px] h-[44px] bg-[#000] border border-[#ffffff0d] rounded-full flex items-center justify-center text-[#00e5ff] font-bold shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all cursor-default" style={{ animation: 'spin 12s linear infinite', animationDirection: 'reverse' }}>
              {'JS'}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
