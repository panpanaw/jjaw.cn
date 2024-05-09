//文章分类集合
import { useBlogType,useBlogCategory } from "@vuepress/plugin-blog/client";
import { computed } from "vue"
import { GitContributor } from "@vuepress/plugin-git";

export interface MyTimes {
    path: string,
    info: {
        git?: {
            commitMaxPerson: GitContributor | undefined;
            updatedTime: number | undefined;
        } | undefined,
        title:string,
        description?:string
    }
}

export function useStars() {
    const blogref = useBlogType("stars");
    return computed(() => {
        if (!blogref || !blogref.value) {
            return undefined;
        }
        const items = blogref.value.items;
        if (!items) {
            return undefined;
        }
        return items as MyTimes[]
    });
}

export function useTags(){
    const categoryMap = useBlogCategory("tags");
    return computed(()=>{
        if(!categoryMap || !categoryMap.value){
            return undefined;
        }
        return categoryMap.value as {
            path:string,
            map:{
                [name:string]:{
                    path:string,
                    items:MyTimes[]
                }
            },
            currentItems?:MyTimes[]
        }
    });
}