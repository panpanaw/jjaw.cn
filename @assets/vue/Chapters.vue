<!-- 文章的章节和目录 -->
<template>
    <!-- 目录 -->
    <div class="nav-body">
        <div class="nav-title">目录</div>
        <Toc/>
    </div>
</template>
<style scoped>
.nav-body {
  border: 0.1rem solid var(--border-color);
  margin-top: 1rem;
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