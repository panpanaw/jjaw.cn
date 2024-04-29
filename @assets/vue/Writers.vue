<!-- 显示文章的全部作者的组件 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EditInGitHub from '../../@plugin/github-edit/EditInGitHub.vue';
import { useCommitPersons } from '../composables/ArticleInformations';
import { getGitHubUserInfoByEmail } from '../composables/GithubUserData';


const commitPersons = useCommitPersons();
const users = ref<{
  name: string;
  email: string;
  commits: number;

  img?: string,
  githubName?: string, //github用户名称
  githubPage?: string // github主页链接
  isONGithub?:boolean,//用户是否在github上存在
}[] | undefined>(commitPersons.value?.map(({ name, email, commits }) => ({ name, email, commits })));

onMounted(async () => {
  if (users.value) {
    for (const user of users.value) {
      const githubUser = await getGitHubUserInfoByEmail(user.email);
      if(githubUser){
        user.isONGithub = true;
        user.githubName = githubUser.githubName;
        user.githubPage = githubUser.githubPage;
        user.img = githubUser.img;
      }else{
        user.isONGithub = false;
      }
    }
  }
})

</script>
<template>
  <div class="writers-body">
    <div class="writers-top">
      <div class="writers-title">贡献者</div>
    </div>
    <div class="writers" v-if="users">
      <a class="writer" :class="{canCkick:isONGithub}" v-for="{ name, email, commits ,isONGithub ,img, githubName ,githubPage } of users" :href="githubPage">
        <div class="uimg">
          <img v-if="img" :src="img" alt="img">
          <span v-else>{{ (githubName || name || "O").charAt(0)  }}</span>
        </div>
        <div class="shwo">
          <div class="userinfo">
            <span class="uanme">{{ githubName || name }}</span>
            <span class="uemail">{{ email }}</span>
          </div>
          <div class="commitLine">
            <img class="timg" src="../imgs/icon/历史.svg"><span class="commit">{{ commits }}次提交</span>
          </div>
        </div>
      </a>
      <EditInGitHub class="becoming-contributor" title="编辑完善此文章，成为本章贡献者。">+ 成为贡献者</EditInGitHub>
    </div>
    <div v-else>
      git暂时不可用!
    </div>
  </div>
</template>
<style scoped>
.userinfo{
  overflow: hidden;
  text-overflow: ellipsis;
}
.uemail{
  margin-left: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.8;
}
.commitLine{
  font-size: 0.8rem;
  opacity: 0.6;
}
.writer > .shwo{
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 2rem - 0.5rem);
}
.uanme{
  text-overflow: ellipsis;
}

.writer.canCkick:hover{
  color: var(--color-time2);
  cursor: pointer;
}



.uimg{
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 1rem;
  margin-right: 0.5rem;
  background-color: var(--background-color1);
  border: 1px solid var(--border-color);
  position: relative;
}
.uimg > img{
  width: 100%;
  height: 100%;
}
.uimg > span{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.5rem;
}

.writer{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.8rem;
  color: var(--color);
  text-decoration: none;
}

.becoming-contributor {
  text-decoration: none;
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--color-time2);
}

.becoming-contributor:hover {
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


.writers {
  padding: 0.5rem;
}

.writers-body {
  border: 0.1rem solid var(--border-color);
  overflow: hidden;
  border-radius: 0.5rem;
}

.writers-top {
  height: 1.6rem;
  background-color: var(--background-color1);
  padding: 0.5rem;
}

.writers-title {
  font-weight: bold;
}
</style>