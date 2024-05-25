<script setup lang="ts">
import { useBlogCategory } from '@vuepress/plugin-blog/client';
import StickyContentBox from '../../layouts/box/StickyContentBox.vue'
import { hashString } from '../../../js/client/HashString';
import { RouteLink, useRoute } from 'vuepress/client';
const route = useRoute();
const colourClassFun = (s: string) => `colour-${Math.abs(hashString(s) % 5)}`;
const blogCategory = useBlogCategory("tags");
</script>
<template>
    <StickyContentBox class="tag-box">
        <template #header>
            <span style="font-weight: bolder;">标签</span>
        </template>
        <template #default>
            <div class="tag-list">
                <RouteLink class="tag-item" v-for="{ items, path }, key of blogCategory.map" :to="path"
                    :class="[colourClassFun(key), route.path == path ? 'active' : null]" :key="key">
                    <div class="tag-name">{{ key }}</div>
                    <div class="tag-num">{{ items.length }}</div>
                </RouteLink>
            </div>
        </template>
    </StickyContentBox>
</template>
<style scoped>
.tag-box {
    max-height: calc(100vh - var(--header-height) - 1.5rem);
    --content-box-mian-padding: 0;
}

.tag-num {
    font-weight: bolder;
    font-size: 0.8rem;
    margin-left: 0.3rem;
    background-color: var(--tags-list-tag-num-bgc);
    color: var(--tags-list-tag-num-c);
    width: 1.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
    text-align: center;
    border-radius: 1rem;
}

.tag-name {
    font-weight: bolder;
    color: var(--tags-list-tag-c);
}

.tag-item {
    background-color: var(--tags-list-tag-bgc);
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
    display: flex;
    align-items: center;
}
.tag-item.active{
    cursor: default;
}
.tag-item:hover .tag-name,
.tag-item.active .tag-name {
    color: var(--tags-list-tag-c-hover);
}

.tag-item:hover .tag-num,
.tag-item.active .tag-num {
    background-color: var(--tags-list-tag-num-bgc-hover);
}

.tag-item:hover,
.tag-item.active {
    background-color: var(--tags-list-tag-bgc-hover);
}

.tag-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0.5rem;
}
</style>