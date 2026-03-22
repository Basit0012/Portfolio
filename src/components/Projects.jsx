import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Secure IPC",
      date: "April 2025",
      subtitle: "Full-Stack Encrypted Data Handling System",
      desc: [
        "Built a socket-based communication system with React.js and Node.js featuring real-time encrypted data exchange.",
        "Implemented JWT authentication with bcrypt hashing, role-based access control, and enforced admin privileges.",
        "Designed secure multi-thread socket pipelines with dynamic availability calculation and lifecycle tracking.",
        "Developed a responsive dark-mode UI using Tailwind CSS and Vite, including an admin dashboard with analytics."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Vite", "Sockets"],
      github: "#",
      demo: "#"
    },
    {
      title: "Productivity Dashboard",
      date: "February 2025",
      subtitle: "Personal Goal tracking metrics app",
      desc: [
        "Developed a responsive dashboard integrating Weather APIs via Fetch and rendering dynamic data.",
        "Implemented a robust To-Do List and Pomodoro Timer, and practiced async javascript algorithms.",
        "Created real-time weather synchronization with robust error handling for down servers."
      ],
      tags: ["JavaScript", "HTML", "CSS", "REST API", "Tailwind CSS", "React.js"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="mb-16 text-left">
          <h4 className="text-[#00E5FF] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">PROJECTS</h4>
          <h2 className="text-[2.5rem] font-bold text-white font-display">
            Things I've <span className="text-[#00E5FF]">Built</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline continuous vertical trace line */}
          <div className="absolute left-[38px] md:left-[50%] -translate-x-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00E5FF] via-[#00E5FF]/40 to-transparent shadow-[0_0_10px_rgba(0,229,255,0.7)]"></div>

          <div className="flex flex-col gap-12">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch w-full">
                  {/* Standard Timeline Node */}
                  <div className="absolute left-[38px] md:left-[50%] -translate-x-[50%] top-8 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#0a0f18] border-2 border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.4)] flex items-center justify-center relative z-20">
                      <span className="text-[#00E5FF] text-[10px] font-mono tracking-tighter">{"</>"}</span>
                    </div>
                  </div>

                  {/* Left spacer for odd items */}
                  {!isEven && <div className="hidden md:block flex-1 pr-16" />}

                  {/* The exact anikket.me Project Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`flex-1 w-full pl-24 md:pl-0 pt-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}
                  >
                    <div className="bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] rounded-[16px] p-8 hover:bg-[#ffffff0a] hover:border-[#ffffff26] hover:-translate-y-1 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                      <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white tracking-wide">{project.title}</h3>
                        <span className="bg-slate-800/80 px-3 py-1 rounded-full text-slate-400 text-xs tracking-wider whitespace-nowrap">
                          {project.date}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-6 font-medium">{project.subtitle}</p>

                      <ul className="space-y-3 mb-8">
                        {project.desc.map((bullet, i) => (
                           <li key={i} className="flex gap-4 items-start text-[0.9rem] text-slate-300 leading-relaxed">
                              <span className="text-[#00E5FF] text-xs mt-1 shrink-0">●</span>
                              <span>{bullet}</span>
                           </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bg-[#00E5FF]/10 text-[#00E5FF] text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#00E5FF]/20 shadow-[0_0_8px_rgba(0,229,255,0.05)]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-5 border-t border-slate-800 pt-6">
                        <a href={project.github} className="text-slate-400 hover:text-[#00E5FF] transition-colors">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right spacer for even items */}
                  {isEven && <div className="hidden md:block flex-1 pl-16" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
