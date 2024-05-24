import './css/base.css'
import './css/theme-var.css'
import './css/plugins-var.css'
import './css/doc.css'
import './css/github-markdown.css'
import './css/jjaw-prismjs.css'
import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import Home from './layouts/Home.vue';

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
    Home
  },
})