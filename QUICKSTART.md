# 快速开始

## 🚀 一键部署到 GitHub Pages

### 方法 1: 使用部署脚本（推荐）

```bash
cd /root/.openclaw/workspace/mahjong-heaven-site

# 替换 YOUR_GITHUB_USERNAME 为你的 GitHub 用户名
./deploy.sh YOUR_GITHUB_USERNAME
```

### 方法 2: 手动部署

```bash
cd /root/.openclaw/workspace/mahjong-heaven-site

# 添加远程仓库
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mahjong-heaven-site.git

# 推送代码
git push -u origin main
```

## 📋 GitHub 设置（重要！）

推送代码后，需要在 GitHub 上完成设置：

1. **访问你的仓库**
   ```
   https://github.com/YOUR_GITHUB_USERNAME/mahjong-heaven-site
   ```

2. **启用 GitHub Pages**
   - 点击 **Settings** (设置)
   - 左侧菜单找到 **Pages**
   - 在 "Build and deployment" 部分:
     - **Source**: 选择 `GitHub Actions` (不是 "Deploy from a branch")
     - 点击 **Save** 保存

3. **等待自动部署**
   - 进入 **Actions** 标签
   - 看到 "Deploy to GitHub Pages" 工作流运行
   - 等待 1-2 分钟完成

4. **访问你的网站**
   ```
   https://YOUR_GITHUB_USERNAME.github.io/mahjong-heaven-site/
   ```

## 🎯 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📝 更新网站

```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "你的更新说明"

# 3. 推送（自动触发部署）
git push
```

## 🆘 常见问题

### Q: 推送后没有自动部署？
A: 检查 GitHub 仓库的 Settings > Pages，确保 Source 选的是 "GitHub Actions"

### Q: 网站样式加载失败？
A: 确保 `vite.config.ts` 中的 `base` 路径与仓库名一致

### Q: 如何修改网站内容？
A: 编辑 `src/config/site.ts` 文件，所有内容都在那里配置

### Q: 如何更改颜色主题？
A: 编辑 `src/styles/index.css` 中的 CSS 变量

## 📚 更多信息

- 详细部署说明：查看 [DEPLOY.md](./DEPLOY.md)
- 项目结构：查看 [README.md](./README.md)
