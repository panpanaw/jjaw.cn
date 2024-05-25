<script setup lang="ts">
import Main from '../components/layouts/page/Main.vue';
import Header from '../components/layouts/page/Header.vue'
import Body from '../components/layouts/page/ArticleBody.vue'
import Footer from '../components/layouts/page/Footer.vue';
import Aside from '../components/content/aside/AsideMain.vue';
import DocMain from '../components/content/doc/DocMain.vue';

</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <Body>
                <template #default> <DocMain></DocMain> </template>
                <template #aside> <Aside></Aside> </template>
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>
<style scoped>

</style>