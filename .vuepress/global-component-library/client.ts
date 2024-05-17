import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'
export default defineClientConfig({
  enhance({app,router,siteData}){
    app.component("Demo",defineAsyncComponent(()=>import('./library/Demo.vue')));
  }
});