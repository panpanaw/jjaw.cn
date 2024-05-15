<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(()=>{
    console.log("setUP");
})

</script>
<template>
    <header v-if="$slots.header">
        <slot name="header"></slot>
    </header>
    <aside v-if="$slots.aside">
        <slot name="aside"></slot>
    </aside>
    <main v-if="$slots.default">
        <slot name="default"></slot>
    </main>
    <nav v-if="$slots.nav">
        <slot name="nav"></slot>
    </nav>
    <footer v-if="$slots.footer">
        <slot name="footer"></slot>
    </footer>
</template>

<style scoped></style>