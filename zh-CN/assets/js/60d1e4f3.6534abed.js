"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),o=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(t),b=r,k=p["".concat(c,".").concat(b)]||p[b]||u[b]||l;return t?i.createElement(k,a(a({ref:n},d),{},{components:t})):i.createElement(k,a({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var o=2;o<l;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},41534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var i=t(87462),r=(t(67294),t(3905));const l={title:"JDBC \u5f15\u64ce",sidebar_position:7},a=void 0,s={unversionedId:"engine-usage/jdbc",id:"version-1.0.2/engine-usage/jdbc",title:"JDBC \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cJDBC\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/engine-usage/jdbc.md",sourceDirName:"engine-usage",slug:"/engine-usage/jdbc",permalink:"/zh-CN/docs/1.0.2/engine-usage/jdbc",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/engine-usage/jdbc.md",tags:[],version:"1.0.2",sidebarPosition:7,frontMatter:{title:"JDBC \u5f15\u64ce",sidebar_position:7},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Shell \u5f15\u64ce",permalink:"/zh-CN/docs/1.0.2/engine-usage/shell"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.2/api/overview"}},c={},o=[{value:"1.JDBC\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1jdbc\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",level:2},{value:"2.JDBC\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2jdbc\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",level:2},{value:"2.1 JDBC\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-jdbc\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",level:3},{value:"2.2 JDBC engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-jdbc-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",level:3},{value:"2.3 JDBC\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-jdbc\u5f15\u64ce\u7684\u6807\u7b7e",level:3},{value:"3.JDBC\u5f15\u64ce\u7684\u4f7f\u7528",id:"3jdbc\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",level:3},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",level:3},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",level:3},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"4.JDBC\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4jdbc\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",level:2}],d={toc:o};function u(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cJDBC\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"1jdbc\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.JDBC\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528JDBC\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u51c6\u5907JDBC\u8fde\u63a5\u4fe1\u606f\uff0c\u5982MySQL\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u7b49"),(0,r.kt)("h2",{id:"2jdbc\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.JDBC\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,r.kt)("h3",{id:"21-jdbc\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 JDBC\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,r.kt)("p",null,"JDBC\u5f15\u64ce\u4e0d\u9700\u8981\u7528\u6237\u81ea\u884c\u7f16\u8bd1\uff0c\u76f4\u63a5\u4f7f\u7528\u7f16\u8bd1\u597d\u7684JDBC\u5f15\u64ce\u63d2\u4ef6\u5305\u5373\u53ef\u3002\u5df2\u7ecf\u63d0\u4f9b\u7684Driver\u5305\u62ec\u6709MySQL\uff0cPostgreSQL\u7b49"),(0,r.kt)("h3",{id:"22-jdbc-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 JDBC engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,r.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u65b9\u5f0f\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\uff0c\u6309\u7167\u6807\u51c6\u7248\u672c\u5b89\u88c5\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"23-jdbc\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 JDBC\u5f15\u64ce\u7684\u6807\u7b7e"),(0,r.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684dml.sql\u8fdb\u884c\u63d2\u5165\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"3jdbc\u5f15\u64ce\u7684\u4f7f\u7528"},"3.JDBC\u5f15\u64ce\u7684\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u914d\u7f6eJDBC\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u5305\u62ec\u8fde\u63a5\u5730\u5740\u4fe1\u606f\u548c\u7528\u6237\u540d\u4ee5\u53ca\u5bc6\u7801\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(10191).Z,width:"1918",height:"918"})),(0,r.kt)("p",null,"\u56fe3-1 JDBC\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u624d\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\u4e2d\u7684RuntimeMap\u8fdb\u884c\u4fee\u6539\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.jdbc.connect.url \nwds.linkis.jdbc.username\nwds.linkis.jdbc.password\n")),(0,r.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,r.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0.2/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eJDBC\u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,r.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,r.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cJDBC\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,r.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0.2/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efaJDBC\u811a\u672c\u5e76\u7f16\u5199JDBC\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,r.kt)("p",null,"JDBC\u7684\u6267\u884c\u539f\u7406\u662f\u901a\u8fc7\u52a0\u8f7dJDBC\u7684Driver\u7136\u540e\u63d0\u4ea4sql\u5230SQL\u7684server\u53bb\u6267\u884c\u5e76\u83b7\u53d6\u5230\u7ed3\u679c\u96c6\u5e76\u8fd4\u56de\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9002).Z,width:"1674",height:"643"})),(0,r.kt)("p",null,"\u56fe3-2 JDBC\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,r.kt)("h2",{id:"4jdbc\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.JDBC\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,r.kt)("p",null,"JDBC\u7684\u7528\u6237\u8bbe\u7f6e\u662f\u4e3b\u8981\u662f\u7684JDBC\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u4f46\u662f\u5efa\u8bae\u7528\u6237\u5c06\u6b64\u5bc6\u7801\u7b49\u4fe1\u606f\u8fdb\u884c\u52a0\u5bc6\u7ba1\u7406\u3002"))}u.isMDXComponent=!0},10191:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc-conf-8b6a6f3e7f99d606479f9556539f4251.png"},9002:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc-run-fe0a09fead1ca699d08b646f9908bb60.png"}}]);