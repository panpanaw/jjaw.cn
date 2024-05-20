import { fs, getDirname, path } from 'vuepress/utils'
import type { Theme } from 'vuepress/core'
import anchor from 'markdown-it-anchor'

// 自己写的 giscus
import { giscusCommentPlugin, type GiscusConfig } from '../giscus-comment'

// 自己写的
import { githubEditPlugin, type githubEditPluginConfig } from '../go-github-edit';


// https://ecosystem.vuejs.press/zh/plugins/links-check.html
// 此插件将检查您的 markdown 文件中的死链接。
import { linksCheckPlugin } from '@vuepress/plugin-links-check';

// https://ecosystem.vuejs.press/zh/plugins/external-link-icon.html
// 该插件会为你 Markdown 内容中的外部链接添加一个图标
import { externalLinkIconPlugin, type ExternalLinkIconPluginOptions } from '@vuepress/plugin-external-link-icon'

// https://ecosystem.vuejs.press/zh/plugins/nprogress.html
// 将 nprogress 集成到 VuePress 中，在切换到另一个页面时会展示进度条。
import { nprogressPlugin } from '@vuepress/plugin-nprogress'


// https://ecosystem.vuejs.press/zh/plugins/blog/
// blog
import { blogPlugin } from '@vuepress/plugin-blog'

// https://ecosystem.vuejs.press/zh/plugins/seo/
// seo 搜索引擎优化
import { seoPlugin, type SeoPluginOptions } from '@vuepress/plugin-seo'

// https://ecosystem.vuejs.press/zh/plugins/sitemap/
// sitemap
import { sitemapPlugin, type SitemapPluginOptions } from '@vuepress/plugin-sitemap'

// https://ecosystem.vuejs.press/zh/plugins/prismjs.html
// 代码高亮。
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

// https://ecosystem.vuejs.press/zh/plugins/active-header-links.html
// 该插件会监听页面滚动事件。当页面滚动至某个 标题锚点 后，如果存在对应的 标题链接 ，那么该插件会将路由 Hash 更改为该 标题锚点 。
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'

// https://ecosystem.vuejs.press/zh/plugins/git.html
// 该插件会收集你的页面的 Git 信息，包括创建和更新时间、贡献者等。
import { gitPlugin } from '@vuepress/plugin-git'

// https://ecosystem.vuejs.press/zh/plugins/toc.html
// 该插件会提供一个目录 (table-of-contents, TOC) 组件。
import { tocPlugin } from '@vuepress/plugin-toc'

// https://plugin-md-enhance.vuejs.press/zh
// 为 VuePress2 提供更多 Markdown 增强功能
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

// 自己写的组件库插件
import { globalComponentLibraryPlugin } from '../global-component-library';

//主题颜色切换插件
import { prefersColorSchemePlugin } from '../prefers-color-scheme';

const __dirname = getDirname(import.meta.url)
export const jjawBlogTheme = ({seo,sitemap,giscus,externalLinkIcon,githubEdit}:{
    seo:SeoPluginOptions,
    sitemap:SitemapPluginOptions,
    giscus:GiscusConfig
    externalLinkIcon?:ExternalLinkIconPluginOptions,
    githubEdit:githubEditPluginConfig
}) => {
    externalLinkIcon = externalLinkIcon || {
        locales: {
            "/": {
                openInNewWindow: '在新窗口打开',
            }
        }
    };
    const theme: Theme = (app)=>{
        return {
            name: 'jjaw-blog-theme',
            // 主题的客户端配置文件的路径
            clientConfigFile: path.resolve(__dirname, 'client.ts'),
            // 使用插件
            plugins: [
                linksCheckPlugin({}),
                externalLinkIconPlugin(externalLinkIcon),
                nprogressPlugin(),
                blogPlugin({}),
                seoPlugin(seo),
                sitemapPlugin(sitemap),
                prismjsPlugin({}),
                activeHeaderLinksPlugin({
                    headerAnchorSelector:".header-anchor",
                    headerLinkSelector:"a"
                }),
                gitPlugin({}),
                giscusCommentPlugin(giscus),
                tocPlugin(),
                githubEditPlugin(githubEdit),
                mdEnhancePlugin({
                    tasklist:true, //任务列表
                    tabs: true,//选项卡
                    codetabs: true,//代码选项卡
                    hint: true,//提示容器
                    imgLazyload: true,//原生图片懒加载
                    alert: true,//GFM 警告

                }),
                globalComponentLibraryPlugin(),
                prefersColorSchemePlugin(),
            ],
            extendsMarkdownOptions:(markdownOptions, app)=>{
                markdownOptions.code = {...{
                    lineNumbers:false
                },...markdownOptions.code};
            }
        }
    }
    return theme;
}