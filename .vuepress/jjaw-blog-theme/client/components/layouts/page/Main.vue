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
@media (max-width: 480px){
    div.layout{
        padding: 0;
    }
}
.app-main{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.layout {
    /* max-width: var(--mian-max-width); */
    width: min(100%,var(--layout-max-width));
    padding: 0 1rem;
}
/* nav 适配 */
.layout:has(.body){
    --layout-max-width:var(--main-max-width-no-nav);
}
.layout:has(.body .nav):has(.body .aside){
    --layout-max-width:var(--mian-max-width);
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