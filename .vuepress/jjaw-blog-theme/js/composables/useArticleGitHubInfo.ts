import { GitContributor } from "@vuepress/plugin-git";
import { GitPluginPageData } from "@vuepress/plugin-git";
import { onMounted, reactive, ref } from "vue";
import { usePageData } from "vuepress/client";
import { getGitHubUserInfoByEmail } from "../client/GithubUserData";

export type GethubUserContributor = {
    name: string; //名称
    email: string; //邮箱
    commits: number; //提交次数
    githubUrl?: string //githu主页
    avatarUrl?: string; //头像
}

/* 异步加载的，加载完成之后更新 */
function gethubGithubUserInfo(users:GitContributor[]){
    const gethubUserContributors = reactive<GethubUserContributor[]>([]);
    for(const user of users){
        const gitUser = reactive<GethubUserContributor>({
            name:user.name,
            email:user.email,
            commits:user.commits,
        });
        gethubUserContributors.push(gitUser);
        onMounted(()=>{
            getGitHubUserInfoByEmail(user.email).then((info)=>{
                gitUser.githubUrl = info?.githubPage;
                gitUser.avatarUrl = info?.img;
                if(info?.githubName){
                    gitUser.name = info?.githubName
                }
            });
        });
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
export function useArticleGitHubInfo():ArticleGitHubInfo{
    const page = usePageData<GitPluginPageData>()
    const { git } = page.value;
    let articleGitHubInfo = reactive<ArticleGitHubInfo>({
        gitHubContributors:gethubGithubUserInfo(git.contributors || []),
        createdTime:git.createdTime || 0,
        updatedTime:git.updatedTime || 0
    });
    return articleGitHubInfo;
}