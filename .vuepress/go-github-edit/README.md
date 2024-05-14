# 在github编辑文章插件

``` js
githubEditPlugin(
    "https://github.com/jianjianai/vue.js.jjaw.cn.articles",//仓库地址
    "master",//分支名称
    "/edit-on-github/"//编辑帮助页面
),
```

使用 ToEditOnGitHubHelp 组件。点击此组件自动跳转到，插件配置中配置的```编辑帮助页面```,并携带编辑信息
``` vue
<script setup>
import ToEditOnGitHubHelp from './go-github-edit/ToEditOnGitHubHelp.vue';
</script>
<template>
    <ToEditOnGitHubHelp> 编辑此页面 </ToEditOnGitHubHelp>
</template>
```

编辑帮助页面使用 EditOnGitHubHelpGo 组件,点击跳转到GitHub
``` vue
<script setup>
import EditOnGitHubHelpGo from './go-github-edit/EditOnGitHubHelpGo.vue';
</script>
<template>
    <EditOnGitHubHelpGo> 去编辑 </EditOnGitHubHelpGo>
</template>
```

编辑帮助页面使用 EditOnGitHubTitle 组件,显示文章标题
``` vue
<script setup>
import EditOnGitHubTitle from './go-github-edit/EditOnGitHubTitle.vue';
</script>
<template>
    <EditOnGitHubTitle> 去编辑 </EditOnGitHubTitle>
</template>
```

编辑帮助页面使用 useGithubEditUrl 或 useGithubEditTitle 获取链接和标题
``` vue
<script setup lang="ts">
import { useGithubEditTitle,useGithubEditUrl } from "./go-github-edit/githubedit";
const githubEditTitle = useGithubEditTitle();
const githubEditUrl = useGithubEditUrl();
</script>
```
