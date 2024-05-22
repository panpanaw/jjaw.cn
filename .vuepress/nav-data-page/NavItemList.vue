<script setup lang="ts">
import { useNavPageData } from './useNavPageUrl.ts'
import NavUL from './NavUL.vue'
const pageData = useNavPageData();
</script>
<template>
    <div>
        <NavUL v-if="pageData" :item="pageData"></NavUL>
        <div v-else>不存在</div>
    </div>
</template>