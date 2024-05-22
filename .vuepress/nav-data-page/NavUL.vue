<script setup lang="ts">
import type { NavPageItem } from './useNavPageUrl.ts'
import NavUL from './NavUL.vue'
import { RouteLink } from 'vuepress/client';

const props = defineProps<{
    item:NavPageItem[]
}>();

</script>
<template>
    <ul>
        <li v-for="item of props.item">
            <RouteLink :to="item.link">{{ item.title }}</RouteLink>
            <NavUL v-if="item.items" :item="item.items"></NavUL>
        </li>
    </ul>
</template>