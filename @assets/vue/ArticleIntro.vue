<!-- 文章信息 -->
<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client"
const frontmatter = usePageFrontmatter();

</script>
<template>
    <div class="heard" v-if="frontmatter.title || frontmatter.description">
        <div class="title" v-if="frontmatter.title">{{ frontmatter.title }}</div>
        <div class="description" v-if="frontmatter.description">{{ frontmatter.description }}</div>
    </div>
</template>
<style scoped>
.heard {
  text-align: center;
  padding: 0.5rem;
  overflow: hidden;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.5rem;
}
.title {
  font-size: 1.7rem;
  font-weight: bolder;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.description {
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

</style>
