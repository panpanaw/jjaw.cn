## 自动注册布局插件

插件会将该文件夹中的全部vue组件注册为布局。
如果文件名包含空格则会替换成下划线。例如 ```A B.vue``` 组件名称为 ```A_B.vue```
在子文件夹中的路径也会替换成下划线。例如 ```C/A.vue``` 组件名称为 ```C_A.vue```

### autoLayoutsPlugin(pathString: string);
- pathString 布局文件夹路径


