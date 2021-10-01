# wo-useragent
浏览器环境正则处理输出，支持微信，QQ，国内等环境。


## 用法
```
//
import UserAgent from '@tool-developer/wo-useragent';
const ua = new UserAgent(navigator.userAgent);

// console.log(ua)
```
### 输出结果举例：
```
{
  mobile: true,
  qq: true,
  'qq-version': '6.7.1.416',
  client: { name: 'qq', version: '6.7.1.416', major: 6, minor: 7, patch: 1 },
  webkit: true,
  engine: 'webkit',
  ios: true,
  'ios-version': 'iphone',
  iphone: true,
  iphone10: true,
  'iphone-version': '10.2.1',
  device: { name: 'iphone', version: '10.2.1', major: 10, minor: 2, patch: 1 }
}
```
### 二级结果输出
目前支持engine、device、browser、client二级输出
```
  {
    name:"iphone",
    major:10,
    minor:2,
    patch:1,
    version:"10.2.1"
  }

  console.log(us.engine)
  console.log(us.engine)
  console.log(us.browser)
  console.log(us.client)
```

### 举例说明：

#### 微信环境
```
// 微信
// ua.webchat
if(ua.micromessenger){
  //
}
```

#### Android环境
```
// Android
if(ua.android){

}
```
#### iOS环境
```
// iOS
if(ua.ios){

}
```

## 添加自定义规则
```
UserAgent.custom({
  taobao: {
    regex:/(?:tao|taobao)browser(?:.*version|)\/([\d.]+)/,
    browser:true
  }
})
```
## 版本检测
检测版本是否大于等于某个版本号(前者是否大于等于后者),最多只支持三级版本号
```
UserAgent.checkVersion('1.1.2','1.1.1');// true
UserAgent.checkVersion('1.1.2',[1,1,1]);// true
UserAgent.checkVersion([1,1,2],[1,1,1]);// true
```

### 规则说明
| 属性	| 说明 | 
| :--  | :--  | 
| regex	| 创建一个新的请求对象，形成请求链 | 
| alias	| 满足regex条件后，alias别名对应值也会标记为true | 
| mobile	| 标记为移动端，未标记的话默认会desktop为true | 
| browser	| 标记为浏览器处理 | 
| device	| 标记为设备处理 | 
| client	| 标记为客户端处理 | 
| engine	| 标记为浏览器引擎 | 
| filter	| 过滤掉某个属性的影响 | 
| devtools	| 识别开发者工具标记 | 
| desktop	| 识别桌面端标记 | 

### 正则匹配说明
如果值输出true，正则中不能含有[子表达式捕获]处理，如果需要输出版本version，则需要对版本号进行[子表达式捕获]。
#### 举例说明
```
webkit: {
  regex:/webkit\/(?:[\d.]+)/
},
```
只会输出webkit匹配结果
```
webkit: {
  regex:/webkit\/([\d.]+)/
},
```
除了输出webkit匹配结果，还会输出webkit version,通过['webkit-version']输出。