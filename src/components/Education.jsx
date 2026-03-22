import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const eduData = [
    { title: "B.Tech - Computer Science", school: "Lovely Professional University", stat: "", date: "Aug 2023 - Present" },
    { title: "Intermediate (XII)", school: "Kendriya Vidyalaya", stat: "Score: 65.66%", date: "2021 - 2023" },
    { title: "Matriculation (X)", school: "Kendriya Vidyalaya", stat: "Score: 79.60%", date: "2020 - 2021" }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0a0f18] min-h-screen border-t border-slate-900 font-sans">
      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-left">
        
        <div className="mb-16 text-left">
          <h4 className="text-[#00E5FF] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">EDUCATION</h4>
          <h2 className="text-[2.5rem] font-bold text-white">
            Academic <span className="text-[#00E5FF]">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Left Aligned */}
          <div className="absolute left-[8px] md:left-[24px] top-6 bottom-6 w-[1px] bg-slate-800"></div>

          <div className="flex flex-col gap-10">
            {eduData.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-16 flex flex-col md:flex-row md:items-center justify-between group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-[16px] top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0f18] border-2 border-slate-600 group-hover:border-[#00E5FF] transition-colors z-20"></div>

                <div className="flex-1 flex flex-col items-start bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] rounded-2xl p-8 hover:bg-[#ffffff0a] hover:border-[#ffffff26] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)] w-full relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#00E5FF] transition-colors">{edu.title}</h3>
                    <p className="text-[#00E5FF] font-mono text-xs md:text-sm mt-2 md:mt-0">{edu.date}</p>
                  </div>
                  <p className="text-slate-400 font-medium mb-4">{edu.school}</p>
                  
                  {edu.stat && (
                    <div className="mt-auto">
                      <span className="bg-[#00E5FF]/10 text-[#00E5FF] px-3 py-1.5 rounded text-xs font-mono font-bold tracking-wider">{edu.stat}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
