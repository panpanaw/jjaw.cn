<script setup lang="ts">

</script>
<template>
    <div class="footer">
        <div>
            <img src="../imgs/logo.svg" style="height: 2rem;" />
        </div>
        <div><RouterLink to="/">神奇小破站 jjaw.cn</RouterLink></div>
        <div><a href="/editor.html">文章编辑器</a></div>
        <div>图标真是随手画的</div>
    </div>
</template>
<style scoped>
.footer a:hover{
    text-decoration: underline;
}
.footer *{
    color: var(--color-opacity);
    text-decoration: none;
}
.footer > div{
    margin: 0.5rem 1rem;
}
.footer{
    margin-top: 3rem;
    min-height: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
}
</style>