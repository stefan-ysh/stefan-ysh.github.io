---
title: nvm 的安装
date: 2022-09-27 23:36:39
permalink: /pages/35870b/
sidebar: auto
categories:
  - nvm
---

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660988804447-af5f039e-2938-4956-af4f-ed9cdf2e0ba3.png#clientId=u619b5875-959f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=106&id=ue4a731e4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=106&originWidth=300&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9774&status=done&style=none&taskId=ue3a5ac04-3794-40af-ad7d-c390ca94d37&title=&width=300)
nvm 是一个 [node](https://nodejs.org/en/) 版本管理工具。
当需要在不同项目中使用不同的 node 版本时，可以使用 nvm 管理 node 版本。

## 安装

### 👩‍💻 mac

#### 卸载（若有）

首先卸载已安装的 node 以避免冲突

```shell
# 查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装

npm ls -g --depth=0

# 删除全局 node_modules 目录

sudo rm -rf /usr/local/lib/node_modules

# 删除 node

sudo rm /usr/local/bin/node

# 删除全局 node 模块注册的软链

cd /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm
```

#### 下载 nvm

执行下列代码

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.1/install.sh | bash
```

#### 环境变量配置

安装完成如出现下列提示则说明缺少环境变量，可以直接复制代码安装完成之后，如果出现下面红框中内容，表示缺少环境配置，将红框中的内容复制，并放到命令行中运行
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660971346407-d6dc32a2-095b-40db-9d7c-a67f2d006655.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=124&id=xjFAO&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=1506&originalType=binary&ratio=1&rotation=0&showTitle=true&size=143234&status=done&style=stroke&taskId=uc5a24e73-791b-4f34-bd29-2976583463a&title=%E7%BC%BA%E5%B0%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E6%8F%90%E7%A4%BA&width=753 "缺少环境配置提示")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660971523227-64cd3838-0178-4291-85ab-0e68a7f6d1cd.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=50&id=u1ea2db3d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=100&originWidth=1492&originalType=binary&ratio=1&rotation=0&showTitle=true&size=32855&status=done&style=stroke&taskId=ue4d9b27c-6299-4735-b053-71954f16305&title=%E6%89%A7%E8%A1%8C%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%91%BD%E4%BB%A4&width=746 "执行配置环境命令")

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads
```

执行完毕，执行 `nvm -version` 查看 `nvm` 版本确认是否安装成功
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660971594549-0bfc0055-d01d-4b3d-b25c-088cb5d1fd17.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=36&id=uadc9dd16&margin=%5Bobject%20Object%5D&name=image.png&originHeight=72&originWidth=1486&originalType=binary&ratio=1&rotation=0&showTitle=true&size=10777&status=done&style=stroke&taskId=u167641b4-c461-4964-acad-5ba440ad344&title=%E6%9F%A5%E8%AF%A2%E7%89%88%E6%9C%AC%E5%A5%BD%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E5%B7%B2%E7%BB%8F%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F&width=743 "查询版本好确认是否已经安装成功")

#### 常见错误

##### connection refused

###### 报错信息

