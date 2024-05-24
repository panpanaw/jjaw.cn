<script setup lang="ts">
import Main from '../components/design/page/Main.vue';
import Header from '../components/design/page/Header.vue'
import Body from '../components/design/page/ArticleBody.vue'
import Footer from '../components/design/page/Footer.vue';


</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <Body>
                <div class="notf">
                    <div>                    
                        <span style="font-size: 2rem;">404 页面不存在！</span>
                    </div>
                </div>
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>
<style scoped>
.notf{
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>