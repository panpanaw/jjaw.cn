<!-- 文章的章节和目录 -->
<template>
    <!-- 目录 -->
    <div class="nav-body">
        <div class="nav-title">目录</div>
        <Toc class="nav-toc" />
    </div>
</template>
<style scoped>
.nav-toc{
  display: block;
  overflow-y: auto;
  height: calc(100% - 2.6rem);
}
.nav-body {
  height: 100%;
  border: 0.1rem solid var(--border-color);
  overflow: hidden;
  border-radius: 0.5rem;
}
.nav-title {
  height: 1.6rem;
  padding: 0.5rem;
  font-weight: bold;
  background-color: var(--background-color1);
}
</style>