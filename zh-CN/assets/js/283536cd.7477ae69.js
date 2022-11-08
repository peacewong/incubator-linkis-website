"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90391],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),o=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(k.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,k=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=o(a),c=r,g=d["".concat(k,".").concat(c)]||d[c]||s[c]||i;return a?n.createElement(g,l(l({ref:e},m),{},{components:a})):n.createElement(g,l({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69212:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const i={title:"Linkis \u7b80\u8ff0",sidebar_position:0},l=void 0,p={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Linkis \u7b80\u8ff0",description:"\u7b80\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh-CN/docs/1.3.1/introduction",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Linkis \u7b80\u8ff0",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.1/deployment/deploy-quick"}},k=[{value:"\u7b80\u8ff0",id:"\u7b80\u8ff0",children:[]},{value:"\u6838\u5fc3\u7279\u70b9",id:"\u6838\u5fc3\u7279\u70b9",children:[]},{value:"\u652f\u6301\u7684\u5f15\u64ce\u7c7b\u578b",id:"\u652f\u6301\u7684\u5f15\u64ce\u7c7b\u578b",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]},{value:"\u5b89\u88c5\u90e8\u7f72",id:"\u5b89\u88c5\u90e8\u7f72",children:[]},{value:"\u793a\u4f8b\u548c\u4f7f\u7528\u6307\u5f15",id:"\u793a\u4f8b\u548c\u4f7f\u7528\u6307\u5f15",children:[]},{value:"\u6587\u6863",id:"\u6587\u6863",children:[]},{value:"\u67b6\u6784\u6982\u8981",id:"\u67b6\u6784\u6982\u8981",children:[]},{value:"\u8d21\u732e",id:"\u8d21\u732e",children:[]},{value:"\u8054\u7cfb\u6211\u4eec",id:"\u8054\u7cfb\u6211\u4eec",children:[]},{value:"\u8c01\u5728\u4f7f\u7528Linkis",id:"\u8c01\u5728\u4f7f\u7528linkis",children:[]}],o={toc:k};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u8ff0"},"\u7b80\u8ff0"),(0,r.kt)("p",null,"Linkis \u5728\u4e0a\u5c42\u5e94\u7528\u7a0b\u5e8f\u548c\u5e95\u5c42\u5f15\u64ce\u4e4b\u95f4\u6784\u5efa\u4e86\u4e00\u5c42\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u3002\u901a\u8fc7\u4f7f\u7528Linkis \u63d0\u4f9b\u7684REST/WebSocket/JDBC \u7b49\u6807\u51c6\u63a5\u53e3\uff0c\u4e0a\u5c42\u5e94\u7528\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fde\u63a5\u8bbf\u95eeMySQL/Spark/Hive/Presto/Flink \u7b49\u5e95\u5c42\u5f15\u64ce\uff0c\u540c\u65f6\u5b9e\u73b0\u53d8\u91cf\u3001\u811a\u672c\u3001\u51fd\u6570\u548c\u8d44\u6e90\u6587\u4ef6\u7b49\u7528\u6237\u8d44\u6e90\u7684\u8de8\u4e0a\u5c42\u5e94\u7528\u4e92\u901a\uff0c\u4ee5\u53ca\u901a\u8fc7REST\u6807\u51c6\u63a5\u53e3\u63d0\u4f9b\u4e86\u6570\u636e\u6e90\u7ba1\u7406\u548c\u6570\u636e\u6e90\u5bf9\u5e94\u7684\u5143\u6570\u636e\u67e5\u8be2\u670d\u52a1\u3002\n\u4f5c\u4e3a\u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0cLinkis \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u8fde\u901a\u3001\u590d\u7528\u3001\u7f16\u6392\u3001\u6269\u5c55\u548c\u6cbb\u7406\u7ba1\u63a7\u80fd\u529b\u3002\u901a\u8fc7\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u5c06\u5e94\u7528\u5c42\u548c\u5f15\u64ce\u5c42\u89e3\u8026\uff0c\u7b80\u5316\u4e86\u590d\u6742\u7684\u7f51\u7edc\u8c03\u7528\u5173\u7cfb\uff0c\u964d\u4f4e\u4e86\u6574\u4f53\u590d\u6742\u5ea6\uff0c\u540c\u65f6\u8282\u7ea6\u4e86\u6574\u4f53\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Linkis \u81ea2019\u5e74\u5f00\u6e90\u53d1\u5e03\u4ee5\u6765\uff0c\u5df2\u7d2f\u8ba1\u79ef\u7d2f\u4e86700\u591a\u5bb6\u8bd5\u9a8c\u4f01\u4e1a\u548c1000+\u6c99\u76d2\u8bd5\u9a8c\u7528\u6237\uff0c\u6d89\u53ca\u91d1\u878d\u3001\u7535\u4fe1\u3001\u5236\u9020\u3001\u4e92\u8054\u7f51\u7b49\u591a\u4e2a\u884c\u4e1a\u3002\u8bb8\u591a\u516c\u53f8\u5df2\u7ecf\u5c06Linkis \u4f5c\u4e3a\u5927\u6570\u636e\u5e73\u53f0\u5e95\u5c42\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u7684\u7edf\u4e00\u5165\u53e3\uff0c\u548c\u8ba1\u7b97\u8bf7\u6c42/\u4efb\u52a1\u7684\u6cbb\u7406\u7ba1\u63a7\u5229\u5668\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6ca1\u6709Linkis \u4e4b\u524d",src:a(13658).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6709\u4e86Linkis \u4e4b\u540e",src:a(39844).Z})),(0,r.kt)("h2",{id:"\u6838\u5fc3\u7279\u70b9"},"\u6838\u5fc3\u7279\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e30\u5bcc\u7684\u5e95\u5c42\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u652f\u6301"),"\u3002",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"\u76ee\u524d\u652f\u6301\u7684\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce"),"\uff1aSpark\u3001Hive\u3001Flink\u3001Python\u3001Pipeline\u3001Sqoop\u3001openLooKeng\u3001Presto\u3001ElasticSearch\u3001JDBC\u548cShell\u7b49\u3002",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"\u6b63\u5728\u652f\u6301\u4e2d\u7684\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce"),"\uff1aTrino(\u8ba1\u52121.3.1)\u3001SeaTunnel(\u8ba1\u52121.3.1)\u7b49\u3002",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"\u652f\u6301\u7684\u811a\u672c\u8bed\u8a00"),"\uff1aSparkSQL, HiveQL, Python, Shell, Pyspark, R, Scala \u548cJDBC \u7b49\u3002    "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5927\u7684\u8ba1\u7b97\u6cbb\u7406\u80fd\u529b")," \u57fa\u4e8eOrchestrator\u3001Label Manager\u548c\u5b9a\u5236\u7684Spring Cloud Gateway\u7b49\u670d\u52a1\uff0cLinkis\u80fd\u591f\u63d0\u4f9b\u57fa\u4e8e\u591a\u7ea7\u6807\u7b7e\u7684\u8de8\u96c6\u7fa4/\u8de8IDC \u7ec6\u7c92\u5ea6\u8def\u7531\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u591a\u79df\u6237\u3001\u6d41\u91cf\u63a7\u5236\u3001\u8d44\u6e90\u63a7\u5236\u548c\u7f16\u6392\u7b56\u7565(\u5982\u53cc\u6d3b\u3001\u4e3b\u5907\u7b49)\u652f\u6301\u80fd\u529b\u3002  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5168\u6808\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u67b6\u6784\u652f\u6301")," \u80fd\u591f\u63a5\u6536\u3001\u6267\u884c\u548c\u7ba1\u7406\u9488\u5bf9\u5404\u79cd\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u7684\u4efb\u52a1\u548c\u8bf7\u6c42\uff0c\u5305\u62ec\u79bb\u7ebf\u6279\u91cf\u4efb\u52a1\u3001\u4ea4\u4e92\u5f0f\u67e5\u8be2\u4efb\u52a1\u3001\u5b9e\u65f6\u6d41\u5f0f\u4efb\u52a1\u548c\u5b58\u50a8\u578b\u4efb\u52a1\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u7ba1\u7406\u80fd\u529b"),"  ResourceManager \u4e0d\u4ec5\u5177\u5907\u5bf9 Yarn \u548c Linkis EngineManager \u7684\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff0c\u8fd8\u5c06\u63d0\u4f9b\u57fa\u4e8e\u6807\u7b7e\u7684\u591a\u7ea7\u8d44\u6e90\u5206\u914d\u548c\u56de\u6536\u80fd\u529b\uff0c\u8ba9 ResourceManager \u5177\u5907\u8de8\u96c6\u7fa4\u3001\u8de8\u8ba1\u7b97\u8d44\u6e90\u7c7b\u578b\u7684\u5f3a\u5927\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7edf\u4e00\u4e0a\u4e0b\u6587\u670d\u52a1")," \u4e3a\u6bcf\u4e2a\u8ba1\u7b97\u4efb\u52a1\u751f\u6210context id\uff0c\u8de8\u7528\u6237\u3001\u7cfb\u7edf\u3001\u8ba1\u7b97\u5f15\u64ce\u7684\u5173\u8054\u7ba1\u7406\u7528\u6237\u548c\u7cfb\u7edf\u8d44\u6e90\u6587\u4ef6\uff08JAR\u3001ZIP\u3001Properties\u7b49\uff09\uff0c\u7ed3\u679c\u96c6\uff0c\u53c2\u6570\u53d8\u91cf\uff0c\u51fd\u6570\u7b49\uff0c\u4e00\u5904\u8bbe\u7f6e\uff0c\u5904\u5904\u81ea\u52a8\u5f15\u7528\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7edf\u4e00\u7269\u6599")," \u7cfb\u7edf\u548c\u7528\u6237\u7ea7\u7269\u6599\u7ba1\u7406\uff0c\u53ef\u5206\u4eab\u548c\u6d41\u8f6c\uff0c\u8de8\u7528\u6237\u3001\u7cfb\u7edf\u5171\u4eab\u7269\u6599\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7edf\u4e00\u6570\u636e\u6e90\u7ba1\u7406")," \u63d0\u4f9b\u4e86hive\u3001es\u3001mysql\u3001kafka\u7c7b\u578b\u6570\u636e\u6e90\u7684\u589e\u5220\u67e5\u6539\u3001\u7248\u672c\u63a7\u5236\u3001\u8fde\u63a5\u6d4b\u8bd5\u7b49\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6570\u636e\u6e90\u5bf9\u5e94\u7684\u5143\u6570\u636e\u67e5\u8be2")," \u63d0\u4f9b\u4e86hive\u3001es\u3001mysql\u3001kafka\u5143\u6570\u636e\u7684\u6570\u636e\u5e93\u3001\u8868\u3001\u5206\u533a\u67e5\u8be2\u3002")),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce\u7c7b\u578b"},"\u652f\u6301\u7684\u5f15\u64ce\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u5f15\u64ce\u540d")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u652f\u6301\u5e95\u5c42\u7ec4\u4ef6\u7248\u672c",(0,r.kt)("br",null),"(\u9ed8\u8ba4\u4f9d\u8d56\u7248\u672c)")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Linkis 1.X \u7248\u672c\u8981\u6c42")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u662f\u5426\u9ed8\u8ba4\u5305\u542b\u5728\u53d1\u5e03\u5305\u4e2d")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0.0~2.4.7, ",(0,r.kt)("br",null),"CDH >= 5.4.0, ",(0,r.kt)("br",null),"\uff08\u9ed8\u8ba4Apache Spark 2.4.3\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn\uff0c \u652f\u6301SQL, Scala, Pyspark \u548cR \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache >= 1.0.0, ",(0,r.kt)("br",null),"CDH >= 5.4.0, ",(0,r.kt)("br",null),"\uff08\u9ed8\u8ba4Apache Hive 2.3.3\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn\uff0c \u652f\u6301HiveQL \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Python >= 2.6, ",(0,r.kt)("br",null),"\uff08\u9ed8\u8ba4Python2*\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn\uff0c \u652f\u6301python \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bash >= 2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn\uff0c \u652f\u6301Bash shell \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MySQL >= 5.0, Hive >=1.2.1, ",(0,r.kt)("br",null),"(\u9ed8\u8ba4Hive-jdbc 2.3.4)"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn\uff0c \u5df2\u652f\u6301MySQL \u548cHiveQL\uff0c\u53ef\u5feb\u901f\u6269\u5c55\u652f\u6301\u5176\u4ed6\u6709JDBC Driver \u5305\u7684\u5f15\u64ce, \u5982Oracle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Flink >= 1.12.2, ",(0,r.kt)("br",null),"(\u9ed8\u8ba4Apache Flink 1.12.2)"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn\uff0c \u652f\u6301FlinkSQL \u4ee3\u7801\uff0c\u4e5f\u652f\u6301\u4ee5Flink Jar \u5f62\u5f0f\u542f\u52a8\u4e00\u4e2a\u65b0\u7684Yarn \u5e94\u7528\u7a0b\u5e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pipeline"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pipeline EngineConn\uff0c \u652f\u6301\u6587\u4ef6\u7684\u5bfc\u5165\u548c\u5bfc\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openLooKeng"),(0,r.kt)("td",{parentName:"tr",align:"left"},"openLooKeng >= 1.5.0, ",(0,r.kt)("br",null),"(\u9ed8\u8ba4openLookEng 1.5.0)"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"openLooKeng EngineConn\uff0c \u652f\u6301\u7528Sql\u67e5\u8be2\u6570\u636e\u865a\u62df\u5316\u5f15\u64ceopenLooKeng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sqoop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sqoop >= 1.4.6, ",(0,r.kt)("br",null),"(\u9ed8\u8ba4Apache Sqoop 1.4.6)"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sqoop EngineConn\uff0c \u652f\u6301 \u6570\u636e\u8fc1\u79fb\u5de5\u5177 Sqoop \u5f15\u64ce")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Presto"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Presto >= 0.180"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Presto EngineConn\uff0c \u652f\u6301Presto SQL \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch >=6.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch EngineConn\uff0c \u652f\u6301SQL \u548cDSL \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Impala"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Impala >= 3.2.0, CDH >=6.3.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Impala EngineConn\uff0c\u652f\u6301Impala SQL \u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MLSQL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MLSQL >=1.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MLSQL EngineConn\uff0c \u652f\u6301MLSQL \u4ee3\u7801.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hadoop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache >=2.6.0, ",(0,r.kt)("br",null),"CDH >=5.4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hadoop EngineConn\uff0c \u652f\u6301Hadoop MR/YARN application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TiSpark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TiSpark EngineConn\uff0c \u652f\u6301\u7528SparkSQL \u67e5\u8be2TiDB")))),(0,r.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u8bf7\u524d\u5f80",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/download/main"},"Linkis releases \u9875\u9762")," \u4e0b\u8f7dLinkis \u5df2\u7f16\u8bd1\u7684\u90e8\u7f72\u5b89\u88c5\u5305\u6216\u6e90\u7801\u5305\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u90e8\u7f72"},"\u5b89\u88c5\u90e8\u7f72"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/deployment/deploy-quick"},"\u5b89\u88c5\u90e8\u7f72\u6587\u6863")," \u6765\u90e8\u7f72Linkis "),(0,r.kt)("h2",{id:"\u793a\u4f8b\u548c\u4f7f\u7528\u6307\u5f15"},"\u793a\u4f8b\u548c\u4f7f\u7528\u6307\u5f15"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.3.1/user-guide/overview"},"\u7528\u6237\u624b\u518c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.3.1/engine-usage/overview"},"\u5404\u5f15\u64ce\u4f7f\u7528\u6307\u5f15")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.3.1/api/overview"},"API \u6587\u6863"))),(0,r.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("p",null,"\u5b8c\u6574\u7684Linkis\u6587\u6863\u4ee3\u7801\u5b58\u653e\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis-website"},"linkis-website\u4ed3\u5e93\u4e2d")," "),(0,r.kt)("h2",{id:"\u67b6\u6784\u6982\u8981"},"\u67b6\u6784\u6982\u8981"),(0,r.kt)("p",null,"Linkis \u57fa\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u5f00\u53d1\uff0c\u5176\u670d\u52a1\u53ef\u4ee5\u5206\u4e3a3\u7c7b:\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u3001\u516c\u5171\u589e\u5f3a\u670d\u52a1\u548c\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\u3002  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\uff0c\u652f\u6301\u8ba1\u7b97\u4efb\u52a1/\u8bf7\u6c42\u5904\u7406\u6d41\u7a0b\u76843\u4e2a\u4e3b\u8981\u9636\u6bb5:\u63d0\u4ea4->\u51c6\u5907->\u6267\u884c;"),(0,r.kt)("li",{parentName:"ul"},"\u516c\u5171\u589e\u5f3a\u670d\u52a1\uff0c\u5305\u62ec\u4e0a\u4e0b\u6587\u670d\u52a1\u3001\u7269\u6599\u7ba1\u7406\u670d\u52a1\u53ca\u6570\u636e\u6e90\u670d\u52a1\u7b49;"),(0,r.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\uff0c\u5305\u62ec\u5b9a\u5236\u5316\u7684Spring Cloud Gateway\u3001Eureka\u3001Open Feign\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u662fLinkis \u7684\u67b6\u6784\u6982\u8981\u56fe. \u66f4\u591a\u8be6\u7ec6\u67b6\u6784\u6587\u6863\u8bf7\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/architecture/overview"},"Linkis/Architecture"),".\n",(0,r.kt)("img",{alt:"architecture",src:a(94337).Z})),(0,r.kt)("p",null,"\u57fa\u4e8eLinkis \u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u5728\u5927\u6570\u636e\u5e73\u53f0\u5957\u4ef6",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/WeDataSphere"},"WeDataSphere")," \u4e2d\u6784\u5efa\u4e86\u8bb8\u591a\u5e94\u7528\u548c\u5de5\u5177\u7cfb\u7edf\uff0c\u4e0b\u9762\u662f\u76ee\u524d\u53ef\u7528\u7684\u5f00\u6e90\u9879\u76ee\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wedatasphere_stack_Linkis",src:a(44942).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/DataSphereStudio"},(0,r.kt)("strong",{parentName:"a"},"DataSphere Studio")," - \u6570\u636e\u5e94\u7528\u96c6\u6210\u5f00\u53d1\u6846\u67b6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},(0,r.kt)("strong",{parentName:"a"},"Scriptis")," - \u6570\u636e\u7814\u53d1IDE\u5de5\u5177"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Visualis"},(0,r.kt)("strong",{parentName:"a"},"Visualis")," - \u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Schedulis"},(0,r.kt)("strong",{parentName:"a"},"Schedulis")," - \u5de5\u4f5c\u6d41\u8c03\u5ea6\u5de5\u5177"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Qualitis"},(0,r.kt)("strong",{parentName:"a"},"Qualitis")," - \u6570\u636e\u8d28\u91cf\u5de5\u5177"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/prophecis"},(0,r.kt)("strong",{parentName:"a"},"MLLabis")," - \u5bb9\u5668\u5316\u673a\u5668\u5b66\u4e60notebook \u5f00\u53d1\u73af\u5883")))),(0,r.kt)("p",null,"\u66f4\u591a\u9879\u76ee\u5f00\u6e90\u51c6\u5907\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002"),(0,r.kt)("h2",{id:"\u8d21\u732e"},"\u8d21\u732e"),(0,r.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u548c\u671f\u5f85\u66f4\u591a\u7684\u8d21\u732e\u8005\u53c2\u4e0e\u5171\u5efaLinkis, \u4e0d\u8bba\u662f\u4ee3\u7801\u3001\u6587\u6863\uff0c\u6216\u662f\u5176\u4ed6\u80fd\u591f\u5e2e\u52a9\u5230\u793e\u533a\u7684\u8d21\u732e\u5f62\u5f0f\u3002  "),(0,r.kt)("p",null,"\u4ee3\u7801\u548c\u6587\u6863\u76f8\u5173\u7684\u8d21\u732e\u8bf7\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"/community/how-to-contribute"},"\u8d21\u732e\u6307\u5f15"),"\u3002"),(0,r.kt)("h2",{id:"\u8054\u7cfb\u6211\u4eec"},"\u8054\u7cfb\u6211\u4eec"),(0,r.kt)("p",null,"\u5bf9Linkis \u7684\u4efb\u4f55\u95ee\u9898\u548c\u5efa\u8bae\uff0c\u656c\u8bf7\u63d0\u4ea4issue\uff0c\u4ee5\u4fbf\u8ddf\u8e2a\u5904\u7406\u548c\u7ecf\u9a8c\u6c89\u6dc0\u5171\u4eab\n\u60a8\u4e5f\u53ef\u4ee5\u626b\u63cf\u4e0b\u9762\u7684\u4e8c\u7ef4\u7801\uff0c\u52a0\u5165\u6211\u4eec\u7684\u5fae\u4fe1\u7fa4\uff0c\u4ee5\u83b7\u5f97\u66f4\u5feb\u901f\u7684\u54cd\u5e94\n",(0,r.kt)("img",{alt:"introduction05",src:a(50685).Z})),(0,r.kt)("p",null,"Meetup \u89c6\u9891 ",(0,r.kt)("a",{parentName:"p",href:"https://space.bilibili.com/598542776?from=search&seid=14344213924133040656"},"Bilibili"),"\u3002"),(0,r.kt)("h2",{id:"\u8c01\u5728\u4f7f\u7528linkis"},"\u8c01\u5728\u4f7f\u7528Linkis"),(0,r.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/issues/23"},"\u4e00\u4e2a issue")," \u4ee5\u4fbf\u7528\u6237\u53cd\u9988\u548c\u8bb0\u5f55\u8c01\u5728\u4f7f\u7528Linkis\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Linkis \u81ea2019\u5e74\u5f00\u6e90\u53d1\u5e03\u4ee5\u6765\uff0c\u7d2f\u8ba1\u5df2\u6709700\u591a\u5bb6\u8bd5\u9a8c\u4f01\u4e1a\u548c1000+\u6c99\u76d2\u8bd5\u9a8c\u7528\u6237\uff0c\u6d89\u53ca\u91d1\u878d\u3001\u7535\u4fe1\u3001\u5236\u9020\u3001\u4e92\u8054\u7f51\u7b49\u591a\u4e2a\u884c\u4e1a\u3002"))}m.isMDXComponent=!0},39844:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/after_linkis_cn-5b7a7e0d0545946ccfbcbba06a4413e6.png"},13658:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/before_linkis_cn-f08934847a2e3f1944488278066b467b.png"},94337:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Linkis_1.0_architecture-e91c8fbabb890c6beaf4317cf22f5151.png"},50685:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/wedatasphere_contact_01-b7ba004b71d7e1b84b37d9b057b2ee55.png"},44942:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/wedatasphere_stack_Linkis-7f1308b2505ad1cdabf5e39ed185a804.png"}}]);