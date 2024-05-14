# 评论区插件

``` js
giscusCommentPlugin({
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
})
```

使用 GiscusComment 组件。
``` vue
<script setup>
import GiscusComment from '@vuepress/giscus-comment/GiscusComment.vue';
</script>
<template>
    <GiscusComment/>
</template>
```
