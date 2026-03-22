import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = ({ icon, title, value, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] rounded-[16px] p-4 flex items-center gap-5 hover:border-[#00e5ff]/30 transition-all group shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
    <div className="w-12 h-12 rounded-[12px] bg-[#0a192f] border border-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff] group-hover:bg-[#00e5ff]/10 transition-colors">
      {icon}
    </div>
    <div>
      <h5 className="text-[#718096] text-[12px] font-semibold mb-1 font-sans">{title}</h5>
      <p className="text-[#f0f4f8] text-[14px] font-mono group-hover:text-[#00e5ff] transition-colors">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent border-t border-[#ffffff0d] font-sans">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Info & Contact Blocks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#00e5ff] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">CONTACT</h4>
            <h2 className="text-[3rem] font-bold text-[#f0f4f8] font-display mb-8 leading-tight">
              Let's <span className="text-[#00e5ff]">Connect</span>
            </h2>
            <p className="text-[#a0aec0] text-[1.05rem] leading-relaxed mb-12 max-w-md">
              Have a project in mind or just want to say hello? Feel free to reach out! I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="flex flex-col gap-4">
              <ContactCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                title="Email"
                value="mdabdbasit@gmail.com"
                href="mailto:mdabdbasit@gmail.com"
              />
              <ContactCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                title="Mobile"
                value="+91-XXXXXXXXXX"
                href="#"
              />
              <ContactCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>}
                title="LinkedIn"
                value="linkedin.com/in/md-abdul-basit18"
                href="https://www.linkedin.com/in/md-abdul-basit18"
              />
              <ContactCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                title="GitHub"
                value="github.com/Basit0012"
                href="https://github.com/Basit0012"
              />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-[#ffffff05] backdrop-blur-[12px] border border-[#ffffff0d] rounded-[24px] p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative"
          >
            {/* Background glowing blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.05] pointer-events-none"></div>

            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[#f0f4f8] text-[13px] font-semibold tracking-wide mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#0a101d] border border-[#ffffff10] rounded-[12px] px-5 py-4 text-[14px] text-white focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0a101d]/80 transition-all font-mono placeholder-[#475569]" 
                />
              </div>
              <div>
                <label className="block text-[#f0f4f8] text-[13px] font-semibold tracking-wide mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[#0a101d] border border-[#ffffff10] rounded-[12px] px-5 py-4 text-[14px] text-white focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0a101d]/80 transition-all font-mono placeholder-[#475569]" 
                />
              </div>
              <div>
                <label className="block text-[#f0f4f8] text-[13px] font-semibold tracking-wide mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Discussion" 
                  className="w-full bg-[#0a101d] border border-[#ffffff10] rounded-[12px] px-5 py-4 text-[14px] text-white focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0a101d]/80 transition-all font-mono placeholder-[#475569]" 
                />
              </div>
              <div>
                <label className="block text-[#f0f4f8] text-[13px] font-semibold tracking-wide mb-2">Description</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell me about your project or idea..." 
                  className="w-full bg-[#0a101d] border border-[#ffffff10] rounded-[12px] px-5 py-4 text-[14px] text-white focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0a101d]/80 transition-all font-mono placeholder-[#475569] resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full mt-2 bg-[#00E5FF] text-[#000] font-sans font-bold text-[1.1rem] tracking-wide rounded-[12px] py-4 flex items-center justify-center gap-3 hover:bg-[#5effff] hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
