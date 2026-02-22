# AI视频生成方案对比

## 即梦AI（Dreamina）

### 信息
- 官网：https://jimeng.jianying.com/
- 开发商：字节跳动（脸萌科技）
- 类型：文生视频、图生视频
- 状态：内测/公测阶段

### 使用方式
1. 访问官网：https://jimeng.jianying.com/ai-tool/home
2. 注册/登录（抖音账号）
3. 选择"文生视频"或"图生视频"
4. 输入提示词
5. 等待生成（通常1-3分钟）

### 提示词示例（中文）

**Mahjong游戏场景**：
```
提示词1：
精美的麻将消除游戏界面，翡翠绿和金色配色，禅意风格，三张相同的麻将牌发光消失，4K高清，流畅动画

提示词2：
麻将牌在屏幕上自动配对消除，冰块破碎特效，金色光芒闪烁，放松解谜游戏，特写镜头

提示词3：
Mahjong游戏通关画面，三星评级显示，庆祝动画，粒子效果，中国传统风格
```

### 优点
✅ 支持中文提示词
✅ 免费使用（目前）
✅ 质量较好
✅ 速度快

### 缺点
❌ 无公开API
❌ 需要手动操作
❌ 有使用限制
❌ 视频时长短（通常3-5秒）

---

## 其他AI视频生成API（有API）

### 1. Runway Gen-2

**官网**：https://runwayml.com/

**API文档**：https://dev.runwayml.com/

**特点**：
- 文生视频、图生视频
- 视频时长：4-18秒
- 分辨率：最高4K
- 价格：$0.20/秒

**示例代码**：
```python
import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "text_prompt": "Mahjong tiles matching and disappearing in zen-style game",
    "model": "gen2",
    "duration": 4
}

response = requests.post(
    "https://api.runwayml.com/v1/generate",
    headers=headers,
    json=data
)
```

### 2. Pika Labs

**官网**：https://pika.art/

**Discord Bot**：https://discord.gg/pika

**特点**：
- 免费试用
- 文生视频、图生视频
- 视频时长：3秒
- Discord操作或API（beta）

**使用**：
```
1. 加入Pika Discord服务器
2. 在频道输入 /animate
3. 上传图片或输入提示词
4. 等待生成
```

### 3. Stability AI (Stable Video)

**官网**：https://stability.ai/

**API文档**：https://platform.stability.ai/docs/api-reference

**特点**：
- 图生视频为主
- 文生视频（实验性）
- 价格：$0.05/秒

**示例代码**：
```python
import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "image": "base64_encoded_image",
    "seed": 0,
    "motion_bucket_id": 127
}

response = requests.post(
    "https://api.stability.ai/v2beta/image-to-video",
    headers=headers,
    json=data
)
```

### 4. HeyGen (Avatar视频)

**官网**：https://www.heygen.com/

**特点**：
- AI数字人讲解
- 文字生成视频
- 多语言支持
- 价格：$29-99/月

**适用场景**：
- 游戏介绍视频
- 教程视频
- 营销视频

---

## 推荐方案

### 方案A：使用即梦AI（免费，手动）

**步骤**：
1. 访问 https://jimeng.jianying.com/ai-tool/home
2. 抖音登录
3. 输入中文提示词
4. 下载生成的3-5秒视频
5. 用剪辑软件拼接成完整视频

**提示词模板**：
```
精美麻将消除游戏，翡翠绿配色，禅意风格，麻将牌发光消除，4K
麻将游戏界面，三张相同牌匹配消失，金色特效，流畅动画
Mahjong游戏通关画面，三星评级，粒子特效，中国风
```

### 方案B：使用Runway API（付费，自动化）

**成本**：约$5-10/分钟视频

**优点**：
- API自动化
- 质量高
- 时长灵活

**缺点**：
- 需要编程
- 需要付费

### 方案C：混合方案（推荐）

**步骤**：
1. 用即梦AI生成3-5个片段（免费）
2. 用CapCut/DaVinci剪辑
3. 添加真实游戏录屏
4. 添加音乐和音效
5. 导出完整视频

**成本**：免费
**时间**：2-3小时
**质量**：⭐⭐⭐⭐

---

## 即梦AI详细使用指南

### 文生视频

**1. 进入创作页面**
```
https://jimeng.jianying.com/ai-tool/text-generate/video
```

**2. 输入提示词**

**简单版本**：
```
麻将牌游戏，消除动画，禅意风格
```

**详细版本**：
```
精美的麻将消除游戏界面，翡翠绿和金色配色方案，三张相同的麻将牌
发光并消失，流畅的消除动画，粒子特效，中国禅意风格，4K超高清，
电影级画质，柔和对焦，特写镜头
```

**3. 选择参数**
- 视频比例：16:9（横屏）或9:16（竖屏）
- 运动幅度：1-10
- 视频时长：3-5秒

**4. 生成和下载**
- 点击"立即生成"
- 等待1-3分钟
- 预览结果
- 下载视频

### 图生视频

**1. 准备图片**
- 游戏截图
- 游戏Logo
- 宣传图

**2. 上传图片**
```
https://jimeng.jianying.com/ai-tool/image-generate/video
```

**3. 输入运动描述**
```
麻将牌向中心移动并发光消失
```

**4. 生成视频**

---

## 实战示例：30秒视频

### 使用即梦AI生成片段

**片段1（0-5秒）**：
```
提示词：Mahjong Heaven游戏Logo，金色光芒，浮空效果，禅意背景
```

**片段2（5-15秒）**：
```
提示词：麻将牌在屏幕上移动匹配，三张相同牌发光消失，绿色粒子特效
```

**片段3（15-25秒）**：
```
提示词：麻将游戏关卡完成画面，三星评级显示，金色庆祝动画
```

**片段4（25-30秒）**：
```
提示词：App Store和Google Play下载按钮，渐变背景
```

### 后期制作（CapCut）

1. 导入4个片段
2. 添加转场效果
3. 添加文字："Mahjong Heaven"
4. 添加背景音乐（禅意音乐）
5. 添加真实游戏录屏（对比）
6. 导出视频

---

## 成本对比

| 方案 | 时间 | 成本 | 难度 | 质量 |
|------|------|------|------|------|
| 即梦AI + 剪辑 | 3-4小时 | 免费 | ⭐⭐ | ⭐⭐⭐⭐ |
| Runway API | 1-2小时 | $10-20 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 真实录屏 | 2-3小时 | 免费 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 外包 | 2-5天 | $100-300 | ⭐ | ⭐⭐⭐⭐⭐ |

---

## 总结建议

**最佳方案**：
1. 用即梦AI生成3-5个宣传片段（免费）
2. 录制真实游戏画面（补充）
3. 用CapCut/DaVinci剪辑
4. 总成本：$0
5. 总时间：3-4小时

**快速方案**：
1. 即梦AI生成1-2个片段
2. 直接用作社交媒体短视频
3. 总时间：1小时

**专业方案**：
1. 使用Runway API
2. 或找外包制作
3. 总成本：$10-300

---

## 即梦AI访问

**官网**：https://jimeng.jianying.com/
**直接创作**：https://jimeng.jianying.com/ai-tool/home
**教程**：https://jimeng.jianying.com/help

---

需要帮助使用即梦AI或API集成吗？
