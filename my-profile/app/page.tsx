import React from "react";

export default function Home() {
  const links = [
    { name: "GitHub", url: "https://github.com/KimHaeSeul", color: "bg-electric-blue", icon: "🚀", description: "My code galaxy" },
    { name: "Instagram", url: "#", color: "bg-bubblegum-pink", icon: "📸", description: "Life is a movie" },
    { name: "Blog", url: "#", color: "bg-lavender-dream", icon: "📝", description: "My thoughts & life" },
    { name: "Portfolio", url: "#", color: "bg-soft-mint", icon: "🎨", description: "Creative box" },
  ];

  return (
    <div className="relative min-h-screen py-16 px-6 overflow-hidden">
      {/* SVG Filter for Wavy/Squiggly Borders */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="wavy-edge">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>

      {/* Background Stickers */}
      <div className="sticker top-[60%] left-[20%] text-4xl opacity-30">☁️</div>

      <main className="max-w-4xl mx-auto relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative mb-8">
            <div className="w-[140px] h-[140px] relative blob-shape">
              {/* Glassy Wavy Background Layer */}
              <div 
                className="absolute inset-0 bg-bubblegum-pink/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] blob-shape border border-white/50"
                style={{ filter: "url(#wavy-edge)" }}
              />
              {/* Content Layer (Legible) */}
              <div className="absolute inset-2 blob-shape bg-gradient-to-br from-bubblegum-pink/80 to-lavender-dream/80 flex items-center justify-center text-white text-5xl font-semibold tracking-tight shadow-inner">
                HS
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold mb-4 tracking-tight text-slate-800">
            HS&apos;s World
          </h1>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="glass-pill">✨ Creative</div>
            <div className="glass-pill">🎀 Kitsch</div>
            <div className="glass-pill">🚀 Tech</div>
          </div>

          <p className="text-xl md:text-2xl font-medium text-slate-600 max-w-xl leading-relaxed mb-10">
            Welcome to my-link space! 🤗
          </p>

          <div className="flex gap-4">
            <button className="relative px-8 py-3 group">
              <div 
                className="absolute inset-0 bg-bubblegum-pink/70 backdrop-blur-md rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-white/30 transition-all group-hover:bg-bubblegum-pink/80 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                style={{ filter: "url(#wavy-edge)" }}
              />
              <span className="relative text-white text-lg font-medium">Contact Me</span>
            </button>
            <button className="relative px-8 py-3 group">
              <div 
                className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white/50 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all group-hover:bg-white/40 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                style={{ filter: "url(#wavy-edge)" }}
              />
              <span className="relative text-slate-800 text-lg font-medium">Explore More</span>
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group min-h-[220px]"
            >
              {/* Tinted Glassy Wavy Background Layer */}
              <div 
                className={`absolute inset-0 ${link.color}/40 backdrop-blur-xl shadow-lg rounded-[40px] border border-white/40`}
                style={{ filter: "url(#wavy-edge)" }}
              />
              
              {/* Content Layer (Legible) */}
              <div className="relative w-full h-full p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-3xl bg-white/40 backdrop-blur-sm flex items-center justify-center text-3xl shadow-inner">
                    {link.icon}
                  </div>
                  <div className="bg-slate-800/10 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-800">
                    Active
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-semibold text-slate-800 mb-1 uppercase">
                    {link.name}
                  </h3>
                  <p className="text-slate-800/70 font-medium text-sm">
                    {link.description}
                  </p>
                </div>

                <div className="absolute right-6 bottom-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-800 text-xl shadow-lg">
                     →
                   </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Special Sticker Banner */}
        <section className="relative py-12 mb-20">
          <div className="clay-card bg-lemon-pop p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-4xl opacity-20">🎨</div>
            <h2 className="text-3xl font-semibold text-slate-800 mb-2 uppercase tracking-tight">
              Stay Sweet & Stay Creative!
            </h2>
            <p className="font-medium text-slate-700">
              Dreaming of a colorful digital future ✨
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pb-12 flex flex-col items-center gap-4">
          <div className="flex gap-4 text-2xl">
            <span>🍭</span><span>🎀</span><span>🍦</span><span>🧸</span>
          </div>
          <p className="font-semibold text-xs uppercase tracking-[0.2em] text-slate-400">
            © 2026 HaeSeul • Made with Love & Magic
          </p>
        </footer>
      </main>
    </div>
  );
}
