// 自动注册布局插件
import { App, Plugin } from "@vuepress/core";
import path from "path";
import fs from "fs";

export function autoLayoutsPlugin(pathString: string): Plugin {

    //查找全部vue组件文件
    const vueFiles:{name:string,path:string}[] = (()=>{
        const pathFile = path.resolve(pathString);
        const vueFilesMap:{name:string,path:string}[] = [];
        function find(keyName:string){
            const files = fs.readdirSync(`${pathFile}/${keyName}`);
            const vueFiles = files.filter((f)=>f.endsWith(".vue"));
            for(const vueFile of vueFiles){
                vueFilesMap.push({
                    name:`${keyName}${vueFile}`,
                    path:`${pathString}/${keyName}${vueFile}`
                });
            }
            for(const file of files){
               const stat = fs.statSync(`${pathString}/${keyName}${file}`);
               if(!stat.isDirectory()){
                continue;
               }
               find(`${keyName}${file}/`);
            }
        }
        find("");
        for(let obj of vueFilesMap){
            obj.name = obj.name.substring(0,obj.name.length-4).replace(/[\/ .]/g,"_");
        }
        return vueFilesMap;
    })();
    return {
        name: "auto-layouts",
        async onInitialized(app: App) {
  
        },
        clientConfigFile: `${__dirname}/client.js`,
        async onPrepared(app){
            let js = "";
            for(let {name,path} of vueFiles){
                js+=`import ${name} from "${path}"\n`;
            }
            js+="export const layouts = {"
            for(let {name} of vueFiles){
                js+=`${name},`;
            }
            js+="}";
            await app.writeTemp('auto-layouts/layouts.js', js);
        }
    }
}