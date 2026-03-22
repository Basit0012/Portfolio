import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
      style={{ perspective: '1200px', height: '320px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* The card container that flips */}
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* === FRONT FACE === */}
        <div
          className="absolute inset-0 rounded-[16px] p-8 flex flex-col items-start gap-5 bg-[#ffffff05] backdrop-blur-[10px] border border-[#ffffff0d] shadow-[0_4px_16px_rgba(0,0,0,0.4)] overflow-hidden group"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Glow blob */}
          <div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20"
            style={{ background: item.accentDim }}
          ></div>

          {/* Icon */}
          <div
            className="w-14 h-14 rounded-[12px] flex items-center justify-center text-2xl border border-[#ffffff0d] relative z-10"
            style={{ background: item.accentDim }}
          >
            {item.emoji}
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-[#f0f4f8]">
              {item.title}
            </h3>
            <p className="text-[#a0aec0] text-sm leading-[1.8] mb-5">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-semibold font-mono px-3 py-1.5 rounded-full border"
                  style={{
                    color: item.accent,
                    borderColor: `${item.accent}40`,
                    background: `${item.accent}10`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hover hint */}
          <p className="text-[10px] font-mono text-[#ffffff30] uppercase tracking-[0.15em] relative z-10">Hover to reveal ↗</p>
        </div>

        {/* === BACK FACE === */}
        <div
          className="absolute inset-0 rounded-[16px] overflow-hidden border border-[#ffffff0d] shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {item.backImage ? (
            <>
              <img
                src={item.backImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span
                  className="text-[11px] font-mono font-semibold uppercase tracking-widest mb-1"
                  style={{ color: item.accent }}
                >
                  {item.tags.join(' · ')}
                </span>
                <h3 className="text-white text-xl font-bold font-display">{item.title}</h3>
              </div>
            </>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-5xl"
              style={{ background: `linear-gradient(135deg, #0a0f18, ${item.accent}22)` }}
            >
              {item.emoji}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Gaming = () => {
  const items = [
    {
      emoji: "🎮",
      title: "Unity Game Dev",
      desc: "Developed a horror game prototype focusing on environment design, rigorous interaction logic pipelines, and immersive atmospheric fog effects.",
      tags: ["UNITY", "C#"],
      accent: "#a855f7",
      accentDim: "rgba(168,85,247,0.08)",
      backImage: "/unity-game.png",
    },
    {
      emoji: "🧊",
      title: "3D Animation",
      desc: "Modeled advanced scene compositions, character layouts, and lighting/rendering environments via node systems using Blender and Cycles.",
      tags: ["BLENDER"],
      accent: "#f97316",
      accentDim: "rgba(249,115,22,0.08)",
      backImage: "/blender-work.png",
    }
  ];

  return (
    <section id="gaming" className="py-24 relative overflow-hidden bg-transparent border-t border-[#ffffff0d] font-sans">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        <div className="mb-16">
          <h4 className="text-[#00e5ff] tracking-[0.2em] text-[13px] uppercase font-semibold mb-3">BEYOND CODING</h4>
          <h2 className="text-[2.5rem] font-bold text-[#f0f4f8] font-display">
            Creative <span className="text-[#00e5ff]">Tech</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <FlipCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gaming;