```shell
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970537330-2dcb73fa-51c0-4aed-9db6-d5c3b987cb02.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=DMHzM&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=1496&originalType=binary&ratio=1&rotation=0&showTitle=true&size=41635&status=done&style=stroke&taskId=u709afbc4-cae7-4184-a870-45e4a443813&title=%E7%BB%88%E7%AB%AF%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%E6%88%AA%E5%9B%BE "终端错误信息提示截图")

###### 解决方案

原因是 `raw.githubusercontent.com` 这个域名被那啥了 🤔，我们需要找到这个域名的 IP 地址，然后把他添加到本地`hosts`文件中就可以了
步骤：

1. 打开网站[https://www.ipaddress.com/](https://www.ipaddress.com/)，查询一下 raw.githubusercontent.com 对应的 IP 地址

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970350575-d54903c4-f172-42ea-8073-c282d379368e.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=118&id=u36095723&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=2060&originalType=url&ratio=1&rotation=0&showTitle=true&size=108183&status=done&style=stroke&taskId=u81561e87-e23a-4f56-9f60-8226365c9d3&title=%E6%9F%A5%E8%AF%A2%E5%88%B0%E7%9A%84%E5%9F%9F%E5%90%8D%E5%AF%B9%E5%BA%94%E7%9A%84%20ip%20%E5%9C%B0%E5%9D%80&width=500 "查询到的域名对应的 ip 地址")

2. 将 raw.githubusercontent.com 域名的 IP 地址 185.199.108.133（第一步中查询的 IP 地址）添加到系统的 hosts 文件中（文件路径/etc）

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970350253-a21b64cb-6adf-4621-a737-aae4dc958a30.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=0.7902&crop=1&from=paste&height=179&id=u18eee700&margin=%5Bobject%20Object%5D&name=image.png&originHeight=316&originWidth=882&originalType=url&ratio=1&rotation=0&showTitle=true&size=36839&status=done&style=stroke&taskId=u3ffcf228-7d4d-4052-a12f-8df700795a9&title=hosts%20%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84&width=500 "hosts 文件路径")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970350814-283b3f5f-632c-457e-8949-6989631a41d6.png#clientId=udb818cc2-0ccb-4&crop=0.0322&crop=0&crop=0.9678&crop=0.9178&from=paste&height=253&id=u5c5078ab&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1570&originalType=url&ratio=1&rotation=0&showTitle=true&size=172999&status=done&style=stroke&taskId=u3bd18864-158d-4c56-9718-5c92a7f0393&title=hosts%20%E6%96%87%E4%BB%B6&width=500 "hosts 文件")
不过这里要注意，这里你直接更改`hosts`，会告诉你没有权限。我们可以复制一份`hosts`到桌面，然后将 `185.199.108.133 raw.githubusercontent.com`这行添加到桌面的`hosts`文件中
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970815466-c8701143-c19f-4288-8d89-93bf9f0e5b1c.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=0.858&crop=0.938&from=paste&height=306&id=u7b22f369&margin=%5Bobject%20Object%5D&name=image.png&originHeight=836&originWidth=1364&originalType=binary&ratio=1&rotation=0&showTitle=true&size=362927&status=done&style=stroke&taskId=u9e210033-4ff1-4224-81ed-2ceb5f9e88b&title=%E6%97%A0%E6%B3%95%E7%9B%B4%E6%8E%A5%E4%BF%AE%E6%94%B9%EF%BC%8C%E9%9C%80%E8%A6%81%E5%A4%8D%E5%88%B6%E4%B8%80%E4%BB%BD%E5%88%B0%E6%A1%8C%E9%9D%A2%EF%BC%8C%E4%BF%AE%E6%94%B9%E5%AE%8C%E6%9B%BF%E6%8D%A2%E6%8E%89%20ect%20%E4%B8%AD%E7%9A%84%20hosts%20%E6%96%87%E4%BB%B6&width=500 "无法直接修改，需要复制一份到桌面，修改完替换掉 ect 中的 hosts 文件")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970764690-e4c3d34d-1818-4bb7-9f67-1f2c5f939775.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=303&id=ude7f6950&margin=%5Bobject%20Object%5D&name=image.png&originHeight=456&originWidth=752&originalType=binary&ratio=1&rotation=0&showTitle=true&size=65270&status=done&style=stroke&taskId=u4f7a2457-f261-4d09-a8b7-6f18d8afbc5&title=%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%20hosts%20%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9&width=500 "修改后的 hosts 文件内容")

然后再将这个`hosts`文件移动到`/etc`文件夹下，选择替换文件，这时会弹出“访达”想要移动“hosts”的提示，输入电脑密码允许即可
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660970352111-a6583709-7562-436b-a6a3-fd6e3a4e6b61.png#clientId=udb818cc2-0ccb-4&crop=0.3338&crop=0.082&crop=1&crop=0.8642&from=paste&height=286&id=u77a977c4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=736&originWidth=1286&originalType=url&ratio=1&rotation=0&showTitle=true&size=237919&status=done&style=stroke&taskId=u50dde89a-64aa-4f27-aec5-c79df779cae&title=%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%8E%9F%E6%9C%89%E7%9A%84%20hosts%20%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF&width=500 "替换掉原有的 hosts 文件即可")

### 💻 windows

#### 卸载 node 环境（若有）

#### 下载 nvm

去[官网](https://github.com/coreybutler/nvm-windows/releases)下载 `mvn-setup.zip` 安装包，解压，得到`.exe`文件，或者直接下载`mvn-setup.exe`文件

> 切记不要安装没有验证版本，推荐安装稳定版

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660986419321-8619decc-bbf2-4636-b9d6-19c8e5d14942.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=351&id=udb051e16&margin=%5Bobject%20Object%5D&name=image.png&originHeight=702&originWidth=1792&originalType=binary&ratio=1&rotation=0&showTitle=true&size=119598&status=done&style=stroke&taskId=u1ad7f342-3753-4439-811c-6d8f1534ae6&title=%E5%AE%89%E8%A3%85%E5%8C%85%E5%88%97%E8%A1%A8&width=896 "安装包列表")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660986801947-325b688a-9c74-4a6a-b1fd-e5a1f4d62df6.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=292&id=u9dd647d8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=111&originWidth=114&originalType=binary&ratio=1&rotation=0&showTitle=true&size=20524&status=done&style=stroke&taskId=ua5c774c3-a4f7-473e-af36-c3481c48340&title=nvm%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F&width=300 "nvm 安装程序")

#### 安装

1. 同意安装条款

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660988461170-40f5f4a1-a8e8-4317-8458-19ea6279a83f.png#clientId=ua24510d1-c74b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=u78d653f2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=161048&status=done&style=stroke&taskId=u31760621-3c95-4cb1-afe6-1ebee4c9193&title=&width=500)

2. 选择安装路径

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660986943814-4fe2bdea-e74f-4e41-9613-5bbab4eaf375.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=ua74af1b8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30232&status=done&style=stroke&taskId=u1091b9ac-4483-4c8f-a522-d483ecf9bb2&title=&width=500)

3. 设置 `nvm` 的`path`路径，即**切换 node 版本时使用的路径**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660986977456-22f2fa86-95d3-4554-860f-92faa1f2f3ce.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=u4d31929b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22556&status=done&style=stroke&taskId=u3dd10315-2bed-4664-bda0-25f030445e5&title=&width=500)

4. 开始安装

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660987025717-40d20662-1dd0-4464-9600-46b67e88dd12.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=u7f7f250d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21636&status=done&style=stroke&taskId=u531e5fb5-f850-47d0-a2a8-e7c70c082dd&title=&width=500)

5. 进入安装根目录`(D:\nvm)`，该目录下打开命令行，执行`nvm -v`没有报`nvm`命令不存在表示安装成功
6. 配置淘宝镜像，该目录下执行：

```shell
nvm node_mirror https://npm.taobao.org/mirrors/node/，
nvm node_mirror npm_mirror: https://npm.taobao.org/mirrors/npm/
```

7. 重启电脑，在安装目录之外随便打开一个命令行，此时全局应该可以使用 nvm 命令了
8. 安装 `cnpm`，提升下载模块速度

```shell
npm install -g cnpm –registry=https://registry.npm.taobao.org
```

#### 常见错误

##### 链接被关闭

###### 报错信息

```shell
Could not retrieve https://nodejs.org/dist/latest/SHASUMS256.txt.Get https://nodejs.org/dist/latest/SHASUMS256.txt: net/http: TLS handshake timeout
```

###### 解决方案

这种错，说明出现远程连接被关闭的问题，这是由于国内网络限制导致的解决方法:可以将`nvm`中`node`和那`npm`设置到国内源,在`nvm`的安装路径下找到`settings.txt`(如没有，可新建一个)打开添加如下代码：

```shell
node_mirror:npm.taobao.org/mirrors/node/
npm_mirror:npm.taobao.org/mirrors/npm/
```

## 常用命令

可以通过终端执行 `nvm` 来查看，其中常用命令为：

```shell
# 卸载指定版本
nvm uninstall 【版本号】

# 查看所有已经安装的版本(nvm list)
nvm ls

# 查看网络上可以安装的版本
nvm list remote

# 安装指定版本，可模糊安装
# 如安装 v17.4.0，既可以 nvm install v17.4.0，又可以 nvm install 17.4
nvm install x.x.x

# 切换 node 版本
nvm use x.x.x

# 查看当前正在使用的node版本
nvm current

# 切换指定版本号的 node 为默认版本,每次新建的命令行中就是默认的版本了
nvm alias default x.x.x

# 使用最新稳定版本的 node
nvm install stable
```
