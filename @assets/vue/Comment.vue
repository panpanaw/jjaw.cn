<!-- 评论区组件 -->
<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client';

const frontmatter = usePageFrontmatter();
</script>
<template>
    <div class="comment-body">
        <div class="title">评论区</div>
        <GiscusComment class="comment" v-if="frontmatter.comment"></GiscusComment>
        <div v-else style="text-align: center;margin: 1rem;">
            评论区已关闭
        </div>
    </div>
</template>
<style scoped>
.comment {
    display: inline-block;
    margin: auto;
    width: calc(100% - 2rem);
    padding: 1rem;
    padding-top: 2rem;
}

.comment-body {
    /* background-color: var(--background-color); */
    overflow: hidden;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.5rem;
}

.title {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--background-color1);
}
</style>