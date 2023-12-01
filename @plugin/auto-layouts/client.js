import { defineClientConfig } from '@vuepress/client'
import { layouts } from '@temp/auto-layouts/layouts'


export default defineClientConfig({
  enhance({ app, router, siteData }) {

  },
  setup() {},
  rootComponents: [],
  layouts:layouts
})


