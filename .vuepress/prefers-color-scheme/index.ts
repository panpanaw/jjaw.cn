//主题颜色插件
import { Plugin } from "vuepress";
export function prefersColorSchemePlugin(): Plugin {
    return {
        name: "prefers-color-scheme",
        clientConfigFile: `${__dirname}/client.ts`
    }
}