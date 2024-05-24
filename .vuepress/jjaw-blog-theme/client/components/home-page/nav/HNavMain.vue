<script setup lang="ts">
import AdsList from '../../layouts/box/AdsList.vue';
import TagsList from './TagsList.vue';


</script>
<template>
    <div class="hnav-main">
        <AdsList class="ads"></AdsList>
        <TagsList></TagsList>
    </div>
</template>
<style scoped>
.ads{
    margin-bottom: 1rem;
}
.hnav-main{
    height: 100%;
}
</style>