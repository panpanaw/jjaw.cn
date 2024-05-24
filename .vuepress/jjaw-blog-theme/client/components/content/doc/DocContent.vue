<script setup lang="ts">
import ContentBox from '../../design/box/ContentBox.vue';

</script>
<template>
    <ContentBox class="doc-box">
        <template #header>
            test
        </template>
        <template #default>
            <Content class="markdown-body" />
        </template>
    </ContentBox>
</template>
<style scoped>
.markdown-body{
    width: 100%;
    background-color: var(--theme-c-bg);
}
/* 修改box变量 */
.doc-box{
    --content-box-header-padding: 0 1.5rem;
    --content-box-mian-padding: 1rem 1.5rem;
}
@media (max-width: 480px){
    .doc-box{
        --content-box-header-padding: 0 1rem;
        --content-box-mian-padding: 1rem 1rem;
    }
}
</style>