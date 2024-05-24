<script setup lang="ts">
import GiscusComment from '../../../../../giscus-comment/GiscusComment.vue'
import ContentBox from '../../layouts/box/ContentBox.vue';

</script>
<template>
    <ContentBox class="comment-box">
        <template #header>
            <span style="font-weight: bolder;">评论区</span>
        </template>
        <template #default>
            <GiscusComment class="comment-body"/>
        </template>
    </ContentBox>
</template>
<style scoped>
.comment-body{
    width: 100%;
    background-color: var(--theme-c-bg);
}
/* 修改box变量 */
.comment-box{
    --content-box-header-padding: 0 1.5rem;
    --content-box-mian-padding: 2.5rem 1.5rem 1rem 1.5rem;
}
@media (max-width: 480px){
    .comment-box{
        --content-box-header-padding: 0 1rem;
        --content-box-mian-padding: 2.5rem 1rem 1rem 1rem;
    }
}
</style>