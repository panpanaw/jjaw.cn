//评论区插件
import type { Theme, Mapping, BooleanString, InputPosition, AvailableLanguage, Loading } from "@giscus/vue";
import type { Plugin } from "vuepress/core";
export type GiscusConfig = {
    id?: string,
    host?: string,
    repo: `${string}/${string}`,
    repoId: string,
    category?: string,
    categoryId?: string,
    mapping: Mapping,
    term?: string,
    theme?: Theme,
    strict?: BooleanString,
    reactionsEnabled?: BooleanString,
    emitMetadata?: BooleanString,
    inputPosition?: InputPosition,
    lang?: AvailableLanguage,
    loading?: Loading,
}
export function giscusCommentPlugin(giscusConfig: GiscusConfig): Plugin {
    return {
        name: "giscus-comment",
        async onPrepared(app) {
            await app.writeTemp('giscus-comment/config.js', `export const config = ${JSON.stringify(giscusConfig)}`);
        }
    }
}