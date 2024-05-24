<script setup lang="ts">

</script>
<template>
    <div class="body">
        <nav v-if="$slots.nav" class="nav">
            <slot name="nav"></slot>
        </nav>
        <main v-if="$slots.default" class="main">
            <slot name="default"></slot>
        </main>
        <aside v-if="$slots.aside" class="aside">
            <slot name="aside"></slot>
        </aside>
    </div>
</template>

<style scoped>

@media (max-width: 1240px){
    .body:has(.nav) .aside{
        display: none;
    }
}
@media (max-width: 960px){
    .nav{
        display: none;
    }
    .aside{
        display: none;
    }
}

.main {
    flex: 1;
    min-width: 0;
    /* overflow: hidden; */
    max-width: 960px;
}

.body {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.nav {
    width: var(--main-nav-width);
    /* background-color: rgba(137, 43, 226, 0.051); */
    margin-right: 1rem;
}

.aside {
    width: var(--main-aside-width);
    /* background-color: rgba(0, 0, 255, 0.032); */
    margin-left: 1rem;
}
</style>