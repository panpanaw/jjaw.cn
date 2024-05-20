<!-- 目录 -->
<script setup lang="ts">
import StickyContentBox from '../box/StickyContentBox.vue';
import Contributors from './Contributors.vue'
</script>
<template>
    <div class="aside">
        <Contributors class="aside-befr" />
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