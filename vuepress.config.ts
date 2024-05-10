import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'VuePress',
  description: 'My first VuePress Site',
  theme: {},
  bundler: viteBundler(),
})
