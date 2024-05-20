<script setup lang="ts">
import Main from '../components/Main.vue';
import Header from '../components/Header.vue'
import DocMain from '../components/doc/DocMain.vue';
import NavMain from '../components/nav/NavMain.vue';
import Aside from '../components/aside/AsideMain.vue';
import Body from '../components/Body.vue'
import Footer from '../components/Footer.vue';
</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <Body>
                <template #default>
                    <DocMain></DocMain>
                </template>
                <template #nav>
                    <NavMain></NavMain>
                </template>
                <template #aside>
                    <Aside></Aside>
                </template>
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>

<style scoped></style>