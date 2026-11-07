# fCC 成都社区官网

[freeCodeCamp][1] 成都社区官方网站，展示社区活动、组织者风采与赞助商信息。

[![CI & CD][2]][3]

## 技术栈

- 逻辑语言：[TypeScript v6][4]
- 样式语言：[LESS v4][5]
- 运行环境：[Node.js v22][6]
- 包管理器：[PNPM v12][7]
- 工具库：[Web utility v4][8]
- 打包工具：[Parcel v2][9]
- PWA 框架：[Workbox v7][10]
- 组件引擎：[React v19][11]
- 组件套件：[Idea React v3][12]（基于 Bootstrap v6）
- 路由组件：[React Router v7][13]
- 时间轴组件：[React Chrono v3][14]
- 轮播组件：[Swiper v14][15]
- CI/CD：GitHub [Actions][16] + [Pages][17]

## 项目结构

```
fcc.chengdu/
├── .github/workflows/  # GitHub Actions 构建与部署
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── Caddyfile
├── AGENTS.md           # 仓库开发规则
├── public/             # HTML 入口、PWA 清单、图标与公共头像
│   ├── index.html
│   ├── manifest.json
│   └── avatar/
├── src/
│   ├── assets/         # 页面图片、头像、活动与赞助商素材
│   ├── layouts/        # 主布局、导航、页脚及关于我们
│   ├── pages/
│   │   ├── Index/      # 首页：宗旨、介绍、大事件、组织者
│   │   ├── Events/     # 历史活动时间线
│   │   └── Sponsors/   # 赞助商
│   ├── theme.less      # 全局主题变量
│   ├── global.d.ts     # LESS 模块类型
│   └── index.tsx       # React 应用入口与 Service Worker 注册
├── tool/               # 活动数据及处理脚本
├── .parcelrc           # Parcel TypeScript 转换配置
├── pnpm-workspace.yaml # PNPM 工作区配置
├── tsconfig.json       # TypeScript 与装饰器编译配置
├── workbox-config.js   # Service Worker 生成配置
├── package.json        # 依赖与命令
└── pnpm-lock.yaml      # 依赖锁定文件
```

## 样式系统

本项目使用 Bootstrap 6、Idea React 与 LESS：

- **Bootstrap 与组件**：Bootstrap 6 样式在 `public/index.html` 加载，组件使用 `idea-react`。
- **工具类优先**：布局、间距、对齐、颜色和响应式优先使用 Bootstrap 工具类；当前响应式类采用 `lg:flex-row` 等 Bootstrap 6 语法。
- **LESS**：仅在工具类无法表达具体样式时使用；样式模块采用 `.module.less`，由 Parcel 编译并隔离作用域。
- **主题变量**：`src/theme.less` 定义公共颜色和尺寸变量。
- **MobX 装饰器**：Parcel 使用 `@parcel/transformer-typescript-tsc`；`tsconfig.json` 配置 stage-3 装饰器兼容的编译目标。

**添加新样式时**：

1. 先使用 Bootstrap/Idea React 的组件和工具类。
2. 确需自定义样式时，创建 `.module.less` 并就近维护；响应式规则嵌套在组件默认规则中。
3. 需要主题变量时导入 `src/theme.less`，并在组件中导入对应 LESS 模块。

## 开发

### 环境要求

- Node.js 22+
- PNPM 10+

### 快速启动

```bash
# 安装 PNPM（如未安装）
npm i -g pnpm

# 安装依赖
pnpm i

# 启动开发服务器（自动清理缓存 + 热更新）
npm start
```

开发服务器将在 `http://localhost:1234` 启动，支持热模块替换（HMR）。

### 可用脚本

```bash
# 代码格式化与类型检查
npm t

# 仅构建 Parcel 生产资源
pnpm pack

# 生产构建并生成 Service Worker
pnpm build

# 清理 Parcel 缓存和构建产物
pnpm clean
```

`npm start` 默认在 `http://localhost:1234` 启动 Parcel 开发服务器。`npm test` 会运行 `lint-staged` 和 `tsc --noEmit`。

## 部署

项目通过 GitHub actions 自动部署到 GitHub pages：

1. 提交代码到 `master` 分支
2. actions 自动执行 `pnpm build`
3. 生成的 `dist/` 目录发布到 `gh-pages` 分支
4. 访问地址：https://fcc-cd.dev/fcc.chengdu/

### 手动部署

```bash
# 构建生产包
pnpm build

# 产物在 dist/ 目录，可直接部署到任意静态托管服务
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交变更：`git commit -m 'feat: add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

**注意事项**：

- 所有代码将自动通过 Prettier 格式化（配置见 `package.json`）
- 提交前会运行 `lint-staged` + TypeScript 类型检查
- 遵循 [Conventional Commits][18] 规范

## 版权所有

Copyright © 2018-2026 fCC 成都社区

[1]: https://www.freecodecamp.org/
[2]: https://github.com/FreeCodeCamp-Chengdu/fcc.chengdu/actions/workflows/main.yml/badge.svg
[3]: https://github.com/FreeCodeCamp-Chengdu/fcc.chengdu/actions/workflows/main.yml
[4]: https://www.typescriptlang.org/
[5]: https://lesscss.org/
[6]: https://nodejs.org/
[7]: https://pnpm.io/
[8]: https://github.com/EasyWebApp/web-utility
[9]: https://parceljs.org/
[10]: https://developer.chrome.com/docs/workbox
[11]: https://react.dev/
[12]: https://idea-react.pages.dev/
[13]: https://reactrouter.com/
[14]: https://react-chrono.prabhumurthy.com/
[15]: https://swiperjs.com/
[16]: https://github.com/features/actions
[17]: https://pages.github.com/
[18]: https://www.conventionalcommits.org/zh-hans/
