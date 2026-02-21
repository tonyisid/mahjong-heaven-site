#!/bin/bash

# GitHub Pages 部署脚本
# 使用方法: ./deploy.sh YOUR_GITHUB_USERNAME

set -e

if [ -z "$1" ]; then
    echo "❌ 错误: 请提供你的 GitHub 用户名"
    echo "使用方法: ./deploy.sh YOUR_GITHUB_USERNAME"
    echo "示例: ./deploy.sh johndoe"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="mahjong-heaven-site"
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo "🚀 开始部署到 GitHub Pages..."
echo ""
echo "📦 仓库信息:"
echo "   用户名: $GITHUB_USERNAME"
echo "   仓库名: $REPO_NAME"
echo "   仓库URL: $REPO_URL"
echo ""

# 检查是否已初始化
if [ ! -d ".git" ]; then
    echo "❌ 错误: Git 仓库未初始化"
    exit 1
fi

# 添加远程仓库（如果不存在）
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "📡 添加远程仓库..."
    git remote add origin "$REPO_URL"
fi

# 推送到 GitHub
echo "📤 推送代码到 GitHub..."
git push -u origin main

echo ""
echo "✅ 代码已推送!"
echo ""
echo "📋 下一步操作:"
echo "   1. 访问: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "   2. 进入 Settings > Pages"
echo "   3. 在 'Build and deployment' 下:"
echo "      - Source 选择: GitHub Actions"
echo "   4. 保存设置"
echo "   5. 等待 Actions 自动部署完成 (1-2分钟)"
echo "   6. 访问: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "🎉 完成!"
