import { siteConfig } from '../config/site';
import { useEffect, useRef } from 'react';

export default function Features() {
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
    <section ref={sectionRef} className="py-24 px-6 bg-dark-surface relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Game Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every detail carefully crafted for the best gaming experience
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, index) => (
            <div 
              key={index}
              className={`card fade-in relative overflow-hidden ${
                feature.highlight ? 'border-emerald-500/40 glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.highlight && (
                <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">200+</div>
            <div className="text-gray-400">Handcrafted Levels</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">4.8⭐</div>
            <div className="text-gray-400">Player Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">100K+</div>
            <div className="text-gray-400">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">∞</div>
            <div className="text-gray-400">Fun</div>
          </div>
        </div>
      </div>
    </section>
  );
}
