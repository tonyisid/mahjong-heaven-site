import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-dark-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-1">Mahjong Heaven</h3>
            <p className="text-gray-500 text-sm">Sort & Merge</p>
          </div>

          {/* 链接 */}
          <div className="flex gap-6">
            {siteConfig.footer.links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 版权 */}
          <p className="text-gray-500 text-sm">
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
