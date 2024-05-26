<script setup lang="ts">
import StickyContentBox from '../../layouts/box/StickyContentBox.vue';
</script>
<template>
        <StickyContentBox>
            <template #header>
                <span style="font-weight: bolder;">页面导航</span>
            </template>
            <template #default>
                <Toc class="aside-toc"></Toc>
            </template>
        </StickyContentBox>
</template>
<style>
.aside-toc > ul{
    list-style: none;
}
.aside-toc > ul > li > a{
    font-weight: bolder;
    display: block;
    margin: 0.5rem 0;
    border-bottom: 1px solid var(--aside-toc-line-c);
}
.aside-toc > ul ul{
    margin-left: 1.5rem;
}
.aside-toc ul{
    margin: 0;
    padding: 0;
    /* background-color: rgba(0, 47, 255, 0.069); */
}
.aside-toc > ul > li > ul > li > a{
    display: block;
    margin-bottom: 0.3rem;
}
.aside-toc a:hover{
    color: var(--aside-toc-active-c);
}
.aside-toc .active{
    color: var(--aside-toc-active-c);
}
</style>