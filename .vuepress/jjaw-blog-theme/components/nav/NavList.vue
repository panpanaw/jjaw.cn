<!-- 导航栏 -->
<script setup lang="ts">
import StickyContentBox from '../box/StickyContentBox.vue';


</script>
<template>
    <StickyContentBox>
        <template #header>
            <span class="header-text">文章导航</span>
        </template>
        <template #default>
            test
        </template>
    </StickyContentBox>
</template>
<style scoped>
.header-text {
    font-weight: bolder;
}
</style>