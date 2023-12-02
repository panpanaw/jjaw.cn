import { defineClientConfig } from '@vuepress/client'
import "./@assets/css/plugin-nprogress.css"
import "./@assets/css/main.css"

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})