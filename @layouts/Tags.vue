<!-- 类别布局 -->
<!-- 标签 列表 -->
<script setup lang="ts">
import { useStars, useTags } from '../@assets/composables/Blog';
import BlogList from '../@assets/vue/BlogList.vue';
import Header from '../@assets/vue/Header.vue';
import Footer from "../@assets/vue/Footer.vue";
const tags = useTags();
const stars = useStars();

</script>
<template>
    <Header :position="'sticky'" :is-auto-hide="true" :is-top-ppacity="true"></Header>
    <div class="tags" v-if="tags">
        <div class="tags-name">
            <RouterLink v-for="tiem,name of tags.map" :to="tiem.path" class="tag">
                <span class="name">{{ name }}</span>
                <span class="num">{{ tiem.items.length }}</span>
            </RouterLink>
        </div>
        <BlogList v-if="tags.currentItems" :list="tags.currentItems"></BlogList>
        <BlogList v-else-if="stars" :list="stars"></BlogList>
        <div v-else style="text-align: center;">
            没有任何文章
        </div>
    </div>
    <div class="tags" v-else>
        error
    </div>
    <Footer></Footer>
</template>

<style scoped>
.tag.router-link-active{
    background-color: var(--background-color2);
}
.tags-name{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.tag{
    display: block;
    min-width: 3rem;
    border: 1px solid var(--border-color);
    color: var(--color);
    text-decoration: none;
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 0.5rem;
}
.name{
    font-size: 1.2rem;
    font-weight: bolder;
}
.num{
    font-size: 0.8rem;
    margin-left: 1rem;
}

</style>