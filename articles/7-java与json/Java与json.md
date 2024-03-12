---
# 页面路径
permalinkPattern: 2024/3/5/java-json/

title: java解析json的三个库的基础用法,Gson,FastJson,Jackson,一次把常用的库都看完。任何时刻都不慌。
description: 本文讲述了Gson,FastJson,Jackson的区别，和具体的最基本的使用方法。
tags: ["后端"]
star: true

# 启用评论评论
comment: true
---

# java解析json的三个库的基础用法,Gson,FastJson,Jackson

## 三者有何不同？

::: tip 小提示
推荐初学者用Fastjson。
Fastjson相较于其他json库，最容易理解，最好上手。
:::

### gson
Gson当初是为因应Google公司内部需求而由Google自行研发而来，Gson的应用主要为toJson与fromJson两个转换函数，无依赖，不需要例外额外的jar。

### Fastjson
Fastjson是一个Java语言编写的高性能的JSON处理器,由阿里巴巴公司开发。无依赖，不需要例外额外的jar，能够直接跑在JDK上。FastJson采用独创的算法，将parse的速度提升到极致，超过所有json库。

### Jackson
Jackson是当前用的比较广泛的，用来序列化和反序列化json的Java开源框架。Jackson社区相对比较活跃，更新速度也比较快，Jackson是最流行的json解析器之一，spring默认使用Jackson。


