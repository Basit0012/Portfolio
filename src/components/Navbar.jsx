import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0fd9] backdrop-blur-[20px] border-b border-[#ffffff0d]">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Anikket Exact Logo Polygon element style */}
        <div className="cursor-pointer group flex items-center gap-2">
           <svg className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="rgba(0, 229, 255, 0.05)" stroke="#00E5FF" strokeWidth="3"/>
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#00E5FF" className="font-sans font-bold text-4xl">A</text>
           </svg>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center font-sans font-medium text-[14px]">
          <a href="#about" className="text-slate-300 hover:text-[#00E5FF] transition-colors relative group">
             About
             <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-slate-300 hover:text-[#00E5FF] transition-colors relative group">
             Projects
             <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#certifications" className="text-slate-300 hover:text-[#00E5FF] transition-colors relative group">
             Certifications
             <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#achievements" className="text-slate-300 hover:text-[#00E5FF] transition-colors relative group">
             Achievements
             <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#education" className="text-slate-300 hover:text-[#00E5FF] transition-colors relative group">
             Education
             <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-slate-300 hover:text-[#00E5FF] transition-colors relative group">
             Contact
             <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
