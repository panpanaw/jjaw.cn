<script setup lang="ts">
import { useBlogCategory } from '@vuepress/plugin-blog/client';
import ItemList from './ItemList.vue'
const categoryMap = useBlogCategory('tags')


</script>
<template>
    <div>
        <ItemList :items="categoryMap.currentItems"></ItemList>
    </div>
</template>
<style scoped>
</style>