import { siteConfig } from '../config/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center crystal-bg overflow-hidden">
      {/* Background grid */}
      <div className="grid-overlay"></div>
      
      {/* Floating mahjong tiles decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="mahjong-tile absolute top-20 left-10 w-20 h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg opacity-20 blur-sm"></div>
        <div className="mahjong-tile absolute top-40 right-20 w-16 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg opacity-20 blur-sm"></div>
        <div className="mahjong-tile absolute bottom-40 left-1/4 w-24 h-28 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg opacity-20 blur-sm"></div>
        <div className="mahjong-tile absolute bottom-20 right-1/3 w-20 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg opacity-20 blur-sm"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
          <span className="text-2xl">✨</span>
          <span className="text-emerald-400 font-medium">{siteConfig.hero.badge}</span>
        </div>

        {/* Main title */}
        <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-black mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-white mb-2">{siteConfig.hero.title}</span>
          <span className="gradient-text">{siteConfig.hero.titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {siteConfig.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {siteConfig.hero.description}
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href={siteConfig.hero.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-5"
          >
            {siteConfig.hero.cta.text}
          </a>
        </div>

        {/* Feature list */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          {siteConfig.hero.features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-gray-800/50 rounded-full px-5 py-2.5 border border-gray-700"
            >
              <span className="text-sm font-medium text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-500/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
