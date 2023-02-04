(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{576:function(t,a,e){"use strict";e.r(a);var s=e(33),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660988804447-af5f039e-2938-4956-af4f-ed9cdf2e0ba3.png#clientId=u619b5875-959f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=106&id=ue4a731e4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=106&originWidth=300&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9774&status=done&style=none&taskId=ue3a5ac04-3794-40af-ad7d-c390ca94d37&title=&width=300",alt:"image.png"}}),t._v("\nnvm 是一个 "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node"),e("OutboundLink")],1),t._v(" 版本管理工具。\n当需要在不同项目中使用不同的 node 版本时，可以使用 nvm 管理 node 版本。")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("h3",{attrs:{id:"👩‍💻-mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#👩‍💻-mac"}},[t._v("#")]),t._v(" 👩‍💻 mac")]),t._v(" "),e("h4",{attrs:{id:"卸载-若有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载-若有"}},[t._v("#")]),t._v(" 卸载（若有）")]),t._v(" "),e("p",[t._v("首先卸载已安装的 node 以避免冲突")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -g --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除全局 node_modules 目录")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /usr/local/lib/node_modules\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除 node")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /usr/local/bin/node\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除全局 node 模块注册的软链")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../lib/node_modules/"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $9}'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("\n")])])]),e("h4",{attrs:{id:"下载-nvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-nvm"}},[t._v("#")]),t._v(" 下载 nvm")]),t._v(" "),e("p",[t._v("执行下列代码")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.1/install.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),e("h4",{attrs:{id:"环境变量配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置"}},[t._v("#")]),t._v(" 环境变量配置")]),t._v(" "),e("p",[t._v("安装完成如出现下列提示则说明缺少环境变量，可以直接复制代码安装完成之后，如果出现下面红框中内容，表示缺少环境配置，将红框中的内容复制，并放到命令行中运行\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660971346407-d6dc32a2-095b-40db-9d7c-a67f2d006655.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=124&id=xjFAO&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=1506&originalType=binary&ratio=1&rotation=0&showTitle=true&size=143234&status=done&style=stroke&taskId=uc5a24e73-791b-4f34-bd29-2976583463a&title=%E7%BC%BA%E5%B0%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E6%8F%90%E7%A4%BA&width=753",alt:"image.png",title:"缺少环境配置提示"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660971523227-64cd3838-0178-4291-85ab-0e68a7f6d1cd.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=50&id=u1ea2db3d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=100&originWidth=1492&originalType=binary&ratio=1&rotation=0&showTitle=true&size=32855&status=done&style=stroke&taskId=ue4d9b27c-6299-4735-b053-71954f16305&title=%E6%89%A7%E8%A1%8C%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%91%BD%E4%BB%A4&width=746",alt:"image.png",title:"执行配置环境命令"}})]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.nvm"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/bash_completion"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/bash_completion"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads")]),t._v("\n")])])]),e("p",[t._v("执行完毕，执行 "),e("code",[t._v("nvm -version")]),t._v(" 查看 "),e("code",[t._v("nvm")]),t._v(" 版本确认是否安装成功\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660971594549-0bfc0055-d01d-4b3d-b25c-088cb5d1fd17.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=36&id=uadc9dd16&margin=%5Bobject%20Object%5D&name=image.png&originHeight=72&originWidth=1486&originalType=binary&ratio=1&rotation=0&showTitle=true&size=10777&status=done&style=stroke&taskId=u167641b4-c461-4964-acad-5ba440ad344&title=%E6%9F%A5%E8%AF%A2%E7%89%88%E6%9C%AC%E5%A5%BD%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E5%B7%B2%E7%BB%8F%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F&width=743",alt:"image.png",title:"查询版本好确认是否已经安装成功"}})]),t._v(" "),e("h4",{attrs:{id:"常见错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[t._v("#")]),t._v(" 常见错误")]),t._v(" "),e("h5",{attrs:{id:"connection-refused"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-refused"}},[t._v("#")]),t._v(" connection refused")]),t._v(" "),e("h6",{attrs:{id:"报错信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报错信息"}},[t._v("#")]),t._v(" 报错信息")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("curl: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Failed to connect to raw.githubusercontent.com port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(": Connection refused\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970537330-2dcb73fa-51c0-4aed-9db6-d5c3b987cb02.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=DMHzM&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=1496&originalType=binary&ratio=1&rotation=0&showTitle=true&size=41635&status=done&style=stroke&taskId=u709afbc4-cae7-4184-a870-45e4a443813&title=%E7%BB%88%E7%AB%AF%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%E6%88%AA%E5%9B%BE",alt:"image.png",title:"终端错误信息提示截图"}})]),t._v(" "),e("h6",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[t._v("原因是 "),e("code",[t._v("raw.githubusercontent.com")]),t._v(" 这个域名被那啥了 🤔，我们需要找到这个域名的 IP 地址，然后把他添加到本地"),e("code",[t._v("hosts")]),t._v("文件中就可以了\n步骤：")]),t._v(" "),e("ol",[e("li",[t._v("打开网站"),e("a",{attrs:{href:"https://www.ipaddress.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ipaddress.com/"),e("OutboundLink")],1),t._v("，查询一下 raw.githubusercontent.com 对应的 IP 地址")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970350575-d54903c4-f172-42ea-8073-c282d379368e.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=118&id=u36095723&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=2060&originalType=url&ratio=1&rotation=0&showTitle=true&size=108183&status=done&style=stroke&taskId=u81561e87-e23a-4f56-9f60-8226365c9d3&title=%E6%9F%A5%E8%AF%A2%E5%88%B0%E7%9A%84%E5%9F%9F%E5%90%8D%E5%AF%B9%E5%BA%94%E7%9A%84%20ip%20%E5%9C%B0%E5%9D%80&width=500",alt:"image.png",title:"查询到的域名对应的 ip 地址"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("将 raw.githubusercontent.com 域名的 IP 地址 185.199.108.133（第一步中查询的 IP 地址）添加到系统的 hosts 文件中（文件路径/etc）")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970350253-a21b64cb-6adf-4621-a737-aae4dc958a30.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=0.7902&crop=1&from=paste&height=179&id=u18eee700&margin=%5Bobject%20Object%5D&name=image.png&originHeight=316&originWidth=882&originalType=url&ratio=1&rotation=0&showTitle=true&size=36839&status=done&style=stroke&taskId=u3ffcf228-7d4d-4052-a12f-8df700795a9&title=hosts%20%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84&width=500",alt:"image.png",title:"hosts 文件路径"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970350814-283b3f5f-632c-457e-8949-6989631a41d6.png#clientId=udb818cc2-0ccb-4&crop=0.0322&crop=0&crop=0.9678&crop=0.9178&from=paste&height=253&id=u5c5078ab&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1570&originalType=url&ratio=1&rotation=0&showTitle=true&size=172999&status=done&style=stroke&taskId=u3bd18864-158d-4c56-9718-5c92a7f0393&title=hosts%20%E6%96%87%E4%BB%B6&width=500",alt:"image.png",title:"hosts 文件"}}),t._v("\n不过这里要注意，这里你直接更改"),e("code",[t._v("hosts")]),t._v("，会告诉你没有权限。我们可以复制一份"),e("code",[t._v("hosts")]),t._v("到桌面，然后将 "),e("code",[t._v("185.199.108.133 raw.githubusercontent.com")]),t._v("这行添加到桌面的"),e("code",[t._v("hosts")]),t._v("文件中\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970815466-c8701143-c19f-4288-8d89-93bf9f0e5b1c.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=0.858&crop=0.938&from=paste&height=306&id=u7b22f369&margin=%5Bobject%20Object%5D&name=image.png&originHeight=836&originWidth=1364&originalType=binary&ratio=1&rotation=0&showTitle=true&size=362927&status=done&style=stroke&taskId=u9e210033-4ff1-4224-81ed-2ceb5f9e88b&title=%E6%97%A0%E6%B3%95%E7%9B%B4%E6%8E%A5%E4%BF%AE%E6%94%B9%EF%BC%8C%E9%9C%80%E8%A6%81%E5%A4%8D%E5%88%B6%E4%B8%80%E4%BB%BD%E5%88%B0%E6%A1%8C%E9%9D%A2%EF%BC%8C%E4%BF%AE%E6%94%B9%E5%AE%8C%E6%9B%BF%E6%8D%A2%E6%8E%89%20ect%20%E4%B8%AD%E7%9A%84%20hosts%20%E6%96%87%E4%BB%B6&width=500",alt:"image.png",title:"无法直接修改，需要复制一份到桌面，修改完替换掉 ect 中的 hosts 文件"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970764690-e4c3d34d-1818-4bb7-9f67-1f2c5f939775.png#clientId=udb818cc2-0ccb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=303&id=ude7f6950&margin=%5Bobject%20Object%5D&name=image.png&originHeight=456&originWidth=752&originalType=binary&ratio=1&rotation=0&showTitle=true&size=65270&status=done&style=stroke&taskId=u4f7a2457-f261-4d09-a8b7-6f18d8afbc5&title=%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%20hosts%20%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9&width=500",alt:"image.png",title:"修改后的 hosts 文件内容"}})]),t._v(" "),e("p",[t._v("然后再将这个"),e("code",[t._v("hosts")]),t._v("文件移动到"),e("code",[t._v("/etc")]),t._v("文件夹下，选择替换文件，这时会弹出“访达”想要移动“hosts”的提示，输入电脑密码允许即可\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660970352111-a6583709-7562-436b-a6a3-fd6e3a4e6b61.png#clientId=udb818cc2-0ccb-4&crop=0.3338&crop=0.082&crop=1&crop=0.8642&from=paste&height=286&id=u77a977c4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=736&originWidth=1286&originalType=url&ratio=1&rotation=0&showTitle=true&size=237919&status=done&style=stroke&taskId=u50dde89a-64aa-4f27-aec5-c79df779cae&title=%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%8E%9F%E6%9C%89%E7%9A%84%20hosts%20%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF&width=500",alt:"image.png",title:"替换掉原有的 hosts 文件即可"}})]),t._v(" "),e("h3",{attrs:{id:"💻-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#💻-windows"}},[t._v("#")]),t._v(" 💻 windows")]),t._v(" "),e("h4",{attrs:{id:"卸载-node-环境-若有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载-node-环境-若有"}},[t._v("#")]),t._v(" 卸载 node 环境（若有）")]),t._v(" "),e("h4",{attrs:{id:"下载-nvm-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-nvm-2"}},[t._v("#")]),t._v(" 下载 nvm")]),t._v(" "),e("p",[t._v("去"),e("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("下载 "),e("code",[t._v("mvn-setup.zip")]),t._v(" 安装包，解压，得到"),e("code",[t._v(".exe")]),t._v("文件，或者直接下载"),e("code",[t._v("mvn-setup.exe")]),t._v("文件")]),t._v(" "),e("blockquote",[e("p",[t._v("切记不要安装没有验证版本，推荐安装稳定版")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660986419321-8619decc-bbf2-4636-b9d6-19c8e5d14942.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=351&id=udb051e16&margin=%5Bobject%20Object%5D&name=image.png&originHeight=702&originWidth=1792&originalType=binary&ratio=1&rotation=0&showTitle=true&size=119598&status=done&style=stroke&taskId=u1ad7f342-3753-4439-811c-6d8f1534ae6&title=%E5%AE%89%E8%A3%85%E5%8C%85%E5%88%97%E8%A1%A8&width=896",alt:"image.png",title:"安装包列表"}}),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660986801947-325b688a-9c74-4a6a-b1fd-e5a1f4d62df6.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=292&id=u9dd647d8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=111&originWidth=114&originalType=binary&ratio=1&rotation=0&showTitle=true&size=20524&status=done&style=stroke&taskId=ua5c774c3-a4f7-473e-af36-c3481c48340&title=nvm%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F&width=300",alt:"image.png",title:"nvm 安装程序"}})]),t._v(" "),e("h4",{attrs:{id:"安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("ol",[e("li",[t._v("同意安装条款")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660988461170-40f5f4a1-a8e8-4317-8458-19ea6279a83f.png#clientId=ua24510d1-c74b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=u78d653f2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=161048&status=done&style=stroke&taskId=u31760621-3c95-4cb1-afe6-1ebee4c9193&title=&width=500",alt:"image.png"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("选择安装路径")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660986943814-4fe2bdea-e74f-4e41-9613-5bbab4eaf375.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=ua74af1b8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30232&status=done&style=stroke&taskId=u1091b9ac-4483-4c8f-a522-d483ecf9bb2&title=&width=500",alt:"image.png"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("设置 "),e("code",[t._v("nvm")]),t._v(" 的"),e("code",[t._v("path")]),t._v("路径，即"),e("strong",[t._v("切换 node 版本时使用的路径")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660986977456-22f2fa86-95d3-4554-860f-92faa1f2f3ce.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=u4d31929b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22556&status=done&style=stroke&taskId=u3dd10315-2bed-4664-bda0-25f030445e5&title=&width=500",alt:"image.png"}})]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("开始安装")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/244005/1660987025717-40d20662-1dd0-4464-9600-46b67e88dd12.png#clientId=uffdcd5fb-6e24-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=387&id=u7f7f250d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=503&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21636&status=done&style=stroke&taskId=u531e5fb5-f850-47d0-a2a8-e7c70c082dd&title=&width=500",alt:"image.png"}})]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("进入安装根目录"),e("code",[t._v("(D:\\nvm)")]),t._v("，该目录下打开命令行，执行"),e("code",[t._v("nvm -v")]),t._v("没有报"),e("code",[t._v("nvm")]),t._v("命令不存在表示安装成功")]),t._v(" "),e("li",[t._v("配置淘宝镜像，该目录下执行：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("nvm node_mirror https://npm.taobao.org/mirrors/node/，\nnvm node_mirror npm_mirror: https://npm.taobao.org/mirrors/npm/\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("重启电脑，在安装目录之外随便打开一个命令行，此时全局应该可以使用 nvm 命令了")]),t._v(" "),e("li",[t._v("安装 "),e("code",[t._v("cnpm")]),t._v("，提升下载模块速度")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g cnpm –registry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n")])])]),e("h4",{attrs:{id:"常见错误-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见错误-2"}},[t._v("#")]),t._v(" 常见错误")]),t._v(" "),e("h5",{attrs:{id:"链接被关闭"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链接被关闭"}},[t._v("#")]),t._v(" 链接被关闭")]),t._v(" "),e("h6",{attrs:{id:"报错信息-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报错信息-2"}},[t._v("#")]),t._v(" 报错信息")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Could not retrieve https://nodejs.org/dist/latest/SHASUMS256.txt.Get https://nodejs.org/dist/latest/SHASUMS256.txt: net/http: TLS handshake "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v("\n")])])]),e("h6",{attrs:{id:"解决方案-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[t._v("这种错，说明出现远程连接被关闭的问题，这是由于国内网络限制导致的解决方法:可以将"),e("code",[t._v("nvm")]),t._v("中"),e("code",[t._v("node")]),t._v("和那"),e("code",[t._v("npm")]),t._v("设置到国内源,在"),e("code",[t._v("nvm")]),t._v("的安装路径下找到"),e("code",[t._v("settings.txt")]),t._v("(如没有，可新建一个)打开添加如下代码：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("node_mirror:npm.taobao.org/mirrors/node/\nnpm_mirror:npm.taobao.org/mirrors/npm/\n")])])]),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("p",[t._v("可以通过终端执行 "),e("code",[t._v("nvm")]),t._v(" 来查看，其中常用命令为：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载指定版本")]),t._v("\nnvm uninstall 【版本号】\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有已经安装的版本(nvm list)")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看网络上可以安装的版本")]),t._v("\nnvm list remote\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装指定版本，可模糊安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如安装 v17.4.0，既可以 nvm install v17.4.0，又可以 nvm install 17.4")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" x.x.x\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换 node 版本")]),t._v("\nnvm use x.x.x\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前正在使用的node版本")]),t._v("\nnvm current\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换指定版本号的 node 为默认版本,每次新建的命令行中就是默认的版本了")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" default x.x.x\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用最新稳定版本的 node")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" stable\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);