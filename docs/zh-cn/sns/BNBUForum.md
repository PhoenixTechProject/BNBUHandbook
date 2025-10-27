# BNBU 论坛

[BNBU 论坛](https://forum.bnbutech.cn/)现已开放，欢迎各位前来注册使用！

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/Screenshot.png)

看板娘形象<sup>[0]</sup>

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/avatar/kanban.png)

<sup>[0]：她很可爱，但还没有名字</sup>

## 桌面端配置指南

在浏览器中[点击链接](https://forum.bnbutech.cn/)进入论坛，并按照提示完成登陆即可<sup>[1]</sup>。

<sup>[1]：推荐使用的浏览器有 Edge、Firefox、Chrome 与 Safari，目前已知 Wechat 内置浏览器、360系浏览器 与 Quark 浏览器无法通过本网站的人机验证环节</sup>

对于每个板块的作用，详见[进阶配置](#进阶配置)

同时亦有适用于电脑端的软件如下表所示

Windows 端<sup>[2]</sup>：[点击链接查看](https://github.com/poppingmoon/aria/releases/download/v1.3.10/aria-v1.3.10-windows-x64.exe)

MacOS 端：[点击链接查看](https://apps.apple.com/sg/app/aria-for-misskey/id6499410880)

Linux 端<sup>[3]</sup>：[点击链接查看](https://github.com/poppingmoon/aria/releases/download/v1.3.10/aria-v1.3.10-linux-x64.tar.gz)

<sup>[2]：安装包版本为 1.3.10，如想下载最新的安装包，请前往 Github 发布页下载对应的安装包，[点击链接可以直达](https://github.com/poppingmoon/aria/releases)</sup>

<sup>[3]：考虑到 Linux 端有众多不同的系统，在此处给出的安装包为适用于 x64 系统的 tar.gz 安装包，安装包版本为 1.3.10，如果您的系统不能适配，或想下载最新的安装包，请前往 Github 发布页下载对应的安装包，[点击链接可以直达](https://github.com/poppingmoon/aria/releases)</sup>

软件配置教程详见[移动端软件配置指南](#移动端软件配置指南)

## 移动端软件配置指南

BNBU 论坛采用 Misskey 系统，拥有移动端软件以辅助使用，请前往应用商店下载 Aria for Misskey 来进行后续操作。

苹果端：[点击链接查看](https://apps.apple.com/sg/app/aria-for-misskey/id6499410880)

安卓端<sup>[4]</sup>：[点击链接查看](https://github.com/poppingmoon/aria/releases/download/v1.3.10/aria-v1.3.10-arm64-v8a.apk)

<sup>[4]：考虑到安卓端有众多不同的系统，在此处给出的安装包为适用于 arm64-v8a 系统的 apk 安装包，安装包版本为 1.3.10，如果您的系统不能适配，或想下载最新的安装包，请前往 Github 发布页下载对应的安装包，[点击链接可以直达](https://github.com/poppingmoon/aria/releases)</sup>

![Aria for Miskkey](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/1.jpg)

### 基本配置

#### 登陆账户

打开软件，您可以看见以下主页面：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/2.jpg)

点击左下方的圆形三栏标志进入设定界面：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/3.jpg)

再次点击登陆，就可以进入登陆界面，请在输入栏中**完整地**填入以下链接：https://forum.bnbutech.cn/

如下图所示：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/4.jpg)

##### 浏览器验证登陆

完成后点击验证账户，即可跳转至浏览器进行验证登陆，如下图所示：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/5.jpg)

<sup>[5]：第一次加载网站有一定概率会报错，此时刷新页面即可解决</sup>

<sup>[6]：推荐使用的浏览器有 Edge、Firefox、Chrome 与 Safari，目前已知 Wechat 内置浏览器、360系浏览器 与 Quark 浏览器无法通过本网站的人机验证环节，若您无法正常使用网站，请[点击链接](#访问令牌登陆)直达[密钥登陆](#访问令牌登陆)部分</sup>

按照指引完成登陆账户，并点选您想要登陆的账户后，会到达这个页面，此时点击 Accept 来接受协议：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/6.jpg)

全部完成后会提示您退出页面，如下图所示：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/7.jpg)

此时点击左上方的 "X" 键退出页面，可以看见如下页面，再次点击"已认证"即可完成登陆，如下图所示：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/8.jpg)

请注意，如果您是在软件内进行注册的，则需要单独去设置内的个人资料处来完成其他设置，但设置与否并不会影响您的后续使用。

##### 访问令牌登陆

返回到登陆页面的输入链接处，此处点击右上方的三点来选择访问令牌登陆，点击进入后您会发现第二栏即为输入访问令牌的位置。

获取密钥需要在网页端完成，在设置的搜索栏中输入 “API” 并检索，即可以看见第一条检索结果即为 “API”，点击进入后再次点击页面内的“生成访问令牌”选项，在新的页面中点击“启用全部”，命名后点击完成即可生成访问令牌，如下图所示：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/13.png)

接着将得到的访问令牌输入至对应的框内，再次点击登录即可完成登录。

需要特别注意，访问令牌是相当于个人密码一样重要的参数，在生成后应当妥善保管，以免被盗号。

#### 增加浏览标签

回到主页面，点击中间的添加标签：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/2.jpg)

再次点击右下角的添加标签：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/10.jpg)

如下图所示完成配置，标签类型应当选择"社交"：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/9.jpg)

完成后回到主页面，现在您可以看见所有人在公共区域以及各大频道内发布的所有帖子：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/11.jpg)

