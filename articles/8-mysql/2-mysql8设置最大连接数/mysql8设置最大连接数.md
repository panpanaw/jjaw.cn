---
# 页面路径
permalinkPattern: 2024/5/6/mysql8-max-conn/

title: MYSQL8或MYSQL5设置最大连接数，深入解析MySQL最大连接数：配置与管理全指南
description: 本文详细讲解了在MySQL 8中如何精确设置和监控最大连接数。深入探讨了max_connections与mysqlx_max_connections两个关键参数的配置方法，以及如何利用SET PERSIST命令持久化这些设置，确保数据库重启后设置依旧生效。文章还包含了查询当前最大连接数配置的实用SQL命令。
tags: ["后端"]
star: true

# 启用评论评论
comment: true
---

# MYSQL8设置最大连接数

## ```max_connections``` 和 ```mysqlx_max_connections```

在mysql8版本，有两个最大连接数的选项 ```max_connections``` 和 ```mysqlx_max_connections```。

- max_connections 通常的最大连接数；
- mysqlx_max_connections 它用于设置MySQL X Protocol（X协议）的最大连接数。MySQL X Protocol是MySQL8的一种新的协议，它基于WebSocket和JSON，用于提供无状态、基于文档的访问MySQL的功能。

通常需要同时设定这两个数值，且数值一致。

## 修改


### mysql8
在MySQL 8版本中可以直接使用SET PERSIST命令修改并持久化全局变量的配置，这样即使数据库重启，设置也会保持有效。
``` sql
SET PERSIST max_connections=1024;
SET PERSIST mysqlx_max_connections=1024;
```

::: tip 
在MySQL 8之前的版本中，全局变量的修改只会影响内存值，不会持久化到配置文件中。数据库重启后，设置会恢复为修改前的值。从MySQL 8开始，可以通过SET PERSIST命令将全局变量的修改持久化到配置文件中。
:::

### mysql5
1. 打开MySQL的配置文件```my.cnf```（Linux系统）或```my.ini```（Windows系统）。

#### ubuntu
ubuntu为例,打开编辑```my.cnf```文件。
``` shell
vim /etc/mysql/my.cnf
```
::: tabs
@tab 通常情况
通常情况下，如果```my.cnf```里,有```!includedir /etc/mysql/mysql.conf.d/```,例如下面这样。
``` toml
!includedir /etc/mysql/conf.d/
!includedir /etc/mysql/mysql.conf.d/
```
就去编辑```mysql.conf.d``` 下的 ```mysqld.cnf``` 文件
``` shell
vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

第54行，```#max_connections```把#删掉，取消注释，后面给改连接数。
``` toml
# This replaces the startup script and checks MyISAM tables if needed
# the first time they are touched
myisam-recover-options  = BACKUP
max_connections        = 100 # <<--- 在这里
#table_open_cache       = 64
#thread_concurrency     = 10
```

@tab 万能方法
直接修改```my.cnf```文件。如果没用```[mysqld]```部分则添加，查找```max_connections```参数。如果不存在，则添加```max_connections=您希望的数值```如果存在，则修改为所需的数值。
``` toml
[mysqld]
max_connections = 100
```
:::

编辑并保存好文件之后重启mysql服务即可。
``` shell
service mysql restart
```


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




