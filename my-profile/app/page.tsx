import React from "react";

export default function Home() {
  const links = [
    { name: "GitHub", url: "https://github.com/KimHaeSeul", color: "bg-pastel-blue", description: "Check out my code and projects" },
    { name: "Instagram", url: "#", color: "bg-pastel-pink", description: "Daily life and photography" },
    { name: "LinkedIn", url: "#", color: "bg-pastel-yellow", description: "Professional networking" },
    { name: "Blog", url: "#", color: "bg-pastel-mint", description: "Thoughts and tech tutorials" },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <main className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16 mt-8">
          {/* Profile Image Column */}
          <div className="flex-shrink-0">
            <div className="profile-image-circle">
              HS
            </div>
          </div>

          {/* Intro Column */}
          <div className="flex-grow text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              Hello, I&apos;m <span className="bg-pastel-pink px-2 border-[3px] border-black shadow-[4px_4px_0px_0px_#000]">HaeSeul</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-6 max-w-2xl leading-relaxed">
              Welcome to my-link space!
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="neo-brutalist-btn bg-white">Say Hello!</button>
              <button className="neo-brutalist-btn bg-pastel-mint">My Resume</button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`neo-brutalist-card ${link.color} p-8 flex flex-col justify-between group h-full`}
            >
              <div>
                <h3 className="text-3xl font-black mb-2 uppercase italic">{link.name}</h3>
                <p className="text-lg font-bold opacity-80 mb-6">{link.description}</p>
              </div>
              <div className="flex items-center gap-2 self-end">
                <span className="font-black text-sm uppercase">Visit Link</span>
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Stats / Info Section for "Landing Page" feel */}
        <section className="neo-brutalist-card bg-pastel-blue p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2 tracking-tighter">12+</div>
              <div className="text-lg font-bold uppercase">Projects Done</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 tracking-tighter">500+</div>
              <div className="text-lg font-bold uppercase">Coffee Cups</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 tracking-tighter">∞</div>
              <div className="text-lg font-bold uppercase">Possibilities</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8">
          <p className="font-black text-sm uppercase tracking-widest">
            © 2026 My Link • Designed with <span className="text-pastel-pink">♥</span> by HS
          </p>
        </footer>
      </main>
    </div>
  );
}
