<script setup lang="ts">
const props = defineProps<{
    title?:String,
    color?:"green"|"red"|"yellow"|"orange",
}>();

</script>
<template>
    <div class="tips" :class="(props.color || 'green')">
        <p v-if="props.title" class="title">{{ props.title }}</p>
        <div class="tips-body">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.tips.orange{
    --tips-color: orange;
    --tips-background-color: rgba(206, 113, 0, 0.142);
}
.tips.yellow{
    --tips-color: rgb(167, 167, 62);
    --tips-background-color: rgba(255, 217, 0, 0.269);
}
.tips.red{
    --tips-color: red;
    --tips-background-color: rgba(128, 2, 0, 0.183);
}
.tips.green{
    --tips-color: green;
    --tips-background-color: rgba(0, 128, 0, 0.167);
}
.title{
    font-weight: bolder;
    color: var(--tips-color);
}
.tips{
    background-color: var(--tips-background-color);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.2rem;
}
</style>