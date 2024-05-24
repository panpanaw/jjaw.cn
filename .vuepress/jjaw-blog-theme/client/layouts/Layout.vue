<script setup lang="ts">
import Main from '../components/layouts/page/Main.vue';
import Header from '../components/layouts/page/Header.vue'
import DocMain from '../components/content/doc/DocMain.vue';
import NavMain from '../components/content/nav/NavMain.vue';
import Aside from '../components/content/aside/AsideMain.vue';
import Body from '../components/layouts/page/ArticleBody.vue'
import Footer from '../components/layouts/page/Footer.vue';
import CommentsMain from '../components/content/comments/CommentsMain.vue'
import { useNavPageData } from '../../../nav-data-page/useNavPageUrl';
const navPageData = useNavPageData();
</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <!-- 文章 -->
            <Body>
                <template #default> <DocMain></DocMain> </template>
                <template v-if="navPageData" #nav> <NavMain></NavMain> </template>
                <template #aside> <Aside></Aside> </template>
            </Body>
            <!-- 评论区 -->
            <Body class="comment-body">
                <template #default> <CommentsMain></CommentsMain> </template>
                <template v-if="navPageData" #nav></template>
                <template #aside></template>
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>

<style scoped>
.comment-body{
    margin-top: 1rem;
}
</style>