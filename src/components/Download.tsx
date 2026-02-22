import { siteConfig } from '../config/site';
import { useEffect, useRef } from 'react';

export default function Download() {
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
    <section ref={sectionRef} className="py-24 px-6 crystal-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🎮</span>
            <span className="text-amber-400 font-medium">Free to Play</span>
          </div>

          {/* Title */}
          <h2 className="section-title text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white block mb-2">Ready to Start Your</span>
            <span className="gradient-text">Journey?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {siteConfig.download.description}
          </p>

          {/* Download button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={siteConfig.download.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-5 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Download on Google Play</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Free Download</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span>No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Play Offline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
