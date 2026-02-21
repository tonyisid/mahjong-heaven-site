# GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建GitHub仓库

1. 访问 https://github.com/new
2. 创建新仓库，命名为 `mahjong-heaven-site`
3. **不要**初始化README、.gitignore或license（我们已经有了）
4. 点击"Create repository"

### 2. 推送代码到GitHub

```bash
cd /root/.openclaw/workspace/mahjong-heaven-site

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/mahjong-heaven-site.git

# 推送代码
git push -u origin main
```

### 3. 启用GitHub Pages

1. 进入仓库的 **Settings**（设置）
2. 左侧菜单找到 **Pages**
3. 在"Build and deployment"下：
   - **Source**: 选择 `GitHub Actions`
   - （注意：不是Deploy from a branch）
4. 保存设置

### 4. 部署

推送代码后，GitHub Actions会自动开始部署：

1. 进入仓库的 **Actions** 标签
2. 你会看到"Deploy to GitHub Pages"工作流正在运行
3. 等待大约1-2分钟，工作流完成
4. 点击工作流详情，找到"Deploy to GitHub Pages"步骤
5. 会显示部署成功的URL，类似：
   ```
   https://YOUR_USERNAME.github.io/mahjong-heaven-site/
   ```

## 🎯 快速部署命令

```bash
# 1. 进入项目目录
cd /root/.openclaw/workspace/mahjong-heaven-site

# 2. 替换下面的YOUR_USERNAME为你的GitHub用户名
git remote add origin https://github.com/YOUR_USERNAME/mahjong-heaven-site.git

# 3. 推送代码（会触发自动部署）
git push -u origin main
```

## 📝 配置说明

### Vite配置
已在 `vite.config.ts` 中设置 `base: '/mahjong-heaven-site/'`，确保静态资源路径正确。

### GitHub Actions工作流
文件：`.github/workflows/deploy.yml`

**功能**：
- 每次推送到main分支自动部署
- 支持手动触发部署
- 使用Node.js 22构建
- 自动缓存依赖以加快构建速度

**权限**：
- `contents: read` - 读取仓库内容
- `pages: write` - 写入Pages
- `id-token: write` - ID令牌写入

## 🌐 访问网站

部署成功后，你的网站将在这个地址可访问：

```
https://YOUR_USERNAME.github.io/mahjong-heaven-site/
```

## 🔄 更新网站

每次你需要更新网站时：

```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "Update website"

# 3. 推送（自动触发部署）
git push
```

GitHub Actions会自动重新构建和部署，大约1-2分钟后更新生效。

## 🐛 故障排除

### 部署失败
1. 检查Actions标签下的工作流日志
2. 确保`package.json`中的`build`脚本正确
3. 确保`vite.config.ts`中的`base`路径与仓库名匹配

### 样式未加载
1. 检查浏览器控制台的错误信息
2. 确保`vite.config.ts`中的`base`路径正确
3. 清除浏览器缓存后重试

### 页面404
1. 确保在Settings > Pages中选择了"GitHub Actions"作为Source
2. 等待部署完成（最多2-3分钟）
3. 检查Actions标签确认部署成功

## 📊 监控部署

- **Actions标签**：查看部署状态和日志
- **Pages标签**：查看部署历史和环境URL
- **Commits标签**：查看所有提交记录

## 🎉 完成！

部署完成后，你可以：
- 分享网站链接给朋友
- 在社交媒体上宣传
- 将链接添加到Google Play商店描述中
- 用作游戏的官方网站
