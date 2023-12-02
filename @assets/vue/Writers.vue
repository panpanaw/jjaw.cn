<!-- 显示文章的全部作者的组件 -->
<script setup lang="ts">
import { useCommitPersons } from '../composables/ArticleInformations';


const commitPersons = useCommitPersons();

</script>
<template>
  <div class="writers-body">
    <div class="writers-title">作者</div>
    <div class="writers" v-if="commitPersons">
      <div class="writer" v-for="{ name, email, commits } of commitPersons">
        <div>{{ name }}</div>
        <div>
          <span>
            <img class="timg" src="../imgs/icon/历史.svg">
            {{ commits }}
          </span>
          <span>次提交</span>
        </div>
        <div>{{ email }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.timg {
  height: 1em;
  position: relative;
  top: 0.1em;
}

.writer > div{
  margin: 0 0.5rem;
}

.writer {
  display: flex;
  align-items: center;
}

.writers {
  padding: 0.5rem;
}

.writers-body {
  border: 0.1rem solid var(--border-color);
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
}

.writers-title {
  height: 1.6rem;
  padding: 0.5rem;
  font-weight: bold;
  background-color: var(--background-color1);
}
</style>