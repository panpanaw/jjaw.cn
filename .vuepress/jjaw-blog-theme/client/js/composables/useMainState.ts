// Main.vue 组件的状态，网页功能开关等

import { reactive } from "vue";

const state = reactive({
    isNavOpen:false, //导航栏开关
    isAsideOpen:false, // 右边导航开关
})
export function useMainState(){
    return state;
}