<!-- 文章的章节和目录 -->
<template>
  <div class="nav-body">
    <div class="nav-title">目录</div>
    <Toc class="nav-toc" />
  </div>
</template>
<style scoped>
.nav-toc {
  display: block;
  height: calc(100% - 2.6rem);
}

.nav-body {
  position: relative;
  border: 0.1rem solid var(--border-color);
  overflow-y: auto;
  border-radius: 0.5rem;
  scrollbar-width: thin;
  /* scrollbar-color: var(--color-time1) #ffffff00; */
}

.nav-title {
  position: sticky;
  top: 0;
  height: 1.6rem;
  padding: 0.5rem;
  font-weight: bold;
  background-color: var(--background-color1);
}
</style>

<style>
.vuepress-toc>.vuepress-toc-list>.vuepress-toc-item>.vuepress-toc-link {
  border-bottom: 0.1rem solid var(--border-color);
  font-weight: bolder;
  padding: 0 0 0.3rem 0;
}

.vuepress-toc {
  margin: 0 0.5rem;
  font-size: 1.1rem;
}

.vuepress-toc-item>.vuepress-toc-list {
  margin-left: 1rem;
  font-size: 0.9em;
}


.vuepress-toc-item {
  margin: 0.7rem 0;
}

.vuepress-toc-link {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--color);
  text-decoration: none;
}

.vuepress-toc-link.active{
  color: var(--color-time2);
}
.vuepress-toc-link.active:hover{
  color: var(--color-time2);
}

.vuepress-toc-link:hover {
  color: var(--color-time1);
}
</style>