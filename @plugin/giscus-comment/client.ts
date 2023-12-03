import { defineClientConfig } from '@vuepress/client'
import {defineAsyncComponent} from 'vue';

export default defineClientConfig({
  enhance({app}){
    app.component("GiscusComment",defineAsyncComponent(()=>import('./GiscusComment.vue')));
  }
})


