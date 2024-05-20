<script setup lang="ts">

</script>
<template>
    <div class="content-box">
        <div class="box-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="box-main">
            <div class="box-main-padding">
                <slot name="default"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
.box-main{
    background-color: var(--content-box-mian-bgc);
}
.box-main-padding{
    margin: var(--content-box-mian-padding);
}
.box-header{
    padding: var(--content-box-header-padding);
    height: var(--content-box-header-height);
    background-color: var(--content-box-header-bgc);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.content-box{
    border: var(--content-box-border);
    border-radius: var(--content-box-radius);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>