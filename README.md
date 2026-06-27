# 🐹 电耗子 · 物业账单管家

> 智能物业账单数据仪表盘 · 短信一键解析 · 游戏化节能体验

[![Deploy to GitHub Pages](https://github.com/your-username/property-bill-helper/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/property-bill-helper/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red.svg)]()

单文件、零依赖的物业账单管理工具。粘贴短信，自动解析水电费用，生成精美数据看板。

---

## ✨ 核心特性

### 📊 数据可视化
- **10+ 种图表** — 柱状图、折线图、饼图、散点图、双轴图
- **月度趋势** — 费用、用电量、用水量一目了然
- **同比对比** — 各年度同月数据横向对比
- **费用构成** — 电费/水费/管理费/公摊占比分析

### 🎮 游戏化系统
- **8 个段位** — 青铜 → 白银 → 黄金 → 铂金 → 钻石 → 省电王者
- **12 枚成就徽章** — 节能达人、淡季王者、夏日幸存者...
- **电耗子吉祥物** — 动态吐槽、鼓励、提醒
- **综合评分系统** — 多维度算法计算节能得分

### 🧠 智能分析
- **费用预测** — 基于近 6 个月线性回归预测下月费用
- **异常检测** — 自动标记环比增长 >30% 的月份
- **阶梯电价分析** — 广州居民阶梯电价实时计算
- **智能建议** — 8 个维度、50+ 种个性化省电建议
- **气温关联** — Open-Meteo 天气数据与用电量相关性分析

### 🔧 实用功能
- **短信解析** — 粘贴物业短信自动提取数据
- **CSV 导入导出** — 批量数据管理
- **月份对比** — 任意两月费用拆解对比
- **预算提醒** — 设置月度预算，实时超支预警
- **分享卡片** — 一键生成精美账单分享图
- **打印报表** — 优化的打印样式
- **GitHub Gist 同步** — 跨设备数据备份

---

## 🚀 快速开始

### 方式一：直接打开
1. 下载 `index.html`
2. 用浏览器打开即可使用

### 方式二：在线体验
部署到 GitHub Pages 后，访问 `https://your-username.github.io/property-bill-helper/`

### 方式三：本地服务
```bash
# 使用 Python
python3 -m http.server 8000

# 使用 Node.js
npx serve .
```

然后访问 `http://localhost:8000`

---

## 📱 短信格式示例

```
2026年6月，实用水量12吨，水费35元，实用电量280度，电费420元，公摊电费15元，管理费120元，总费用590元
```

支持的字段：
- 月份（年-月 格式）
- 用水量 / 水费
- 用电量 / 电费
- 公摊电费 / 公摊水费
- 管理费
- 上期/本期水电表读数
- 总费用

---

## 🎨 设计亮点

| 特性 | 说明 |
|---|---|
| **品牌配色** | 暖橙色主调 + 深碳灰底色，柔和不刺眼 |
| **字体系统** | Plus Jakarta Sans + 思源宋体，现代与优雅兼具 |
| **微动效** | 按钮悬浮、卡片入场、数字滚动，细节拉满 |
| **暗色主题** | 深度适配的深色 UI，夜间使用不伤眼 |
| **响应式** | 桌面 / 平板 / 手机全适配 |
| **无障碍** | 语义化标签、键盘导航、ARIA 属性 |

---

## 🏗️ 技术栈

| 技术 | 用途 |
|---|---|
| HTML5 / CSS3 / Vanilla JS | 单文件应用，零构建 |
| Chart.js 4.4 | 数据可视化（CDN） |
| Open-Meteo API | 历史天气数据（免费，无需 Key） |
| GitHub Gist API | 跨设备数据同步 |
| localStorage | 本地数据持久化 |
| GitHub Actions | 自动部署到 Pages |

---

## 📁 项目结构

```
property-bill-helper/
├── index.html              # 主应用（单文件）
├── README.md               # 项目说明
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 自动部署
└── push-to-github.sh       # 一键推送脚本（可选）
```

---

## 🔄 数据同步

通过 GitHub Gist 实现跨设备同步：

1. 前往 [GitHub Settings > Personal access tokens](https://github.com/settings/tokens)
2. 生成一个经典 Token，勾选 `gist` 权限
3. 点击页面底部的同步状态指示器
4. 粘贴 Token 并连接

数据存储在您的私人 Gist 中，全程无服务端代码。

---

## ⚡ 广州阶梯电价

| 季节 | 第一档 | 第二档 | 第三档 |
|---|---|---|---|
| 夏季（5-10月） | 0-260 度 · ¥0.6087 | 261-600 度 · ¥0.6587 | 601+ 度 · ¥0.9087 |
| 非夏季 | 0-200 度 · ¥0.6087 | 201-400 度 · ¥0.6587 | 401+ 度 · ¥0.9087 |

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: add some amazing feature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 提交规范
使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：
- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 样式调整
- `refactor:` 代码重构
- `perf:` 性能优化
- `chore:` 构建/工具链相关

---

## 📄 许可证

MIT License — 详见 [LICENSE](LICENSE) 文件

---

## 🙏 致谢

- 图表库：[Chart.js](https://www.chartjs.org/)
- 天气数据：[Open-Meteo](https://open-meteo.com/)
- 字体：[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) / [Noto Serif SC](https://fonts.google.com/noto/specimen/Noto+Serif+SC)

---

<div align="center">
  <sub>Made with ❤️ by 电耗子团队</sub>
</div>
