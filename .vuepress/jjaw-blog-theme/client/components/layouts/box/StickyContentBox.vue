<script setup lang="ts">
import ContentBox from './ContentBox.vue';
</script>
<template>
    <ContentBox class="sticky-content-box">
        <template #header v-if="$slots.header">
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
    top: calc(var(--header-blank-height) + 1rem);
    max-height: calc(100vh - var(--header-blank-height) - 1.5rem);
}
</style>