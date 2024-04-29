<!-- 篇文章 -->
<script setup lang="ts">
import '../css/github-markdown.css'
import '../css/jjaw-prismjs.css'
import '../css/md-enhance-hint.css'
import '../css/md-enhance-codetabs.css'
import { dateFormat } from '../composables/Time';
import { useCommitMaxPerson, useCreatedTime, useUpdatedTime } from '../composables/ArticleInformations';
import EditInGitHub from '../../@plugin/github-edit/EditInGitHub.vue';

//-------------------------------------------------------------------------------
//文章信息
const tiemF = (tiem: number) => dateFormat(new Date(tiem), (Y, M, D, h, m) => `${Y}-${M}-${D} ${h}:${m}`);
const commitMaxPerson = useCommitMaxPerson();
const updatedTime = useUpdatedTime();
const createdTime = useCreatedTime();

</script>
<template>
  <div class="article">
    <!-- 文章信息 -->
    <div class="article-title">
      <!-- 最多提交者和发布日期 -->
      <div>
        <span class="article-author" v-if="commitMaxPerson">{{ commitMaxPerson.name }}</span>
        <span v-if="commitMaxPerson" class="article-email">{{ commitMaxPerson.email }}</span>
        <span v-if="updatedTime" class="article-updatedTime" :title="'更新时间:'+tiemF(updatedTime)+(createdTime?(' 创建时间:'+tiemF(createdTime)):'')">{{ tiemF(updatedTime) }}</span>
      </div>
      <!-- 最后更新时间 -->
      <div>
        <EditInGitHub class="edit-in-github" title="编辑此文章">
          <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-pencil" viewBox="0 0 16 16"
            width="16" height="16" fill="currentColor"
            style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible">
            <path
              d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z">
            </path>
          </svg>
        </EditInGitHub>
      </div>
    </div>
    <!-- 文章 -->
    <article>
      <Content class="markdown-body" />
    </article>
  </div>
</template>
<style scoped>
.edit-in-github{
  color: var(--color);
}
.edit-in-github:hover{
  color: var(--color-time2);
}
.article-email,
.article-updatedTime {
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.article {
  /* background-color: var(--background-color); */
  overflow: hidden;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.5rem;
}

.article-title {
  height: 3rem;
  background-color: var(--background-color1);
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.article-author {
  font-weight: bolder;
  padding-right: 0.5rem;
}
</style>

<style>
.markdown-body {
  margin: 1.5rem;
  width: calc(100% - 3rem);
  box-sizing: border-box;
}

/* .markdown-body a.header-anchor {
  display: inline-block;
  width: 0;
  position: relative;
  top: calc(0px - var(--nav-height) - 1rem);
  opacity: 0;
  z-index: -99;
  height: 1em;
} */
</style>