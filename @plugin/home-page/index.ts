// 主页插件
import { App, Plugin, createPage ,PageOptions} from "@vuepress/core";

export function homePagePlugin(PageOptions:PageOptions):Plugin{
    return {
        name : "home-page",
        async onInitialized(app: App) {
            app.pages.push(await createPage(app, PageOptions));
        }
    }
}