<script setup lang="ts">
import ContentBox from '../../design/box/ContentBox.vue';
import { usePageFrontmatter } from "vuepress/client"
const frontmatter = usePageFrontmatter();

</script>
<template>
    <ContentBox>
        <template #default>
            <h1 class="doc-h-h1">{{ frontmatter.title }}</h1>
            <p class="doc-h-p">{{ frontmatter.description }}</p>
        </template>
    </ContentBox>
</template>
<style scoped>
.doc-h-h1{
    font-weight: bolder;
    font-size: 2rem;
    margin: 2rem 0;
    line-height: 2.5rem;
}
.doc-h-p{
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

</style>