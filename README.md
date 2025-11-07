# fCC 成都社区官网

[freeCodeCamp][1] 成都社区官方网站，展示社区活动、组织者风采与赞助商信息。

[![CI & CD][2]][3]

## 技术栈

- 逻辑语言：[TypeScript v5][4]
- 样式语言：[LESS v4][5]
- 运行环境：[Node.js v22][6]
- 包管理器：[PNPM v10][7]
- 工具库：[Web utility v4][8]
- 打包工具：[Parcel v2][9]
- PWA 框架：[Workbox v7][10]
- 组件引擎：[React v19][11]
- 组件套件：[React Bootstrap v2][12]
- 路由组件：[React Router v7][13]
- 时间轴组件：[React Chrono v3][14]
- 轮播组件：[Swiper v12][15]
- CI/CD：GitHub [Actions][3] + [Pages][16]

## 项目结构

```
fcc.chengdu/
├── public/              # 静态资源与 HTML 入口
│   ├── index.html      # 应用入口页面
│   ├── manifest.json   # PWA 配置清单
│   └── avatar/         # 公共头像资源
├── src/
│   ├── assets/         # 图片、图标等静态资源
│   ├── layouts/        # 布局组件
│   │   ├── Index.tsx   # 主布局
│   │   ├── Menu/       # 导航菜单
│   │   ├── Footer/     # 页脚
│   │   ├── Content/    # 内容容器
│   │   └── About/      # 关于我们弹窗
│   ├── pages/          # 页面组件
│   │   ├── Index/      # 首页
│   │   │   ├── Slogan/ # 宗旨理念
│   │   │   ├── Info/   # 社区介绍
│   │   │   ├── Events/ # 大事件轮播
│   │   │   └── Members/# 组织者风采
│   │   ├── Events/     # 历史活动页面
│   │   └── Sponsors/   # 赞助商页面
│   ├── theme.less      # 全局主题变量（颜色、尺寸）
│   ├── global.d.ts     # TypeScript 类型声明
│   └── index.tsx       # React 应用入口
├── tool/               # 工具脚本与数据
│   ├── event.txt       # 活动原始数据
│   └── index.json      # 处理后的活动数据
├── workbox-config.js   # Service Worker 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 项目依赖与脚本
```

## 样式系统

本项目已从 SCSS 迁移至 LESS：

- **主题变量**：`src/theme.less` 定义全局变量（`@contentWidth`、`@menuHeight`、颜色等）
- **CSS modules**：所有 `.module.less` 文件自动隔离作用域，避免样式冲突
- **Parcel 自动处理**：通过 `@parcel/transformer-less` 编译 LESS 为 CSS

**添加新样式时**：

1. 创建 `.less` 或 `.module.less` 文件
2. 在文件顶部 `@import '../../theme.less';` 引入全局变量
3. 在组件中 `import * as styles from './xxx.module.less';` 使用

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

# 清理构建缓存
pnpm clean

# 生产构建（含 Service Worker）
pnpm build
```

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
- 遵循 [Conventional Commits][17] 规范

## 版权所有

Copyright © 2018-2025 fCC 成都社区

[1]: https://www.freecodecamp.org/
[2]: https://github.com/FreeCodeCamp-Chengdu/fcc.chengdu/actions/workflows/main.yml/badge.svg
[3]: https://github.com/FreeCodeCamp-Chengdu/fcc.chengdu/actions/workflows/main.yml
[4]: https://www.typescriptlang.org/
[5]: https://lesscss.org/
[6]: https://nodejs.org/
[7]: https://pnpm.io/
[8]: https://github.com/EasyWebApp/web-utility
[9]: https://parceljs.org/
[10]: https://developers.google.com/web/tools/workbox
[11]: https://react.dev/
[12]: https://react-bootstrap.github.io/
[13]: https://reactrouter.com/
[14]: https://react-chrono.prabhumurthy.com/
[15]: https://swiperjs.com/
[16]: https://pages.github.com/
[17]: https://www.conventionalcommits.org/
