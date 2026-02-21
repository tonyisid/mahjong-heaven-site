import { siteConfig } from '../config/site';
import { useEffect, useRef } from 'react';

export default function WhyPlay() {
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
    <section ref={sectionRef} className="py-24 px-6 bg-dark-bg relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="grid-overlay opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题 */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">为什么选择</span>
            <span className="gradient-text"> Mahjong Heaven?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            这不仅仅是一个游戏，更是一种生活方式
          </p>
        </div>

        {/* 原因卡片 */}
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.whyPlay.map((reason, index) => (
            <div 
              key={index}
              className="card fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {reason.title.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 引用 */}
        <div className="mt-16 text-center fade-in">
          <div className="inline-block bg-gradient-to-r from-emerald-900/30 to-amber-900/30 rounded-3xl p-8 border border-emerald-500/20">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              "每天晚上玩一局，已经成为我的放松仪式了。"
            </p>
            <p className="text-gray-400">— 来自忠实玩家的评价</p>
          </div>
        </div>
      </div>
    </section>
  );
}
