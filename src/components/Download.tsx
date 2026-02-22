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

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* iOS App Store */}
            <a 
              href={siteConfig.download.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 flex items-center gap-3 bg-white text-black hover:bg-gray-100"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.85 20.74 12.24 20.72C10.63 20.7 10.12 21.95 8.82 21.95C7.52 21.95 6.56 20.76 5.74 19.5C3.99 16.84 2.76 12.16 4.95 9.39C5.78 8.31 6.96 7.63 8.21 7.61C9.46 7.59 10.27 8.45 11.06 8.45C11.85 8.45 12.73 7.61 13.99 7.61C15.25 7.61 16.16 8.45 16.95 9.39C19.14 12.16 17.85 16.84 18.71 19.5ZM13 3.5C13.62 2.76 14.56 2.25 15.46 2.25C15.56 3.28 15.16 4.35 14.54 5.12C13.92 5.89 12.99 6.35 12.05 6.35C11.95 5.32 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-xl font-bold leading-none">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a 
              href={siteConfig.download.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 flex items-center gap-3 bg-white text-black hover:bg-gray-100"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-xl font-bold leading-none">Google Play</div>
              </div>
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
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span>iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
