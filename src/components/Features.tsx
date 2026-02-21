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
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题 */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">游戏特色</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            精心打磨的每一个细节，只为给你最好的游戏体验
          </p>
        </div>

        {/* 特色卡片网格 */}
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
                  热门
                </div>
              )}
              
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">200+</div>
            <div className="text-gray-400">精心设计关卡</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">4.8⭐</div>
            <div className="text-gray-400">玩家评分</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">100K+</div>
            <div className="text-gray-400">下载量</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">∞</div>
            <div className="text-gray-400">游戏乐趣</div>
          </div>
        </div>
      </div>
    </section>
  );
}
