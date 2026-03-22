import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const certs = [
    {
      title: "Introduction to CRUD Operations",
      org: "MongoDB",
      date: "May 2025",
      link: "https://www.linkedin.com/in/md-abdul-basit18/details/certifications/1758604234451/single-media-viewer/?profileId=ACoAAFoQofEB-WWyogYG4r3rlmZOYqR6-C-htaU",
      imgBg: "from-[#00684A] to-[#001E2B]",
      imgLabel: "MongoDB"
    },
    {
      title: "Data Structures & Algorithms",
      org: "Cipher Schools",
      date: "June 2025",
      link: "/Cipher_Certificate.pdf",
      imgBg: "from-[#1a1a2e] to-[#16213e]",
      imgLabel: "Cipher Schools"
    },
    {
      title: "Responsive Web Design",
      org: "freeCodeCamp",
      date: "Oct 2023",
      link: "https://www.linkedin.com/in/md-abdul-basit18/details/certifications/1758604028108/single-media-viewer/?profileId=ACoAAFoQofEB-WWyogYG4r3rlmZOYqR6-C-htaU",
      imgBg: "from-[#006400] to-[#003200]",
      imgLabel: "freeCodeCamp"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-transparent font-sans border-t border-[#ffffff0d]">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        <div className="mb-16">
          <h4 className="text-[#00e5ff] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">ACHIEVEMENTS</h4>
          <h2 className="text-[2.5rem] font-bold text-[#f0f4f8] font-display">
            Certifications & <span className="text-[#00e5ff]">Awards</span>
          </h2>
        </div>

        {/* Cert Cards - centered column */}
        <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
          {certs.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-row-reverse items-center gap-5 bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] rounded-[16px] p-5 hover:bg-[#ffffff0a] hover:border-[#00e5ff]/30 hover:-translate-y-1 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)] group"
            >
              {/* Certificate thumbnail — right side in DOM, appears right visually */}
              <div className={`shrink-0 w-[160px] aspect-[16/10] rounded-[8px] border border-[#ffffff0d] bg-gradient-to-br ${cert.imgBg} overflow-hidden flex items-center justify-center relative`}>
                <span className="text-[11px] font-mono text-white/40 text-center px-2">{cert.imgLabel}</span>
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-1 p-3 opacity-20">
                  <div className="w-full h-[2px] bg-white/40 rounded"></div>
                  <div className="w-3/4 h-[1px] bg-white/30 rounded"></div>
                  <div className="w-full h-[1px] bg-white/20 rounded"></div>
                  <div className="w-4/5 h-[1px] bg-white/20 rounded"></div>
                </div>
              </div>

              {/* Info section */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {/* Teal icon */}
                <div className="shrink-0 w-10 h-10 rounded-[8px] bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <h4 className="text-[#f0f4f8] font-semibold text-[1rem] leading-tight mb-1 group-hover:text-[#00e5ff] transition-colors">{cert.title}</h4>
                  <p className="text-[#a0aec0] text-sm font-medium mb-2">{cert.org}</p>
                  <p className="text-[#718096] text-xs font-mono">{cert.date}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
