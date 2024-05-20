<!-- 目录 -->
<script setup lang="ts">
import ContentBox from '../box/ContentBox.vue';
import StickyContentBox from '../box/StickyContentBox.vue';
</script>
<template>
    <div class="aside">
        <ContentBox class="aside-befr">
            <template #header>
                test
            </template>
            <template #default>
                test
            </template>
        </ContentBox>
        <StickyContentBox>
            <template #header>
                test
            </template>
            <template #default>
                test
            </template>
        </StickyContentBox>
    </div>
</template>
<style scoped>
.aside{
    height: 100%;
}
.aside-befr{
    margin-bottom: 1rem;
}
</style>