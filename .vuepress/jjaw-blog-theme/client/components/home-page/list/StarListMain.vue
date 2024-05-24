<script setup lang="ts">
import { useBlogType } from '@vuepress/plugin-blog/client';
import ItemList from './ItemList.vue'
const blogType = useBlogType("star");

</script>
<template>
    <div>
        <ItemList :items="blogType.items"></ItemList>
    </div>
</template>
<style scoped>
</style>