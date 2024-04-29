<script setup lang="ts">
import Header from "../@assets/vue/Header.vue";
import Article from "../@assets/vue/Article.vue";
import Chapters from "../@assets/vue/Chapters.vue";
import ArticleIntro from "../@assets/vue/ArticleIntro.vue";
import Writers from "../@assets/vue/Writers.vue";
import {ref,type Ref} from 'vue'
import Comment from "../@assets/vue/Comment.vue";
import Footer from "../@assets/vue/Footer.vue";

const topHeight:Ref<number|undefined> = ref(0);

</script>
<template>
    <Header :is-auto-hide="true" :is-top-ppacity="true" :position="'sticky'" @top-height-change="(e)=>{topHeight=e}"></Header>
    <div class="page-main">
        <div class="page">
            <ArticleIntro class="mtop"></ArticleIntro>
            <Article  class="mtop"></Article>
            <Comment class="mtop"></Comment>
        </div>
        <div class="rigth">
            <ClientOnly>
                <Writers  class="mtop"></Writers>
                <Chapters class="chapters mtop"></Chapters>
            </ClientOnly>
        </div>
    </div>
    <Footer></Footer>
</template>
<style scoped>
.mtop{
    margin-top: 1rem;
}
.chapters{
    position: sticky;
    top: calc(v-bind("`${topHeight}px`") + 1rem);
    max-height: calc(100vh - 2rem - v-bind("`${topHeight}px`"));
}
.page-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.rigth {
    width: 300px;
    margin-left: 1rem;
    margin-right: 1rem;
}

.page {
    /* 100% - 右边的宽度 - 自己的margin */
    width: calc(100% - 300px - 3rem);
    max-width: 890px;
    margin-left: 1rem;
}
@media (max-width: 1050px) {
    .rigth {
        width: 25%;
    }
    .page {
        width: 75%;
    }
}
@media (max-width: 900px) {
    .rigth {
        display: none;
    }
    .page {
        width: 100%;
        margin: 0;
    }
}
</style>