<!-- 导航栏 -->
<script setup lang="ts">
import ContentBox from '../box/ContentBox.vue';
import StickyContentBox from '../box/StickyContentBox.vue';


</script>
<template>
    <div class="nav">
        <ContentBox class="nax-box-agen">
            test
        </ContentBox>
        <StickyContentBox class="nav-box">
            <template #header>
                <span class="header-text">文章导航</span>
            </template>
            <template #default>
                test
            </template>
        </StickyContentBox>
    </div>
</template>
<style scoped>
.nax-box-agen{
    margin-bottom: 1rem;
}
.header-text{
    font-weight: bolder;
}
.nav{
    height: 100%;
}
</style>