若想要添加更多标签卡来浏览请继续参考[进阶配置](#进阶配置)。

### 进阶配置

#### 栏目

首先从 BNBUForum 的基本栏目开始了解：

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/12.jpg)

| 栏目 | 作用 |
| :---------: | :---------- |
| 首页 | 相当于微博的“关注”分区，仅会推送自己与关注列表的贴文 |
| 本地 | 在可以看见本地服务器内所有人在公共区域内的贴文，但无法接收频道内的贴文 |
| 社交 | 在“本地”的基础上，可以额外接收到频道内的贴文 |
| 全局<sup>[7]</sup> | 在“社交”的基础上，可以接收到与本服务器进行联合的其他外部服务器的贴文 |
| 天线<sup>[8]</sup> | 可以额外设定筛选表达式或者筛选条件，并根据这些条件来推送特定的贴文 |
| 频道<sup>[9]</sup> | 相当于豆瓣小组，发布在频道内的贴文会在“社交”栏目以不同颜色标签来展示 |

当然，如上图所示，这些栏目可以在 Aria 内以设定标签卡的形式来展示在软件首页，而网页端则可以直接切换顶部导航栏来查看。

<sup>[7]：留意到本服务器业已关闭联邦功能，因此 BNBUForum 暂时不会与其他服务器联合，而 BNBUForum 内的全局功能亦不可以接收到其他服务器的消息，因此本栏目和“社交”栏目并无二致</sup>

<sup>[8]：若想在 Aria 内加入天线，则需要现在网页端设定好规则后才能添加</sup>

<sup>[9]：在 Aria 内，若想增加频道，则需要先收藏或者加入频道才能添加，且一次只能在标签卡内添加一个频道</sup>

![](https://cdn.jsdelivr.net/gh/PhoenixTechProject/HandbookPicBed/forum/screenshot/14.jpg)

#### 其他

1. 在更多里，BNBUForum 有内置的两个网页小游戏，并设置有排行榜
2. 看板娘很可爱，但她还没有名字
3. 我们建议您仔细阅读本服务器的守则并遵守当地法律法规
4. 我们建议您上传图片前进行压缩，以缓解服务器压力，您可以使用 [TinyPNG](https://tinypng.com/) 来进行处理
5. 有且仅允许您使用BNBU邮箱注册账号，违反该规定进行注册的账号将被永久封禁