// 处理文章信息的函数集合
import type { GitData } from "@vuepress/plugin-git"
import { usePageData } from "@vuepress/client"
import { type Ref, computed } from "vue"

/**
 * 获取git提交最多的人
 */
export function useCommitMaxPerson(){
    const pageData = usePageData() as Ref<{ git?: GitData}>;
    return computed(() => {
        const git = pageData.value.git;
        if (git && git.contributors && git.contributors.length > 0) {
            return git.contributors.sort((a, b) => b.commits - a.commits)[0];
        } else {
            return undefined;
        }
    });
}

/**
 * 文章的创建时间
 */
export function useCreatedTime(){
    const pageData = usePageData() as Ref<{ git?: GitData}>;
    return computed(()=>{
        const git = pageData.value.git
        if(!git){
            return undefined;
        }
        return git.createdTime;
    });
}

/**
 * 文章的更新时间
 */
export function useUpdatedTime(){
    const pageData = usePageData() as Ref<{ git?: GitData}>;
    return computed(()=>{
        const git = pageData.value.git
        if(!git){
            return undefined;
        }
        return git.updatedTime;
    });
}

/**
 * 文章贡献者列表
 */
export function useCommitPersons(){
    const pageData = usePageData() as Ref<{ git?: GitData}>;
    return computed(()=>{
        const git = pageData.value.git
        if(!git){
            return undefined;
        }
        return git.contributors;
    });
}
