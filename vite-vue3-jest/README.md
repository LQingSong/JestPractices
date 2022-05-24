# Vue 3 + TypeScript + Vite

## Setup

1. pnpm create vite projectName
2. 查看 vite.config.ts 发现有报红
   - 安装 pnpm install @types/node --save-dev
3. 配置 alias (可选)

   ```ts tsconfig.json
   "compilerOptions" {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
   }
   ```

   ```ts vite.config.ts
   import { defineConfig } from "vite";
   import vue from "@vitejs/plugin-vue";
   // node.js 不是内置对象的一部分，如果想用ts写node.js,需要引入@types/node
   const path = require("path");

   export default defineConfig({
     plugins: [vue()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "src"),
       },
     },
   });
   ```

4.安装 jest 和声明文件

- 解决 Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.ts(2582)
- pnpm install -D jest @types/jest
- 配置 tsconfig.json

  ```ts tsconfig.json
  includes: ["__test__/**.ts"];
  ```

5. 解决某些库不支持 isolatedModules：true

- 'index.spec.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
- 设置成 false
