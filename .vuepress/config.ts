import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { jjawBlogTheme } from './jjaw-blog-theme/index.ts'

const hostName = 'jjaw.cn';
export default defineUserConfig({
  lang: 'zh-CN',
  title: '神奇小破站',
  description: '欢迎来到神奇小破站，专注于分享最新的Java Web、前端开发、网络技术、Vue、JavaScript、TypeScript、CSS、HTML5以及Minecraft等相关内容。',
  theme: jjawBlogTheme({
    seo:{
      hostname: hostName,
      isArticle: (page)=> (!page.frontmatter.layout) || (page.frontmatter.layout=='Layout'),
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
