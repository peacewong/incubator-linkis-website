"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[82444],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>g});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),k=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},u=function(t){var a=k(t.components);return n.createElement(m.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),N=k(e),g=r,o=N["".concat(m,".").concat(g)]||N[g]||d[g]||l;return e?n.createElement(o,p(p({ref:a},u),{},{components:e})):n.createElement(o,p({ref:a},u))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=N;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var k=2;k<l;k++)p[k]=e[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},33652:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var n=e(87462),r=(e(67294),e(3905));const l={title:"BMLFS\u7ba1\u7406",sidebar_position:13},p=void 0,i={unversionedId:"api/http/linkis-ps-publicservice-api/bmlfs-management-api",id:"api/http/linkis-ps-publicservice-api/bmlfs-management-api",title:"BMLFS\u7ba1\u7406",description:"BMLFsRestfulApi \u7c7b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/http/linkis-ps-publicservice-api/bmlfs-management-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/bmlfs-management-api",permalink:"/zh-CN/docs/1.3.1/api/http/linkis-ps-publicservice-api/bmlfs-management-api",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/http/linkis-ps-publicservice-api/bmlfs-management-api.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"BMLFS\u7ba1\u7406",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528API",permalink:"/zh-CN/docs/1.3.1/api/http/linkis-ps-publicservice-api/currency-api"},next:{title:"BML\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.1/api/http/linkis-ps-publicservice-api/bml-resource-management-api"}},m={},k=[{value:"\u6253\u5f00ScriptFromBML",id:"\u6253\u5f00scriptfrombml",level:2},{value:"\u6253\u5f00\u6765\u81eaBML\u7684script",id:"\u6253\u5f00\u6765\u81eabml\u7684script",level:2},{value:"\u4fdd\u5b58\u6765\u81eaBML\u7684script",id:"\u4fdd\u5b58\u6765\u81eabml\u7684script",level:2}],u={toc:k};function d(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," BMLFsRestfulApi \u7c7b ")),(0,r.kt)("h2",{id:"\u6253\u5f00scriptfrombml"},"\u6253\u5f00ScriptFromBML"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/openScriptFromBML")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,r.kt)("p",null,"openScriptFromBML")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8005"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90Id"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"\u6253\u5f00\u6765\u81eabml\u7684script"},"\u6253\u5f00\u6765\u81eaBML\u7684script"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/product/openScriptFromBML")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,r.kt)("p",null,"/product/openScriptFromBML")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8005"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90Id"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"\u4fdd\u5b58\u6765\u81eabml\u7684script"},"\u4fdd\u5b58\u6765\u81eaBML\u7684script"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/saveScriptToBML")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,r.kt)("p",null,"\u4fdd\u5b58\u6765\u81eaBML\u7684script")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8005"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90ID"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scriptContent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaveScriptToBML"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"SaveScriptToBML"),(0,r.kt)("td",{parentName:"tr",align:null},"SaveScriptToBML")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')))}d.isMDXComponent=!0}}]);