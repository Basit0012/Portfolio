import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    { title: "Languages", icon: "🌐", items: ["Python", "JavaScript", "C++", "Java"] },
    { title: "Web Technologies", icon: "⚛️", items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS"] },
    { title: "Databases", icon: "🗄️", items: ["MongoDB", "SQL"] },
    { title: "Tools & Methodologies", icon: "🛠️", items: ["Git", "GitHub", "Postman", "Blender", "Unity"] }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-left">
        <div className="mb-16">
          <h4 className="text-[#00E5FF] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">WHAT I KNOW</h4>
          <h2 className="text-[2.5rem] font-bold text-white font-display">
            Tech <span className="text-[#00E5FF]">Arsenal</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               key={idx}
               className="bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] rounded-[16px] p-8 hover:bg-[#ffffff0a] hover:border-[#ffffff26] hover:-translate-y-1 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-4 border-b border-slate-800/80 pb-6 mb-6">
                 <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/80 border border-[#00E5FF]/20 text-lg">
                   {cat.icon}
                 </div>
                 <h3 className="text-xl font-bold tracking-wide text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                 {cat.items.map((skill, i) => (
                    <span key={i} className="bg-[#00E5FF]/5 text-slate-300 text-sm font-medium px-4 py-2 rounded-full border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all cursor-default">
                      {skill}
                    </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
