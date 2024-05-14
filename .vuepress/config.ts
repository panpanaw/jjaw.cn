import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { jjawBlogTheme } from './jjaw-blog-theme/index.ts'

const hostName = 'jjaw.cn';
export default defineUserConfig({
  lang: 'en-US',
  title: 'VuePress',
  description: 'My first VuePress Site',
  theme: jjawBlogTheme({
    seo:{
      hostname: hostName
    },
    sitemap:{
      hostname: hostName,
      changefreq: "monthly"
    },
    giscus:{
      repo: "jianjianai/vue.js.jjaw.cn.articles",
      repoId: "R_kgDOKsd6yQ",
      category: "vue.js.jjaw.cn.articles",
      categoryId: "DIC_kwDOKsd6yc4CbRMH",
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "1",
      inputPosition: "bottom",
      theme: "preferred_color_scheme",
      lang: "zh-CN",
      loading: "eager"
    },
    githubEdit:{
      githubAdderss:"https://github.com/jianjianai/vue.js.jjaw.cn.articles",
      branche:"master",
      helpPath:"/edit-on-github/"
    }
  }),
  bundler: viteBundler(),
})
