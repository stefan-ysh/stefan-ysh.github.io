(function(e){function t(t){for(var i,s,c=t[0],o=t[1],l=t[2],u=0,h=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"18c1":function(e,t,n){"use strict";n("fae2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MobileTree",{attrs:{orgData:e.treeData,roleData:e.roleData,label:"name",isMultiple:e.isMultiple,selectedList:[]},on:{confirm:e.childSubmit,cancel:e.childCancel,change:e.clickItem,switchMultiple:e.changeMultipleOrNot}})],1)},r=[],s=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mobile-org-tree",staticStyle:{position:"absolute",inset:"10px",padding:"10px"},on:{touchstart:e.gtouchstart,touchmove:e.gtouchmove,touchend:e.gtouchend}},[n("div",{staticClass:"search bar7",staticStyle:{display:"flex",height:"40px","justify-content":"space-between","margin-bottom":"10px"}},[n("form",{staticStyle:{height:"100%",width:"100%",display:"flex",position:"relative","align-items":"center"},attrs:{action:"javascript:return true"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],staticStyle:{position:"relative",width:"100%",height:"100%","border-radius":"25px",border:"1px solid #f7ecec","text-align":"center"},attrs:{type:"search",placeholder:"搜索"},domProps:{value:e.searchKey},on:{input:[function(t){t.target.composing||(e.searchKey=t.target.value)},e.handleSearch]}}),e.searchKey?n("span",{staticClass:"clear-search-key-btn",staticStyle:{"line-height":"15px",position:"absolute",right:"0px","margin-right":"10px",width:"15px",height:"15px","border-radius":"50%","text-align":"center",background:"rgb(214 190 190)",color:"#fff","font-weight":"600"},on:{click:e.clearSearchKey}},[e._v("×")]):e._e()])]),n("div",{staticClass:"org-tree"},[n("div",{staticClass:"org-tree__current",staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",{staticClass:"org-tree__current__nav"},[n("span",{on:{click:function(t){return e.handleCurrentListClick(-1)}}},[e._v("全部")]),e._l(e.currentData,(function(t,i){return n("span",{key:i,on:{click:function(t){return e.handleCurrentListClick(i)}}},[e._v(" "+e._s(t[e.label])+" ")])}))],2),n("div",{staticClass:"org-tree__current__switchBtn"},[n("button",{on:{click:e.changeRoleOrOrg}},[e._v(" "+e._s("org"==e.showType?"角色":"组织")+" ")])])]),n("div",{staticClass:"org-tree__warp"},[n("ul",[e.isLoading?[e._m(0)]:e.renderData.length>0?e._l(e.renderData,(function(t){return n("li",{key:t[e.nodeKey],staticClass:"org-tree__item"},[n("input",{staticClass:"tui-checkbox",attrs:{type:"checkbox",name:"check"},domProps:{checked:e.isChecked(t)},on:{click:function(n){return e.handleItemClick(t)}}}),n("span",{staticClass:"org-tree__item-text",on:{click:function(n){return e.handleItemClick(t)}}},[e._v(" "+e._s(t[e.label])+" ")]),"user"!==t.type?n("span",{staticClass:"org-tree__item-child",on:{click:function(n){return e.handleItemChildClick(t)}}},[e._v(" > ")]):e._e()])})):[e._m(1)]],2)]),n("div",{staticStyle:{position:"absolute",bottom:"0",left:"10px",right:"10px"}},[n("div",{staticClass:"selected-item-list"},e._l(e.selectedItem,(function(t,i){return n("span",{key:i,staticClass:"seleted-item"},[e._v(" "+e._s(t[e.label])+" "),n("i",{staticClass:"close-icon",on:{click:function(n){return e.delItem(t)}}})])})),0),n("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0.5rem 0","border-top":"1px solid rgb(247, 236, 236)"}},[e.selectedItem.length?e._e():n("span",[e._v("暂无选择")]),e.selectedItem.length?n("span",[e._v("已选择 "+e._s(e.selectedItem.length)+" 项")]):e._e(),n("div",[n("span",{staticClass:"submit-btn",staticStyle:{width:"40px","margin-right":"10px",padding:"0",color:"#3c6eb7","text-align":"center"},on:{click:e.handleCancel}},[e._v("取消")]),n("span",{staticClass:"submit-btn",staticStyle:{width:"40px",padding:"0",color:"#3c6eb7","text-align":"center"},on:{click:e.handleSubmit}},[e._v("提交")])])])])])])}),c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"empty"},[n("small",[e._v("数据加载中...")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"empty"},[n("small",[e._v("暂无数据")])])}],o=(n("7db0"),n("4de4"),n("fb6a"),n("159b"),n("498a"),n("d3b7"),n("bc3a")),l=n.n(o),d=l.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASE_URL,timeout:1e4});d.interceptors.request.use((function(e){e.headers["Content-Type"]="application/json;charset=UTF-8",e.headers["Accept"]="application/json";var t=sessionStorage.getItem("loginToken")||null;return t&&(e.headers["Token"]=t),e}),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){var t=e.data;return t.success,t}),(function(e){return Promise.reject(e)}));var u={name:"MobileTree",props:{orgData:{type:Array,default:function(){return[]}},roleData:{type:Array,default:function(){return[]}},label:{type:String,default:"name"},nodeKey:{type:String,default:"id"},children:{type:String,default:"children"},isMultiple:{type:Boolean,default:!0},selectedList:{type:Array,default:[]}},data:function(){return{isLoading:!1,currentData:[],selectedItem:[{id:"partyMember",name:"党员",parent:"",type:"role"}],showType:"role",renderData:[],searchKey:"",startX:""}},mounted:function(){Array.isArray(this.selectedList)&&this.selectedList.length>0&&(this.selectedItem=this.selectedList),this.renderData=this.orgData},methods:{gtouchstart:function(e){window.console.log("手指按下啦",e),this.startX=e.targetTouches[0].clientX},gtouchmove:function(e){},gtouchend:function(e){window.console.log("手指松开啦",e),e.changedTouches[0].clientX-this.startX>=100&&this.currentData.length&&(console.log("移动距离大于100"),this.handleCurrentListClick(this.currentData.length-2))},changeRoleOrOrg:function(){switch(this.showType){case"org":this.showType="role",this.renderData=this.orgData,this.currentData=[];break;case"role":this.showType="org",this.renderData=this.roleData,this.currentData=[];default:break}},isChecked:function(e){return this.selectedItem.find((function(t){return t.id==e.id}))},handleItemClick:function(e){if(console.log("是否多选：",this.isMultiple),console.log(this.selectedItem),this.isMultiple){var t=JSON.parse(JSON.stringify(e)),n=this.selectedItem.find((function(e){return t.id==e.id}));n?this.selectedItem=this.selectedItem.filter((function(e){return e.id!==t.id})):this.selectedItem.push(t)}else this.selectedItem=[],this.selectedItem.push(e);this.$emit("change",e)},handleItemChildClick:function(e){this.showType,console.log(e),this.currentData.push(e),e[this.children]?this.renderFn(e):this.renderData=[]},renderFn:function(e){if("role"==this.showType){var t=this.flatten(this.orgData);console.log(t);var n=t.find((function(t){return t.id==e.id}));this.renderData=n.children}else{var i=this.flatten(this.roleData);console.log(i);var a=i.find((function(t){return t.id==e.id}));this.renderData=a.children}},flatten:function(e){var t=this;return e.reduce((function(e,n){return e.concat(n,Array.isArray(n.children)?t.flatten(n.children):[])}),[])},handleCurrentListClick:function(e){if(e>-1){var t=this.currentData[e];t[this.children]&&this.renderFn(t)}else"org"===this.showType?this.renderData=this.roleData:this.renderData=this.orgData;this.currentData=e>-1?this.currentData.slice(0,e+1):[]},delItem:function(e){console.log(e),this.selectedItem=this.selectedItem.filter((function(t){return t.id!==e.id}))},handleSubmit:function(){if(this.selectedItem.length){var e={orgs:[],roles:[],users:[]};this.selectedItem.forEach((function(t){"org"==t.type?e.orgs.push(t.id):"role"==t.type?e.roles.push(t.id):e.users.push(t.id)})),this.$emit("confirm",e)}else alert("未做任何选择，请选择后重试。")},handleCancel:function(){this.$emit("cancel")},handleSearch:function(e){this.searchKey;this.searchKey.trim()?(this.isLoading=!0,13==e.keyCode&&e.preventDefault()):this.isLoading=!1},clearSearchKey:function(){this.isLoading=!1,this.searchKey=""}},created:function(){}},h=u,p=(n("df2b"),n("18c1"),n("2877")),m=Object(p["a"])(h,s,c,!1,null,"5decad97",null),g=m.exports,f=n("5ed5"),y={name:"App",components:{MobileTree:g},data:function(){return{treeData:f,isMultiple:!0,roleData:[{id:"402886097b37f06f017b3813fd65000c",name:"党员",type:"",children:[{id:"Hai Zhang",name:"张海",type:"user"},{id:"Qiang Wang",name:"王强",type:"user"}]},{id:"402886097b1561a15a7b3813fd65065s",name:"团员",type:""},{id:"402886097b1561a1556asd5d56aa65sd",name:"其他",type:""}],orgData:[{departmentList:[{id:"402886097b37f06f017b3813fd65000c",name:"系统运营",parentId:"1",childrenData:[]},{}],useridList:[{id:"402886097b37f06f017b3813fd65000a",name:"张三",icon:"iconUrl",parentId:"1"},{}]},{departmentList:[{id:"402886097b37f06f017b3813fd65000c",name:"系统运营",parentId:"1",childrenData:[]},{}],useridList:[{id:"402886097b37f06f017b3813fd65000a",name:"张三",icon:"iconUrl",parentId:"1"},{}]}]}},methods:{clickItem:function(e){console.log("子组件传来的值",e,"message from app")},changeMultipleOrNot:function(e){this.isMultiple=e},childSubmit:function(e){alert("当前选中：\n部门id ".concat(e.orgs.length,"个：[").concat(e.orgs,"]；\n角色id ").concat(e.roles.length,"个：[").concat(e.roles,"]；\n人员id ").concat(e.users.length,"个：[").concat(e.users,"]")),console.log("子组件确认",e)},childCancel:function(e){alert("点击了取消"),console.log("子组件取消")}}},b=y,v=(n("034f"),Object(p["a"])(b,a,r,!1,null,null,null)),_=v.exports,C=n("363c"),D=n.n(C);i["a"].use(D.a),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(_)}}).$mount("#app")},"5ed5":function(e){e.exports=JSON.parse('[{"id":"HR","name":"人事部","type":"org","children":[{"id":"Hai Zhang","name":"张海","type":"user"},{"id":"Qiang Wang","name":"王强","type":"user"},{"id":"RecruitmentDept","name":"招聘组","type":"org","children":[{"id":"Shumei Xing","name":"邢淑梅","type":"user"}]},{"id":"Trainning","name":"培训组","type":"org","children":[{"id":"Changsheng Zhao","name":"赵长胜","type":"user"}]},{"id":"Nobody","name":"无人组","type":"org"}]},{"id":"Finance","name":"财务部","type":"org","children":[{"id":"Xiaoshan Liang","name":"梁晓珊","type":"user"},{"id":"Keju Zhao","name":"赵科举","type":"user"},{"id":"Weijia Yin","name":"尹维嘉","type":"user"}]},{"id":"R&D","name":"研发部","type":"org","children":[{"id":"Changli Liu","name":"刘长利","type":"user"},{"id":"Yutian Zhao","name":"赵玉田","type":"user"},{"id":"Frontend","name":"前端组","type":"org","children":[{"id":"Chuang Wang","name":"王闯","type":"user"},{"id":"Da Guo","name":"郭达","type":"user"},{"id":"Xiaoyue Zheng","name":"郑晓月","type":"user"},{"id":"Yihan Wang","name":"王一涵","type":"user"},{"id":"Xiaoshuai Zhao","name":"赵小帅","type":"user"}]},{"id":"Backend","name":"后端组","type":"org","children":[{"id":"Dali Liu","name":"刘大力","type":"user"},{"id":"Yuxuan Zhao","name":"赵宇轩","type":"user"},{"id":"Cheng Chen","name":"陈成","type":"user"},{"id":"Baode Wei","name":"魏宝德","type":"user"},{"id":"Backend_01","name":"后端组1","children":[{"id":"Tester","name":"后端组1成员","type":"user"}]}]}]},{"id":"market","name":"市场部","type":"org","children":[{"id":"NewMediaOperation","name":"新媒体运营组","type":"org","children":[{"id":"Deli Zhao","name":"赵德利","type":"user"},{"id":"Baocai Wang","name":"王宝才","type":"user"}]},{"id":"CityDocing","name":"城市对接组","type":"org","children":[{"id":"Liang Wang","name":"王亮","type":"user"},{"id":"Lili Shen","name":"沈丽丽","type":"user"},{"id":"Chunlai Zhao","name":"赵春来","type":"user"},{"id":"Zihan Wang","name":"王子涵","type":"user"}]},{"id":"Planning","name":"策划组","type":"org","children":[{"id":"Guiping Chen","name":"陈桂平","type":"user"},{"id":"Yishui Liu","name":"刘一水","type":"user"},{"id":"Jinsheng Zhao","name":"赵金生","type":"user"}]}]},{"id":"Design","name":"设计部","type":"org","children":[{"id":"OriginalPainting","name":"原画组","type":"org","children":[{"id":"Yang Wang","name":"汪洋","type":"user"},{"id":"Zihao Zhao","name":"赵子豪","type":"user"},{"id":"Wang Liu","name":"刘旺","type":"user"},{"id":"Haisheng Zhang","name":"张海生","type":"user"},{"id":"Guiqiu Wang","name":"王桂秋","type":"user"},{"id":"Lili Chen","name":"陈丽丽","type":"user"},{"id":"Liguo Wu","name":"吴立国","type":"user"}]},{"id":"5.2","type":"org","name":"特效组","children":[{"id":"Hao Qian","name":"钱浩","type":"user"},{"id":"Feng Zhao","name":"赵峰","type":"user"},{"id":"Yang Liu","name":"刘洋","type":"user"},{"id":"Yusen Xing","name":"邢育森","type":"user"},{"id":"Qiu Yan","name":"燕秋","type":"user"}]},{"id":"Programming","name":"程序组","type":"org","children":[{"id":"Liang Zhao","name":"赵亮","type":"user"},{"id":"De Liu","name":"刘德","type":"user"},{"id":"MiNG Yang","name":"杨明","type":"user"},{"id":"Na Li","name":"李娜","type":"user"},{"id":"Fei Wu","name":"吴飞","type":"user"}]},{"id":"Action","name":"动作组","type":"org","children":[{"id":"Xiaolong Chen","name":"陈小龙","type":"user"},{"id":"Daqiang Zhou","name":"周大强","type":"user"},{"id":"Wei Wu","name":"吴伟","type":"user"},{"id":"Song Chen","name":"陈松","type":"user"}]},{"id":"Hai Sun","name":"孙海","type":"user"}]},{"id":"Lizhi Zhang","name":"张立志","type":"user","children":null}]')},"85ec":function(e,t,n){},d81a:function(e,t,n){},df2b:function(e,t,n){"use strict";n("d81a")},fae2:function(e,t,n){}});