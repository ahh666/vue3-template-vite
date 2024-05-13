
<p align="center">
    <img src="https://img.shields.io/badge/-Vue3-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite4.0-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm-F69220?logo=pnpm&logoColor=white" />
    <img src="https://img.shields.io/badge/-Axios-008fc7?logo=axios.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Prettier-ef9421?logo=Prettier&logoColor=white" alt="Prettier">
    <img src="https://img.shields.io/badge/-Less-1D365D?logo=less&logoColor=white" alt="Less">
    <img src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=Tailwind%20CSS&logoColor=white" alt="Taiwind">
    <img src="" alt="">
</p>

开箱即用，快速搭建大型应用的 Vue3 + Vite4.0 + Pinia + TypeScript+...模板框架。集成了各类插件，并进行了模块化和按需加载的优化，构建 PC 端快速开发脚手架。

# 快速开始

**node 版本要求**

推荐 16.18.0 及以上的版本。

**Vscode**

推荐使用成熟的 ide，尽量不用传统的类似于 sublime text 等去编程，不利于团队协作和代码格式化。

**包管理器**

尽量 pnpm，本项目仅保证在 pnpm 下正确运行，npm 涉及到网络环境等各种情况的限制不做过多考虑。

# 启动

推荐使用 pnpm

```shell
pnpm install
```

运行命令

```shell
pnpm dev
```

# 基础功能

- ✋ 网页加载进度条、构建进度条
- 🎸 setup 语法设置组件名支持
- 🐯 应用 mkcert 为 https 开发服务提供证书支持
- 🔧 原子化 CSS 支持
- ⭐ lint 规则
- 🎹 内置 UI 框架，ElementPlus、Ant Design Vue、ArcoDesign、TDesign...
- 😈 axios 封装
- 🎉 vite-plugin 模块化配置,根据环境变量按需打包
- 🧩 统一管理全局变量 `constant.ts`
- 🎎 store、page、component 自动生成，以模块化的方式 `npm run plop`
- 📱 mock 支持，并开启区分环境
- 🚃 mock 模拟的是真实登录流程，请访问`login`路由

# 更多

## vite插件集成

基于原生 ES 模块提供了丰富的内建功能，如速度快到惊人的模块热更新（HMR），使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。更多关于[vite](https://cn.vitejs.dev/guide/)

模版集成了如下的 vite 插件

- unplugin-auto-import（按需加载，自动引入）
- unplugin-vue-components（按需加载，自动引入组件）
- vite-plugin-compression（开启.gz 压缩）
- vite-plugin-imagemin（图片压缩）
- vite-plugin-mock（引入 mockjs，本地模拟接口）
- vite-plugin-pages（动态生成路由）
- vite-plugin-progress（构建显示进度条）
- vite-plugin-restart（监听配置文件修改自动重启 Vite）
- vite-plugin-svg-icons（加载 SVG 文件，自动引入）
- rollup-plugin-visualizer（打包分析）

## 多环境变量

`package.json` 里的 `scripts` 配置 `dev` `dev:test` `dev:prod` ，通过 `--mode xxx` 来执行不同环境

- 通过 `yarn dev` 启动本地环境参数 , 执行 `development`
- 通过 `yarn dev:test` 启动测试环境参数 , 执行 `test`
- 通过 `yarn dev:prod` 启动正式环境参数 , 执行 `prod`



```javascript
"scripts": {
    "dev": "vite",
    "dev:test": "vite --mode test",
    "dev:prod": "vite --mode production",
}
```


