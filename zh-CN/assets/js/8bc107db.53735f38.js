"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[27176],{3905:function(e,n,l){l.d(n,{Zo:function(){return c},kt:function(){return d}});var t=l(67294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function a(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function s(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):a(a({},n),e)),l},c=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(l),d=r,k=h["".concat(o,".").concat(d)]||h[d]||p[d]||i;return l?t.createElement(k,a(a({ref:n},c),{},{components:l})):t.createElement(k,a({ref:n},c))}));function d(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=l.length,a=new Array(i);a[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=l[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,l)}h.displayName="MDXCreateElement"},60427:function(e,n,l){l.r(n),l.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var t=l(87462),r=l(63366),i=(l(67294),l(3905)),a=["components"],s={title:"Shell \u5f15\u64ce",sidebar_position:6},o=void 0,u={unversionedId:"engine-usage/shell",id:"version-1.1.0/engine-usage/shell",isDocsHomePage:!1,title:"Shell \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cShell\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/engine-usage/shell.md",sourceDirName:"engine-usage",slug:"/engine-usage/shell",permalink:"/zh-CN/docs/1.1.0/engine-usage/shell",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/engine-usage/shell.md",tags:[],version:"1.1.0",sidebarPosition:6,frontMatter:{title:"Shell \u5f15\u64ce",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Python \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.0/engine-usage/python"},next:{title:"JDBC \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.0/engine-usage/jdbc"}},c=[{value:"1.Shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 shell engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-shell-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 shell\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-shell\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.Shell\u5f15\u64ce\u7684\u4f7f\u7528",id:"3shell\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.Shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],p={toc:c};function h(e){var n=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cShell\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528shell\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684PATH\u4e2d\u662f\u6709bash\u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sh\u6267\u884c\u73af\u5883"),(0,i.kt)("td",{parentName:"tr",align:null},"bash\u73af\u5883\u53d8\u91cf"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528bash")))),(0,i.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,i.kt)("h2",{id:"2shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"21-shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,i.kt)("p",null,"Shell\u5f15\u64ce\u4e0d\u9700\u8981\u7528\u6237\u81ea\u884c\u7f16\u8bd1\uff0c\u76f4\u63a5\u4f7f\u7528\u7f16\u8bd1\u597d\u7684shell\u5f15\u64ce\u63d2\u4ef6\u5305\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"22-shell-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 shell engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u65b9\u5f0f\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"23-shell\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 shell\u5f15\u64ce\u7684\u6807\u7b7e"),(0,i.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684dml.sql\u8fdb\u884c\u63d2\u5165\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"3shell\u5f15\u64ce\u7684\u4f7f\u7528"},"3.Shell\u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5728linkis\u4e0a\u63d0\u4ea4shell\u4e4b\u524d\uff0c\u60a8\u53ea\u9700\u8981\u4fdd\u8bc1\u60a8\u7684\u7528\u6237\u7684\\$PATH\u4e2d\u6709shell\u7684\u8def\u5f84\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,i.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eShell\u4efb\u52a1\u4f60\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "shell-1"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "shell"); // required codeType\n')),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,i.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cShell\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,i.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efashell\u811a\u672c\u5e76\u7f16\u5199shell\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,i.kt)("p",null,"shell\u7684\u6267\u884c\u539f\u7406\u662fshell\u5f15\u64ce\u901a\u8fc7java\u81ea\u5e26\u7684ProcessBuilder\u542f\u52a8\u4e00\u4e2a\u7cfb\u7edf\u8fdb\u7a0b\u6765\u8fdb\u884c\u6267\u884c\uff0c\u5e76\u4e14\u5c06\u8fdb\u7a0b\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u5f15\u64ce\u5e76\u5199\u5165\u5230\u65e5\u5fd7\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:l(61820).Z})),(0,i.kt)("p",null,"\u56fe3-1 shell\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,i.kt)("h2",{id:"4shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,i.kt)("p",null,"shell\u5f15\u64ce\u4e00\u822c\u53ef\u4ee5\u8bbe\u7f6e\u5f15\u64ceJVM\u7684\u6700\u5927\u5185\u5b58\u3002"))}h.isMDXComponent=!0},61820:function(e,n,l){n.Z=l.p+"assets/images/shell-run-1948a5fed5d410d18fb17ae3cf7c9d95.png"}}]);