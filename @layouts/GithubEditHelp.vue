<script setup lang="ts">
import Article from "../@assets/vue/Article.vue";
import Comment from "../@assets/vue/Comment.vue";
import { useSiteLocaleData } from '@vuepress/client';
import { useGithubEditUrl, useGithubEditTitle } from "../@plugin/github-edit/githubedit";
const siteData = useSiteLocaleData();
const githubEditUrl = useGithubEditUrl();
const githubEditTitle = useGithubEditTitle();

</script>
<template>
    <div class="page-main">
        <div class="page">
            <ClientOnly>
                <div class="main-div">
                    <div>
                        <RouterLink class="logo" to="/">
                            <img src="../@assets/imgs/logo.svg">
                            <h3>{{ siteData.title }}</h3>
                        </RouterLink>
                    </div>
                    <a class="article goEdit" :href="githubEditUrl" target="_blank">
                        <h3>前往Github编辑文章</h3>
                        <h3>{{ githubEditTitle }}</h3>
                        <div class="gotoedit">
                            <div>编辑此文章 >>></div>
                        </div>
                    </a>
                </div>
            </ClientOnly>
            <Article class="mtop"></Article>
            <Comment class="mtop"></Comment>
        </div>
    </div>
</template>
<style scoped>
.gotoedit {
    font-size: 1rem;
    margin: 1rem 0;
    text-align: center;
    display: flex;
    border: 0.1rem solid var(--border-color);
    padding: 1rem;
    border-radius: 2rem;
    align-items: center;
    cursor: pointer;
    font-weight: bolder;
    transition: all 1s;
    background-color: var(--background-color2);
}

.gotoedit:hover {
    transition: all 0.5s;
    box-shadow: 1px 2px 10px -3px var(--color-opacity);
}

.main-div {
    display: flex;
    min-height: 75vh;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
}

.goEdit {
    color: var(--color);
    text-decoration: none;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    /* background-color: var(--background-color); */
    overflow: hidden;
    /* border: 0.1rem solid var(--border-color); */
    /* border-radius: 0.5rem; */
}

.goEdit>h3 {
    margin: 0.5rem 0;
    text-align: center;
}


/* logo */
.logo {
    text-decoration: none;
    display: flex;
    color: var(--color-logo);
    justify-content: center;
}

.logo>img {
    height: 4rem;
    margin-right: 1rem;
}

.logo>h3 {
    font-size: 2.6rem;
    font-weight: bolder;
}

.mtop {
    margin-top: 1rem;
}

.page-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.page {
    width: 100%;
    max-width: 890px;
}
</style>