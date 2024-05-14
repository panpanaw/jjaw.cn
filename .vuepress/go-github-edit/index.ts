// 
import type { Plugin } from "vuepress/core";
import type { github_edit } from "./github_edit_type";

export type githubEditPluginConfig = {
    githubAdderss: `http${"" | "s"}://${string}/${string}`,
    branche: String,
    helpPath: String
}
/**
 * 
 * @param githubAdderss github仓库地址
 * @param branche 分支
 */
export function githubEditPlugin({githubAdderss,branche,helpPath}:githubEditPluginConfig): Plugin {
    return {
        name: "github-edit",
        define: {
            _github_edit_base_url_: `${githubAdderss}/edit/${branche}/`,
            _github_edit_helpPath_:helpPath
        },
        extendsPage(page) {
            page.data["github_edit"] = ((o: github_edit) => o)({
                filePathRelative: page.filePathRelative
            });
        }
    }
}