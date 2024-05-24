<!-- 目录 -->
<script setup lang="ts">
import Contributors from './Contributors.vue'
import AsideToc from "./AsideToc.vue"


</script>
<template>
    <div class="aside">
        <Contributors class="aside-befr" />
        <AsideToc />
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