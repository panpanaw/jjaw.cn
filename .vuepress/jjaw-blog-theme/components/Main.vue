<script setup lang="ts">

</script>
<template>
    <div class="app-main">
        <div class="layout">
            <header v-if="$slots.header" class="header">
                <slot name="header"></slot>
            </header>
            <slot name="default"></slot>
            <footer v-if="$slots.footer" class="footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.app-main{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.layout {
    /* max-width: var(--mian-max-width); */
    width: min(100%,var(--mian-max-width));
    padding: 0 1rem;
}
.main{
    flex: 1;
    min-width: 0;
    /* overflow: hidden; */
}

.header {
    height: var(--header-height);
    position: sticky;
    top: 0px;
    background-color: var(--theme-c-bg);
    z-index: 99;
    margin-bottom: 1rem;
}
</style>