# truffle初步入门

[truffleApi简介](./0-truffleApi简介.md)
[用JavaScript写测试用例](./1-truffle用JavaScript写测试用例.md)
[assert Api](./3-assertApi.md)


## migrations 迁移部署
migrations中的脚本用于在测试开始之前部署合约，确保每一次测试都是干净的合约，有点像是初始化。

下面是一个简单例子：
``` solidity
contract Test{
}
```
``` js
//获取合约类
const Test = artifacts.require("Test");
module.exports = async (deployer)=>{
    //部署合约
    deployer.deploy(Test);
}
```


### 带有构造参数的合约
``` solidity
contract Test{
    constructor(uint a,string memory b) public{
    }
}
```
``` js
const Test = artifacts.require("Test");
module.exports = async (deployer)=>{
    deployer.deploy(Test,10,"qwe");
}
```

### 需要另一个合约作为构造参数
```solidity
contract Test{
}
contract Test1{
    constructor(Test1 test) public{
    }
}
```
``` js
const Test = artifacts.require("Test");
const Test1 = artifacts.require("Test1");
module.exports = async (deployer)=>{
    await deployer.deploy(Test);
    deployer.deploy(Test1,Test.address);
}
```

## test测试




