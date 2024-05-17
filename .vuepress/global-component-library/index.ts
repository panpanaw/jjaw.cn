import type { Plugin } from "vuepress/core";
import { path } from "vuepress/utils";
export function globalComponentLibraryPlugin(): Plugin {
    return {
        name: "global-component-library",
        clientConfigFile: path.resolve(__dirname, 'client.ts'),
    }
}