## Maven 仓库
- [gson](https://mvnrepository.com/artifact/com.google.code.gson/gson)
- [FastJson](https://mvnrepository.com/artifact/com.alibaba.fastjson2/fastjson2)
- [Jackson](https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind)

## 使用方法
### gson 

使用Gson解析json需要用到一个Gson实例，可以直接这样创建。
``` java
Gson gson = new Gson();
```

在Gson中，所有的Json对象都继承于```JsonElement``` ，也就是说，他们都是json元素。 
```string```,```number```,```array```,```Object```都可以是Gson中的```JsonElement```对象。
#### 解析json对象

#### 从JsonObject得到对应的值
从jsonObject得到对应的值，只需要3步，其他的都是以此类推。

##### 1.得到JsonObject
``` java
Gson gson = new Gson();
String json = """
        {
            "string1":"value1"
        }
        """;
JsonObject jsonObject = gson.fromJson(json, JsonObject.class);
System.out.println(jsonObject);
```
##### 2.得到对应的JsonElement
``` java
JsonElement jsonElement = jsonObject.get("string1");
System.out.println(jsonElement);
```
##### 3.转换为对应的对象
``` java
String string1 = jsonElement.getAsString();
System.out.println(string1);
```

##### 4.接下来就是以此类推
``` java
Gson gson = new Gson();
String json = """
{
    "string1":"value1",
    "number1":12,
    "number2":5.2,
    "object1":{
        "key":"value"
    }
}
""";
JsonObject jsonObject = gson.fromJson(json, JsonObject.class);
String string1 = jsonObject.get("string1").getAsString();
int number1 = jsonObject.get("number1").getAsInt();
double number2 = jsonObject.get("number2").getAsDouble();
JsonObject object1 = jsonObject.get("object1").getAsJsonObject();
System.out.println(string1);
System.out.println(number1);
System.out.println(number2);
System.out.println(object1);
```

#### 解析Array对象

##### 1.得到JsonArray
``` java
Gson gson = new Gson();
String array = """
        [
            1,
            2,
            5
        ]
        """;
JsonArray jsonArray = gson.fromJson(array, JsonArray.class);
System.out.println(jsonArray);
```

###### 2.得到对应的JsonElement
``` java
JsonElement jsonElement = jsonArray.get(0);//得到下标为0的元素
System.out.println(jsonElement);
```

###### 3.转换为对应的对象
``` java
int index0 = jsonElement.getAsInt();
System.out.println(index0);
```

##### 4.接下来就是以此类推
``` java
Gson gson = new Gson();
String array = """
[
    1,
    {"key":"value"},
    ["a","b","c"]
]
""";
JsonArray jsonArray = gson.fromJson(array, JsonArray.class);
int index0 = jsonArray.get(0).getAsInt();
JsonObject index1 = jsonArray.get(1).getAsJsonObject();
JsonArray index2 = jsonArray.get(2).getAsJsonArray();
System.out.println(index0);
System.out.println(index1);
System.out.println(index2);
```


### FastJson
FastJson解析字符串最长用的工具类就是```JSON```,这是一个接口但是其中有很多静态方法。

#### 解析json对象

##### 1.得到JSONObject对象
``` java
String json = """
{
    "string1":"value1"
}
""";
JSONObject jsonObject = JSON.parseObject(json);
System.out.println(jsonObject);
```

##### 2.得到对应的值
``` java
String string1 = jsonObject.getString("string1");
System.out.println(string1);
```

##### 其他的也是以此类推
``` java
String json = """
{
    "string1":"value1",
    "number1":12,
    "number2":5.2,
    "object1":{
        "key":"value"
    }
}
""";
JSONObject jsonObject = JSON.parseObject(json);
String string1 = jsonObject.getString("string1");
int number1 = jsonObject.getIntValue("number1");
double number2 = jsonObject.getDoubleValue("number2");
JSONObject jsonObject1 = jsonObject.getJSONObject("object1");
System.out.println(string1);
System.out.println(number1);
System.out.println(number2);
System.out.println(jsonObject1);
```

#### 解析Array
##### 1.得到JsonArray
``` java
String array = """
[
    1,
    2,
    3
]
""";
JSONArray jsonArray = JSON.parseArray(array);
System.out.println(jsonArray);
```
##### 2.得到对应的值
``` java
int index0 = jsonArray.getIntValue(0);
System.out.println(index0);
```

##### 3.其他的也是以此类推
``` java
    String array = """
    [
        1,
        {"key":"value"},
        ["a","b","c"]
    ]
    """;
    JSONArray jsonArray = JSON.parseArray(array);
    int index0 = jsonArray.getIntValue(0);
    JSONObject index1 = jsonArray.getJSONObject(1);
    JSONArray index2 = jsonArray.getJSONArray(2);
    System.out.println(index0);
    System.out.println(index1);
    System.out.println(index2);
```

### Jackson
在Jackson中，所有的json元素都是```JsonNode```,使用这个接口就够用了。

jackson解析json需要用到一个```ObjectMapper```实例，可以直接这样创建
``` java
ObjectMapper objectMapper = new ObjectMapper();
```
#### 解析json对象
##### 1.得到JsonNode                                                                
``` java
ObjectMapper objectMapper = new ObjectMapper();
String json = """
{
    "string1":"value1"
}
""";
ObjectNode objectNode = objectMapper.readValue(json,ObjectNode.class);
System.out.println(objectNode);
```
##### 2.得到对应的JsonNode
``` java
JsonNode jsonNode = objectNode.get("string1");
System.out.println(jsonNode);
```
##### 3.得到对应的值
``` java
String string1 = jsonNode.asText();
System.out.println(string1);
```

##### 4.其他也是以此类推
``` java
ObjectMapper objectMapper = new ObjectMapper();
String json = """
{
    "string1":"value1",
    "number1":12,
    "number2":5.2,
    "object1":{
        "key":"value"
    }
}
""";
JsonNode objectNode = objectMapper.readValue(json,JsonNode.class);
String string1 = objectNode.get("string1").asText();
int number1 = objectNode.get("number1").asInt();
double number2 = objectNode.get("number2").asDouble();
JsonNode objectNode1 = objectNode.get("object1");
System.out.println(string1);
System.out.println(number1);
System.out.println(number2);
System.out.println(objectNode1);
```

#### 解析Array
array也和json对象一样用JsonNode的方式解析。

##### 1.得到JsonNode   
``` java
ObjectMapper objectMapper = new ObjectMapper();
String array = """
[
    1,
    2,
    3
]
""";
JsonNode objectNode = objectMapper.readValue(array,JsonNode.class);
```

##### 2.得到对应的JsonNode
``` java
JsonNode index1Node = objectNode.get(0);
System.out.println(index1Node);
```

##### 3.得到对应的值
``` java
int index1 = index1Node.asInt();
System.out.println(index1);
```
##### 4.其他也是以此类推
``` java
ObjectMapper objectMapper = new ObjectMapper();
String array = """
[
    1,
    {"key":"value"},
    ["a","b","c"]
]
""";
JsonNode objectNode = objectMapper.readValue(array,JsonNode.class);
int index0 = objectNode.get(0).asInt();
JsonNode index1 = objectNode.get(1);
JsonNode index2 = objectNode.get(2);
System.out.println(index0);
System.out.println(index1);
System.out.println(index2);
```

### 怎么转换成字符串？
对应的对象toString()一下就ok可以了。


