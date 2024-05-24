<script setup lang="ts">
import Item from './Item.vue';


let props = defineProps<{
    items:{path:string,info:any}[]
}>();

</script>
<template>
    <div class="list">
        <Item class="item" v-for="item of props.items" :item="item" :key="item.path"></Item>
    </div>
</template>
<style scoped>
.item{
    margin-bottom: 1rem;
}
</style>