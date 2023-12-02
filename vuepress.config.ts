import { defineUserConfig } from 'vuepress'
import { autoLayoutsPlugin } from './@plugin/auto-layouts';
import { homePagePlugin } from './@plugin/home-page';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { blogPlugin } from "vuepress-plugin-blog2";

const hostName = 'jjaw.cn';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '神奇小破站',
    description: '分享有意思的东西',
    public: `${__dirname}/public`,
    pagePatterns: [
        "./articles/**/*.md"
    ],
    onInitialized(app){
        // 从写文章路由
        for(const page of app.pages){
            const articlesPath = `${__dirname}/articles/`;
            if(!page.filePath?.startsWith(articlesPath)){
                continue;
            }
            const articlesAPath = "/articles/";
            if(!page.path?.startsWith(articlesAPath)){
                continue;
            }
            let newPath = page.path.substring(articlesAPath.length-1);
            if(newPath.endsWith(".html")){
                newPath = newPath.substring(0,newPath.length-5)
            }
            if(!newPath.endsWith("/")){
                newPath += "/";
            }
            page.path = newPath;
        }
    },
    /**
     * 不需要主题awa，空主题就ok
     */
    theme: {name:"jjaw-cn-page"},
    plugins: [
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
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html
         */
        registerComponentsPlugin({
            componentsDir: `${__dirname}/@tags`
        }),
        /**
         * 切换页面显示进度条
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/nprogress.html
         */
        nprogressPlugin(),
        /**
         * 代码语法高亮
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/prismjs.html
         */
        prismjsPlugin({
            preloadLanguages:[]
        }),
        /**
         * 获取git信息
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html
         */
        gitPlugin(),
        /**
         * 自动生成目录
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/toc.html
         */
        tocPlugin(),
        /**
         * 页面滚动自动定位hash
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/active-header-links.html
         */
        activeHeaderLinksPlugin(),
        /**
         * Markdown 增强
         * https://plugin-md-enhance.vuejs.press/zh/
         */
        mdEnhancePlugin({
            //开启组件
            component: true,
        }),
        /**
         * sitemap生成
         * https://plugin-sitemap2.vuejs.press/zh/
         */
        sitemapPlugin({
            hostname:hostName,
            changefreq:"monthly"
        }),
        /**
         * eco 搜索引擎优化
         * https://plugin-seo2.vuejs.press/zh/
         */
        seoPlugin({
            hostname:hostName,
            isArticle:(page)=>{
                return page.filePath?.startsWith(`${__dirname}/articles/`)?true:false;
            }
        }),
        /**
         * 博客插件 列表 分类 标签
         * https://plugin-blog2.vuejs.press/
         */
        blogPlugin({
            filter:(page)=>{
                return page.filePath?.startsWith(`${__dirname}/articles/`)?true:false;
            },
        })
    ]
});