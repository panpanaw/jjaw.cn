<script setup lang="ts">
import ContentBox from './ContentBox.vue';
</script>
<template>
    <ContentBox class="sticky-content-box">
        <template #header>
            <slot name="header"></slot>
        </template>
        <template #default>
            <slot name="default"></slot>
        </template>
    </ContentBox>
</template>
<style scoped>
.sticky-content-box{
    position: sticky;
    top: calc(var(--header-height) + 1rem);
}
</style>