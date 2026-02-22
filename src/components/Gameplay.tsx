import { siteConfig } from '../config/site';
import { useEffect, useRef } from 'react';

export default function Gameplay() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How to </span>
            <span className="gradient-text">Play</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Simple rules, infinite strategic depth
          </p>
        </div>

        {/* Gameplay cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.gameplay.map((item, index) => (
            <div 
              key={index}
              className="card fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Game tips */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900/20 to-amber-900/20 rounded-3xl p-8 border border-emerald-500/20 fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Pro Tips</h3>
              <p className="text-gray-300">
                Observe the tile stacking order and prioritize clearing top tiles. Use power-ups wisely to overcome challenges!
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-black gradient-text">200+</div>
                <div className="text-gray-400 text-sm">Levels</div>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-text">⭐⭐⭐</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
