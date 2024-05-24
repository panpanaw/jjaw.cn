<script setup lang="ts">
import Main from '../components/layouts/page/Main.vue';
import Header from '../components/layouts/page/Header.vue'
import Body from '../components/layouts/page/ArticleBody.vue'
import Footer from '../components/layouts/page/Footer.vue';
import TagListMain from '../components/home-page/list/TagListMain.vue';
import HNavMain from '../components/home-page/nav/HNavMain.vue';


</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <Body>
                <template #default>
                    <TagListMain></TagListMain>
                </template>
                <template #nav>
                    <HNavMain></HNavMain>
                </template>
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>
<style scoped>

</style>