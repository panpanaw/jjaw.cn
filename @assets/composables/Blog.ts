//文章分类集合
import { useBlogType } from "vuepress-plugin-blog2/client";
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
    const blogref = useBlogType("star");
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