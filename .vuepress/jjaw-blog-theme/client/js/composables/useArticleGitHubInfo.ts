import { GitContributor } from "@vuepress/plugin-git";
import { GitPluginPageData } from "@vuepress/plugin-git";
import { Ref, computed, onMounted, reactive, ref } from "vue";
import { usePageData } from "vuepress/client";
import { getGitHubUserInfoByEmail } from "../client/GithubUserData";
declare const __VUEPRESS_SSR__:boolean;

export type GethubUserContributor = {
    name: string; //名称
    email: string; //邮箱
    commits: number; //提交次数
    githubUrl?: string //githu主页
    avatarUrl?: string; //头像
}

/** 去重，相同邮箱的用户认为是同一个用户，并将提交次数求和 */
function deduplicationUser(users:GitContributor[]){
    const map = new Map<string,GitContributor>();
    for(const user of users){
        const mapUser = map.get(user.email);
        if(mapUser){
            mapUser.commits+=user.commits;
            continue;
        }
        map.set(user.email,{...user});
    }
    return [...map.values()];
}

/* 异步加载的，加载完成之后更新 */
export function useGetGithubUserInfo(users:GitContributor[]){
    users = deduplicationUser(users);//去重
    const gethubUserContributors = reactive<GethubUserContributor[]>([]);
    for(const user of users){
        const gitUser = reactive<GethubUserContributor>({
            name:user.name,
            email:user.email,
            commits:user.commits,
        });
        gethubUserContributors.push(gitUser);
        if(!__VUEPRESS_SSR__){
            getGitHubUserInfoByEmail(user.email).then((info)=>{
                gitUser.githubUrl = info?.githubPage;
                gitUser.avatarUrl = info?.img;
                if(info?.githubName){
                    gitUser.name = info?.githubName
                }
            });
        }
    }
    return gethubUserContributors;
}

export type ArticleGitHubInfo = {
    gitHubContributors:GethubUserContributor[],
    createdTime:number,
    updatedTime:number
}
/**
 * 获取文章的信息,先获取git信息，页面加载完之后从github获取
 */
export function useArticleGitHubInfo():Ref<ArticleGitHubInfo>{
    const page = usePageData<GitPluginPageData>()
    // let articleGitHubInfo = reactive<ArticleGitHubInfo>({
    //     gitHubContributors:useGetGithubUserInfo(git.contributors || []),
    //     createdTime:git.createdTime || 0,
    //     updatedTime:git.updatedTime || 0
    // });
    let articleGitHubInfo = computed(()=>{
        return {
            gitHubContributors:useGetGithubUserInfo(page.value.git.contributors || []),
            createdTime:page.value.git.createdTime || 0,
            updatedTime:page.value.git.updatedTime || 0
        }
    })
    return articleGitHubInfo;
}