"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[84154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),y=a,f=m["".concat(l,".").concat(y)]||m[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf",sidebar_position:1},o=void 0,s={unversionedId:"architecture/storage/file-system",id:"version-0.11.0/architecture/storage/file-system",title:"\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf",description:"\u5982\u4f55\u5b9e\u73b0\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/storage/file-system.md",sourceDirName:"architecture/storage",slug:"/architecture/storage/file-system",permalink:"/zh-CN/docs/0.11.0/architecture/storage/file-system",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/storage/file-system.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"RPC\u67b6\u6784",permalink:"/zh-CN/docs/0.11.0/architecture/commons/rpc"},next:{title:"\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784",permalink:"/zh-CN/docs/0.11.0/architecture/storage/remote-file-system-architecture-design"}},l={},c=[{value:"1 \u80cc\u666f",id:"1-\u80cc\u666f",level:2},{value:"2 \u601d\u8def",id:"2-\u601d\u8def",level:2},{value:"3 \u5b9e\u73b0",id:"3-\u5b9e\u73b0",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u4f55\u5b9e\u73b0\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf")),(0,a.kt)("h2",{id:"1-\u80cc\u666f"},"1 \u80cc\u666f"),(0,a.kt)("p",null,"\u5f88\u591a\u7cfb\u7edf\u90fd\u9762\u4e34\u7740\u8bbf\u95ee\u591a\u6587\u4ef6\u7cfb\u7edf\u7684\u9700\u6c42\u3002\u4f8b\u5982\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u548cHDFS\u6587\u4ef6\u7cfb\u7edf\uff0c\u7528\u6237\u9700\u8981\u4e86\u89e3\u4e24\u4e2a\u6587\u4ef6\u7cfb\u7edf\u7684Java SDK\uff0c\u5177\u6709\u5f88\u5927\u7684\u5b66\u4e60\u6210\u672c\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u5728\u4f7f\u7528\u5176Java SDK\u65f6\uff0c\u5b9e\u4f8b\u5316FileSystem\u9700\u8981\u4f20\u5165\u5f88\u591a\u914d\u7f6e\u4fe1\u606f\u5e76\u8fdb\u884c\u5f88\u591a\u7684\u521d\u59cb\u5316\uff0c\u52a0\u5927\u4e86\u7528\u6237\u4f7f\u7528\u7684\u590d\u6742\u6027\u3002"),(0,a.kt)("p",null,"\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u8def\u5f84\u7684scheme\u5934\uff0c\u8ba9\u6587\u4ef6\u7cfb\u7edf\u81ea\u52a8\u8bc6\u522b\u5e76\u5207\u6362\u5e95\u5c42\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u6765\u8bfb\u53d6\u6587\u4ef6\uff1f"),(0,a.kt)("h2",{id:"2-\u601d\u8def"},"2 \u601d\u8def"),(0,a.kt)("p",null,"\u63d0\u4f9b\u901a\u7528\u7684\u6587\u4ef6\u7cfb\u7edfJava SDK\uff0c\u7528\u6237\u901a\u8fc7\u8c03\u7528FSFactory\u521b\u5efaFileSystem\uff0c\u4f7f\u7528\u901a\u7528\u63a5\u53e3\u8fdb\u884c\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf\u7684\u8bbf\u95ee\uff0c\u6574\u4f53\u65b9\u6848\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u901a\u7528\u6587\u4ef6\u7cfb\u7edf\u65b9\u6848",src:r(5788).Z,width:"1374",height:"519"})),(0,a.kt)("h2",{id:"3-\u5b9e\u73b0"},"3 \u5b9e\u73b0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(1)"),"\n\u7528\u6237\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\u5de5\u5382(FSFactory)\uff0c\u901a\u8fc7\u4f20\u5165FsPath\uff0c\u83b7\u53d6\u4e00\u4e2aFs\u3002\nFsPath\u5b9e\u4f8b\u5316\u65f6\u901a\u8fc7schema\u6765\u533a\u5206\u4e0d\u540c\u7684\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff0c\u5982:local:///tmp/test.txt\u548chdfs:///tmp/test.txt\uff0cFsFactory\u901a\u8fc7schema\u5934(\u5982\uff1alocal\u6216hdfs)\u53ef\u83b7\u5f97\u5bf9\u5e94\u6587\u4ef6\u7cfb\u7edf\u7684FileSystem\u5bf9\u8c61\uff1b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(2)"),"\nFileSystem\u5bf9\u8c61\uff0c\u63d0\u4f9b\u4e86\u901a\u7528\u7684\u63a5\u53e3\uff0c\u5982\uff1a\u83b7\u5f97\u6587\u4ef6(\u5939)\u5927\u5c0f\uff0c\u521b\u5efa\u3001\u5220\u9664\u6587\u4ef6(\u5939)\uff0c\u8bfb\u5199\u6587\u4ef6\u7b49\u64cd\u4f5c\u3002\n\u7528\u6237\u53ea\u9700\u8981\u8c03\u7528FileSystem\u5bf9\u8c61\u91cc\u9762\u7684\u65b9\u6cd5\u65e2\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5e94\u6587\u4ef6\u7cfb\u7edf\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(3)"),"\n\u7528\u6237\u901a\u8fc7FileSystem\u5e76\u4f20\u5165\u76f8\u5e94\u7684FsPath\u5c31\u53ef\u4ee5\u64cd\u4f5c\u5bf9\u5e94\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u901a\u8fc7\u7b2c\u4e8c\u70b9\u63d0\u4f9b\u7684\u64cd\u4f5c\u53ef\u4ee5\u5b9e\u73b0\u901a\u7528\u7684\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(4)"),"\nFileSystem\u5e95\u5c42\u5bf9\u5e94\u7684\u662f\u5b9e\u9645\u7684\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u548c\u63a5\u53e3\uff0c\u8fd9\u4e9b\u63a5\u53e3\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\u662f\u5c4f\u853d\u7684\uff0c\u7528\u6237\u53ea\u9700\u8981\u4e86\u89e3FileSystem\u7684\u63a5\u53e3\u548c\u65b9\u6cd5\u540e\uff0c\u5c31\u53ef\u4ee5\u64cd\u4f5c\u5e95\u5c42\u4e0d\u540c\u7684\u6587\u4ef6\u7cfb\u7edf\u3002\n\u5982\u7528\u6237\u9700\u8981\u8bfb\u53d6\u8def\u5f84\u4e3alocal:///tmp/test.tx\u7684\u672c\u5730\u6587\u4ef6\uff0c\u7528\u6237\u53ea\u9700\u8981\u8c03\u7528FileSystem\u7684read\u65b9\u6cd5\u5c31\u53ef\u4ee5\u6620\u5c04\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u6587\u4ef6\u8f93\u5165\u6d41\u8bfb\u53d6\u51fa\u76f8\u5e94\u7684\u5185\u5bb9\u3002\n\u5176\u4e2d\u6587\u4ef6\u7cfb\u7edf(File System)\u63a5\u53e3\u73b0\u5df2\u7ecf\u5b9e\u73b0\u4e86\u672c\u5730LoaclFileSystem\u548cHDFSFileSystem\u3002\n\u7528\u6237\u901a\u8fc7\u5b9e\u73b0\u6587\u4ef6\u7cfb\u7edf(File System)\u63a5\u53e3\u53ef\u4ee5\u5bf9\u63a5\u5230\u4e0d\u540c\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u6269\u5c55\u6781\u5176\u65b9\u4fbf\u3002"))}u.isMDXComponent=!0},5788:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/file_system-d7a883429a9e9799120ef82098e39b85.png"}}]);