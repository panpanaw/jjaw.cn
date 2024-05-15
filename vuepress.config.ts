import { Page, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { autoLayoutsPlugin } from './@plugin/auto-layouts';
import { homePagePlugin } from './@plugin/home-page';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { GitContributor, GitData, gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { seoPlugin } from "@vuepress/plugin-seo";
import { blogPlugin } from "@vuepress/plugin-blog";
import { giscusCommentPlugin } from './@plugin/giscus-comment';
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { prefersColorSchemePlugin } from './@plugin/prefers-color-scheme';
import { githubEditPlugin } from './@plugin/github-edit';

const hostName = 'jjaw.cn';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '神奇小破站',
    description: '分享有意思的东西',
    public: `${__dirname}/public`,
    pagePatterns: [
        "./articles/**/*.md"
    ],
    markdown: {
        toc: {
            level: [2, 3, 4]
        },
        headers: {
            level: [2, 3, 4]
        }
    },
    shouldPrefetch: false,
    /**
     * 不需要主题awa，空主题就ok
     */
    theme: { name: "jjaw-cn-page" },
    templateBuild:"./build.html",
    templateDev:"./dev.html",
    plugins: [
        /**
         * 在github编辑插件
         */
        githubEditPlugin(
            "https://github.com/jianjianai/vue.js.jjaw.cn.articles",
            "master",
            "/edit-on-github/"
        ),
        /**
        * 颜色模式切换插件，某些插件用到了vuepress自带主题的颜色模式，这个插件从默认主题修改而来。在html标签添加对应颜色class
        * 自己瞎写的 ./@plugin/prefers-color-scheme
        */
        prefersColorSchemePlugin(),
        /**
         * 自动注册布局
         * 自己瞎写的 ./@plugin/auto-layouts
         */
        autoLayoutsPlugin(`${__dirname}/@layouts`),
        /**
         * 主页面插件
         * 自己瞎写的 ./@plugin/home-page
         */
        homePagePlugin({
            path: "/",
            frontmatter: {
                layout: "HomePage",
                description: "分享有意思的东西！java web 前端 网络 vue JavaScript JS TS TypeScript css H5"
            }
        }),
        /**
         * 自动注册全局组件
         * https://ecosystem.vuejs.press/zh/plugins/register-components.html
         */
        registerComponentsPlugin({
            componentsDir: `${__dirname}/@tags`
        }),
        /**
         * 切换页面显示进度条
         * https://ecosystem.vuejs.press/zh/plugins/nprogress.html
         */
        nprogressPlugin(),
        /**
         * 代码语法高亮
         * https://ecosystem.vuejs.press/zh/plugins/prismjs.html
         */
        prismjsPlugin({
            preloadLanguages: []
        }),
        /**
         * 获取git信息
         * https://ecosystem.vuejs.press/zh/plugins/git.html
         */
        gitPlugin(),
        /**
         * 自动生成目录
         * https://ecosystem.vuejs.press/zh/plugins/toc.html
         */
        tocPlugin(),
        /**
         * 页面滚动自动定位hash
         * https://ecosystem.vuejs.press/zh/plugins/active-header-links.html
         */
        activeHeaderLinksPlugin({
            headerLinkSelector: ".vuepress-toc-link",
            headerAnchorSelector: ".header-anchor"
        }),
        /**
         * Markdown 增强
         * https://plugin-md-enhance.vuejs.press/zh/
         */
        mdEnhancePlugin({
            //开启组件
            component: true,
            //开启选项卡
            tabs: true,
            // 启用图片懒加载
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            // 启用图片大小
            imgSize: true,
            // 启用提示容器
            hint: true,
            // 启用任务列表
            tasklist: true,
            // 启用代码块分组
            codetabs: true,
        }),
        /**
         * sitemap生成
         * https://ecosystem.vuejs.press/zh/plugins/sitemap/
         */
        sitemapPlugin({
            hostname: hostName,
            changefreq: "monthly"
        }),
        /**
         * eco 搜索引擎优化
         * https://ecosystem.vuejs.press/zh/plugins/seo/
         */
        seoPlugin({
            hostname: hostName,
            isArticle: (page) => {
                return page.filePath?.startsWith(`${__dirname}/articles/`) ? true : false;
            }
        }),
        /**
         * 博客插件 列表 分类 标签
         * https://ecosystem.vuejs.press/zh/plugins/blog/
         */
        blogPlugin({
            getInfo(page) {
                return {
                    git: getGitInfo(page),
                    title: page.frontmatter.title || page.title,
                    description: page.frontmatter.description
                }
            },
            filter: (page) => {
                return page.filePath?.startsWith(`${__dirname}/articles/`) ? true : false;
            },
            type: [
                {
                    key: "stars",
                    filter({ frontmatter }) { return frontmatter.star ? true : false },
                    sorter(pa, pb) {
                        const ta = pa.data["git"]?.updatedTime || 0;
                        const tb = pb.data["git"]?.updatedTime || 0;
                        return tb - ta;
                    }
                }
            ],
            category: [{
                key: "tags",
                path: "/tags/",
                layout: "Tags",
                frontmatter(localePath) {
                    return {
                        title: "标签页",
                        description: "通过标签浏览文章列表."
                    }
                },
                itemPath: "/tags/:name/",
                itemLayout: "Tags",
                itemFrontmatter(name, localePath) {
                    return {
                        title: `${name}标签`,
                        description: `${name}标签的所有文章`
                    }
                },
                getter(page) {
                    const tags = page.data.frontmatter["tags"];
                    if (Array.isArray(tags)) {
                        return tags;
                    }
                    if ((typeof tags) == 'string') {
                        return [tags]
                    }
                    return [];
                },
                sorter(pa, pb) {
                    const ta = pa.data["git"]?.updatedTime || 0;
                    const tb = pb.data["git"]?.updatedTime || 0;
                    return tb - ta;
                }
            }]
        }),
        /**
         * 评论区插件
         * 注册一个全局异步GiscusComment组件
         * 自己瞎写的 ./@plugin/giscus-comment
         */
        giscusCommentPlugin({
            repo: "jianjianai/vue.js.jjaw.cn.articles",
            repoId: "R_kgDOKsd6yQ",
            category: "vue.js.jjaw.cn.articles",
            categoryId: "DIC_kwDOKsd6yc4CbRMH",
            mapping: "pathname",
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "1",
            inputPosition: "bottom",
            theme: "preferred_color_scheme",
            lang: "zh-CN",
            loading: "eager"
        }),
        /**
         * https://ecosystem.vuejs.press/zh/plugins/external-link-icon.html
         * 该插件会为你 Markdown 内容中的外部链接添加一个图标
         */
        externalLinkIconPlugin({
            locales: {
                "/": {
                    openInNewWindow: '在新窗口打开',
                }
            }
        }),
    ],
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
});



function getGitInfo(page: Page) {
    const git = page.data["git"] as GitData | undefined;
    if (!git) {
        return undefined;
    }
    let commitMaxPerson: GitContributor | undefined = undefined;
    if (git.contributors && git.contributors.length > 0) {
        commitMaxPerson = git.contributors.sort((a, b) => b.commits - a.commits)[0];
    }
    let updatedTime = git.updatedTime;
    return {
        commitMaxPerson,//获取git提交最多的人
        updatedTime,//文章的更新时间
    }
}