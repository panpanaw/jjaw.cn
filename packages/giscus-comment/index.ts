//评论区插件
import type { Theme, Mapping, BooleanString, InputPosition, AvailableLanguage, Loading } from "@giscus/vue";
import { Plugin } from "@vuepress/core";
export function giscusCommentPlugin(giscusConfig: {
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
}): Plugin {
    return {
        name: "giscus-comment",
        clientConfigFile: `${__dirname}/client.ts`,
        async onPrepared(app) {
            await app.writeTemp('giscus-comment/config.js', `export const config = ${JSON.stringify(giscusConfig)}`);
        }
    }
}