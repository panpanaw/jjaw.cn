<!-- 显示文章的全部作者的组件 -->
<script setup lang="ts">
import EditInGitHub from '../../@plugin/github-edit/EditInGitHub.vue';
import { useCommitPersons } from '../composables/ArticleInformations';


const commitPersons = useCommitPersons();

</script>
<template>
  <div class="writers-body">
    <div class="writers-top">
      <div class="writers-title">贡献者</div>
    </div>
    <div class="writers" v-if="commitPersons">
      <table class="writer">
        <tr v-for="{ name, email, commits } of commitPersons">
          <td :title="email">{{ name }}</td>
          <td>
            <span>
            <img class="timg" src="../imgs/icon/历史.svg">
            {{ commits }}
            </span>
            <span>次提交</span>
          </td>
          <!-- <td class="email">{{ email }}</td> -->
        </tr>
      </table>
      <EditInGitHub class="becoming-contributor" title="编辑完善此文章，成为本章贡献者。">+ 成为贡献者</EditInGitHub>
    </div>
    <div v-else>
      git暂时不可用!
    </div>
  </div>
</template>
<style scoped>
.becoming-contributor{
  text-decoration: none;
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--color-time2);
}
.becoming-contributor:hover{
  text-decoration: underline;
}
/* .email{
  font-size: 0.8rem;
} */
.timg {
  height: 1em;
  position: relative;
  top: 0.1em;
}

.writer > tr > td{
  padding-right: 1rem;
}

.writers {
  padding: 0.5rem;
}

.writers-body {
  border: 0.1rem solid var(--border-color);
  overflow: hidden;
  border-radius: 0.5rem;
}
.writers-top{
  height: 1.6rem;
  background-color: var(--background-color1);
  padding: 0.5rem;
}
.writers-title {
  font-weight: bold;
}
</style>