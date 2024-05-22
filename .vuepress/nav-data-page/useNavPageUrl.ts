import { computed } from "vue";
import { usePageData } from "vuepress/client";

export type NavPageItem = {
   title:string,
   link:string,
   items?:NavPageItem[]
}
export function useNavPageData(){
   const data = usePageData();
   return computed(()=>data.value["navPage"] as NavPageItem[])
}