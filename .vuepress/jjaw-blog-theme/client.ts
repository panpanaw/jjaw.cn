import './css/base.css'
import './css/vp-doc.css'
import './css/vp-var.css'
import './css/shiki.css'
import './css/plugins-var.css'
import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound
  },
})