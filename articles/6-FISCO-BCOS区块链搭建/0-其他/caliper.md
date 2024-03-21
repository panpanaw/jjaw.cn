---
# 页面路径
permalinkPattern: 2024/3/3/caliperhello/

title: java调用通过webase-front调用合约
description: java调用通过webase-front调用合约
# tags: ["区块链"]
# star: false

# 启用评论评论
comment: true
---

## 将当前用户添加到docker组
``` shell
# 修改docker.sock权限为root:docker
sudo chown root:docker /var/run/docker.sock

# 添加docker用户组 
sudo groupadd docker

# 将当前用户添加至docker用户组
sudo gpasswd -a $USER docker

# 更新docker用户组
newgrp docker
```

## 安装docker-compose

``` shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```



## 下载caliper

npm install --only=prod @hyperledger/caliper-cli@0.2.0

## 下载预定义测试用例

git clone https://gitee.com/vita-dounai/caliper-benchmarks.git



##　<font color=red>修改源代码处理</font>

<font color=blue>修改三个文件，一个依赖包版本</font>

**fiscoBcos.js：**

./node_modules/@hyperledger/caliper-fisco-bcos/lib/fiscoBcos.js

**channelPromise.js：**

./node_modules/@hyperledger/caliper-fisco-bcos/lib/channelPromise.js

**web3sync.js：**

./node_modules/@hyperledger/caliper-fisco-bcos/lib/web3lib/web3sync.js

**secp256k1依赖包版本：**

./node_modules/@hyperledger/caliper-fisco-bcos/package.json



### <font color=red>fiscoBcos.js</font>
```
./node_modules/@hyperledger/caliper-fisco-bcos/lib/fiscoBcos.js
```

#### <font color=blue>修改一</font>

最上面常量

``` javascript
//const Color = require('./common');
const Color = require('./common').Color;
```

#### <font color=blue>修改二</font>

在constructor(config_path,workspace_root){}最后加入

``` javascript
if(this.fiscoBcosSettings.network && this.fiscoBcosSettings.network.authentication){
    for(let k in this.fiscoBcosSettings.network.authentication){
        this.fiscoBcosSettings.network.authentication[k]=CaliperUtils.resolvePath(this.fiscoBcosSettings.network.authentication[k],workspace_root)
    }
}
```



#### <font color=blue>修改三</font>

在 async installSmartContract{}最前面修改

``` javascript
//const fiscoBcosSettings = CaliperUtils.parseYaml(this.configPath)['fisco-bcos'];
const fiscoBcosSettings = this.fiscoBcosSettings;
```



### <font color=red>channelPromise.js</font>
```
./node_modules/@hyperledger/caliper-fisco-bcos/lib/channelPromise.js
```

#### <font color=blue>修改一</font>

在function parseResponse(response){}处修改

``` javascript
//let emitter = emitters.get(seq).emitter;
let emitter = emitters.get(seq);
if(!emitter){
    return;
}
emitter = emitter.emitter;
```

### <font color=red>web3sync.js</font>
```
./node_modules/@hyperledger/caliper-fisco-bcos/lib/web3lib/web3sync.js
```

#### <font color=blue>修改一</font>

在function genRandomID(){}处修改

```javascript
//uuid = uuid.replace(/-/g,'');
uuid = '0x'+uuid.replace(/-/g,'');
```

#### <font color=blue>修改二</font>

在function getSignTx(){ let postdata = {} }处修改

``` javascript
//extraData:''
extraData:'0x0'
```

#### <font color=blue>修改三</font>

在function getSignDeployTx(){ let postdata = {} }处修改

``` javascript
//extraData:''
extraData:'0x0'
```

### <font color=red>secp256k1依赖包</font>
```
./node_modules/@hyperledger/caliper-fisco-bcos/package.json
```

node_modules/@hyperledger/caliper-fisco-bcos目录，package.json文件

```yaml
在dependencies中添加
"secp256k1":"^3.8.0"
```

在该目录执行npm i



## 绑定 fisco-bcos

``` shell
npx caliper bind --caliper-bind-sut fisco-bcos --caliper-bind-sdk latest
```



##　执行HelloWorld合约测试

``` shell
npx caliper benchmark run --caliper-workspace caliper-benchmarks --caliper-benchconfig benchmarks/samples/fisco-bcos/helloworld/config.yaml  --caliper-networkconfig networks/fisco-bcos/4nodes1group/fisco-bcos.json
```

 测试本地搭好的链

```yaml
monitor:
  type:
  - process
  process:
    - command: node0
      multiOutput: avg
    - command: node1
      multiOutput: avg
    - command: node2
      multiOutput: avg
    - command: node3
      multiOutput: avg
  interval: 0.1
```

npx caliper benchmark run --caliper-workspace caliper-benchmarks --caliper-benchconfig benchmarks/samples/fisco-bcos/helloworld/config.yaml --caliper-networkconfig networks/fisco-bcos/4nodes1group/fisco-bcos.json