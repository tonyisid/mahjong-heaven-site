# Mahjong Heaven - 游戏宣传网站

> 🀄 精美的麻将消除游戏宣传网站 - 使用 React + TypeScript + Vite + Tailwind CSS 构建

![Mahjong Heaven](https://img.shields.io/badge/Mahjong-Heaven-emerald-600)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript&logoColor=white)

## ✨ 特性

- 🎨 **东方禅意美学** - 翡翠绿 + 金色配色方案
- 📱 **完全响应式** - 移动端优先设计
- ⚡ **极速加载** - Vite构建，性能优化
- 🎭 **流畅动画** - 滚动淡入、浮动效果、渐变文字
- 🎯 **组件化架构** - 易于维护和扩展
- 🚀 **自动部署** - GitHub Actions CI/CD

## 🏗️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 3
- **动画**: CSS Animations + Intersection Observer
- **部署**: GitHub Pages

## 📦 安装

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/mahjong-heaven-site.git
cd mahjong-heaven-site

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🚀 部署

### GitHub Pages (推荐)

1. Fork 或克隆此仓库
2. 在 GitHub 仓库设置中启用 Pages：
   - Settings → Pages
   - Source: 选择 `GitHub Actions`
3. 推送代码到 main 分支
4. 自动部署完成！

详细说明请查看 [DEPLOY.md](./DEPLOY.md)

### 其他平台

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

构建产物在 `dist/` 目录，可部署到任何静态托管平台。

## 📂 项目结构

```
mahjong-heaven-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── public/
│   └── mahjong-icon.svg       # 网站图标
├── src/
│   ├── components/            # React 组件
│   │   ├── Hero.tsx          # 主视觉区域
│   │   ├── Gameplay.tsx      # 游戏玩法
│   │   ├── Features.tsx      # 游戏特色
│   │   ├── WhyPlay.tsx       # 选择理由
│   │   ├── Download.tsx      # 下载区域
│   │   └── Footer.tsx        # 页脚
│   ├── config/
│   │   └── site.ts           # 网站配置（内容管理）
│   ├── lib/
│   │   └── utils.ts          # 工具函数
│   ├── styles/
│   │   └── index.css         # 全局样式
│   ├── App.tsx               # 主应用组件
│   └── main.tsx              # 应用入口
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 自定义内容

所有网站内容都在 `src/config/site.ts` 中配置：

```typescript
export const siteConfig = {
  name: "Mahjong Heaven",
  tagline: "Sort & Merge - 禅意消除",
  description: "...",
  hero: { ... },
  gameplay: [ ... ],
  features: [ ... ],
  whyPlay: [ ... ],
  download: { ... },
  footer: { ... }
};
```

修改此文件即可更新网站内容，无需触碰组件代码。

## 🎯 核心功能

### 响应式设计
- 移动端优先
- 断点：480px, 768px, 1200px
- 自动适配所有设备

### 性能优化
- 代码分割
- 图片懒加载
- CSS 优化
- 构建时压缩

### SEO 优化
- 语义化 HTML
- Meta 标签
- 结构化数据
- 可访问性 (a11y)

## 🌐 在线预览

部署后可通过以下地址访问：

```
https://YOUR_USERNAME.github.io/mahjong-heaven-site/
```

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系

如有问题或建议，请通过以下方式联系：

- GitHub Issues
- 游戏链接: [Google Play](https://play.google.com/store/apps/details?id=com.mahjong.sort.master.puzzle)

---

**使用 ❤️ 和 React 制作**
