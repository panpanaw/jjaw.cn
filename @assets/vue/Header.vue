<!-- 用于显示页面头的组件 -->
<script setup lang="ts">
import { useSiteLocaleData } from '@vuepress/client';
import { type Ref, computed, onMounted, onUnmounted, ref, watch } from 'vue';
const siteData = useSiteLocaleData()
let props = defineProps<{
  isTopPpacity?: boolean,//在页面顶端时透明
  isAutoHide?: boolean,//导航栏随页面滚动自动隐藏
  position?:"sticky"|"fixed",//浮动选项
}>();

//浮动选项
const position:Ref<"fixed"|"sticky"> = computed(()=>props.position?props.position:"sticky");

const emit = defineEmits<{
  /**
   * 导航栏高度随着滚动改变时触发
   * @param height 当前高度
   */
  (e: "TopHeightChange", height: number): void,
}>();

//在顶部透明，其他地方不透明
const isTop = ref(true);
if (props.isTopPpacity) {
  const scroll = () => {
    if (window.scrollY > 1) {
      isTop.value = false;
    } else {
      isTop.value = true;
    }
  }
  onMounted(() => {
    window.addEventListener("scroll", scroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scroll);
  });
} else {
  isTop.value = false;
}


// 导航栏随页面滚动自动隐藏
const headerStickyTop = ref(0);
if (props.isAutoHide) {
  var lastScrollY = 0;
  var headerheight = 0;
  const scroll = () => {
    let top = headerStickyTop.value;
    top += lastScrollY - window.scrollY;
    if (top < -headerheight) {
      top = -headerheight;
    } else if (top > 0) {
      top = 0;
    }
    headerStickyTop.value = top;
    lastScrollY = window.scrollY;
  }
  onMounted(() => {
    headerheight = document.getElementById("page-header")!.clientHeight;
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", scroll);
    emit("TopHeightChange",headerheight+headerStickyTop.value);//刚开始触发一次
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scroll);
  });

  watch(headerStickyTop,()=>{
    emit("TopHeightChange",headerheight+headerStickyTop.value);//每次改变触发一下
  });
}else{
  onMounted(() => {
    //刚开始触发一次
    emit("TopHeightChange",document.getElementById("page-header")!.clientHeight);
  });
}



</script>

<template>
  <header id="page-header" :class="{ top: isTop }">
    <div class="show">
      <RouterLink class="left" to="/">
        <img src="../imgs/logo.png">
        <h3>{{ siteData.title }}</h3>
      </RouterLink>
      <div class="rigth">
        <ul class="nav-ul">
          <li><RouterLink to="/stars/" class="nav-link">精选</RouterLink></li>
          <li><RouterLink to="/tags/" class="nav-link">标签</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* 导航 */
.rigth ul {
  display: flex;
}

.rigth ul li {
  list-style: none;
}
.nav-link{
  text-decoration: none;
  color: var(--color);
  font-weight: bolder;
}

.rigth li {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.nav-ul>li:last-child {
  margin-right: 0rem;
}


/* logo */
.left {
  text-decoration: none;
  display: flex;
  color: var(--color-logo);
}

.left>img {
  height: 2rem;
  margin-right: 0.5rem;
}

.left>h3 {
  font-size: 1.3rem;
  font-weight: bolder;
}

header {
  width: 100%;
  z-index: 99;
  position: v-bind(position);
  top: v-bind("`${headerStickyTop}px`");
  height: var(--nav-height);
  /* box-shadow: var(--border-color) 0 0rem 0.3rem 0px; */
  border-bottom: 0.1rem solid var(--border-color);
  background-color: var(--background-color1);
  transition: background-color 0.5s, border 0.5s;
}

header.top {
  background-color: #82828200;
  /* box-shadow: var(--border-color) 0 0 0rem 0px; */
  border-bottom: 0.1rem solid #82828200;
}

header>.show {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;

  max-width: 1150px;
  margin: auto;
}
</style>