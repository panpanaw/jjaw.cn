---
# 页面路径
permalinkPattern: 2024/5/6/mysql8-max-conn/

title: MYSQL8设置最大连接数
description: linux ubuntu 安装并配置mysql8创建用户,远程连接,绑定ip和端口，远程访问
tags: ["后端"]
star: true

# 启用评论评论
comment: true
---

# MYSQL8设置最大连接数

## ```max_connections``` 和 ```mysqlx_max_connections```

在mysql8版本，有两个最大连接数的选项 ```max_connections``` 和 ```mysqlx_max_connections```。

- max_connections 通常的最大连接数；
- mysqlx_max_connections 它用于设置MySQL X Protocol（X协议）的最大连接数。MySQL X Protocol是MySQL的一种新的协议，它基于WebSocket和JSON，用于提供无状态、基于文档的访问MySQL的功能。

通常需要同时设定这两个数值，且数值一致。

## 修改

在mysql8版本中可以直接使用```SET PERSIST```修改并持久化全局变量的配置（直接保存了，重启依然生效）
~~~ sql
SET PERSIST max_connections=1024;
SET PERSIST mysqlx_max_connections=1024;
~~~

::: tip 
在8之前的版本中，对于全局变量的修改，其只会影响其内存值，而不会持久化到配置文件中。数据库重启，又会恢复成修改前的值。从8开始，可通过SET PERSIST命令将全局变量的修改持久化到配置文件中。
:::


## 查询
使用这条命令可以查看```max_connections``` 和 ```mysqlx_max_connections```当前的值。
~~~ sql
show variables like '%max_connections';
~~~
插件结果
~~~ text
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| max_connections        | 1024  |
| mysqlx_max_connections | 1024  |
+------------------------+-------+
2 rows in set (0.06 sec)
~~~




