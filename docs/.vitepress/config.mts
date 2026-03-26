import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/DevLog/', // 部署在 https://zheng-yi-yi.github.io/DevLog/
  
  title: "FullStack Dev Log",
  description: "A comprehensive tech log for Modern Engineering, from Backend to Frontend.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zheng-yi-yi/DevLog' }
    ]
  }
})
