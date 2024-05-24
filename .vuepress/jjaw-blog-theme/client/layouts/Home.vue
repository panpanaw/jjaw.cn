<script setup lang="ts">
import Main from '../components/layouts/page/Main.vue';
import Header from '../components/layouts/page/Header.vue'
import Body from '../components/layouts/page/ArticleBody.vue'
import Footer from '../components/layouts/page/Footer.vue';
import { useBlogCategory, useBlogType } from '@vuepress/plugin-blog/client'

const blogType = useBlogType("star");
const blogCategory = useBlogCategory("tags");



</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <Body>
                qwe
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>
<style scoped>

</style>