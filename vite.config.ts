// Plugins
import electron from "vite-plugin-electron";
// Utilities
import { defineConfig } from 'vite'
// import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base:  './',
    plugins: [
      electron([
        {
          // 主进程文件
          entry: "src/index.ts",
        },
        {
          // 2d预加载文件
          entry: "src/preload2d.ts",
          onstart(options) {
            //当预加载脚本构建完成时，通知渲染器进程重新加载页面，
            //而不是重新启动整个Electron应用程序。
            options.reload()
          },

        },
        {
          // 3d预加载文件
          entry: "src/preload3d.ts",
          onstart(options) {
            //当预加载脚本构建完成时，通知渲染器进程重新加载页面，
            //而不是重新启动整个Electron应用程序。
            options.reload()
          },

        }
      ])
    ],

    build: {
      // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
      emptyOutDir: false,
      outDir: "dist-electron",
      lib: {
        fileName: (format, entryName)=> `${entryName}.js`,
        entry: [resolve(__dirname, "./src/preload2d.ts"), resolve(__dirname, "./src/preload3d.ts")],
        formats: []
      },
    },
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
      ],
    },
    server: {
      port: 5454,
    },
  })
}
