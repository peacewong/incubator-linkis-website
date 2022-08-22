"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24201],{3905:function(n,i,e){e.d(i,{Zo:function(){return p},kt:function(){return u}});var a=e(67294);function l(n,i,e){return i in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function s(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),e.push.apply(e,a)}return e}function t(n){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(Object(e),!0).forEach((function(i){l(n,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))}))}return n}function r(n,i){if(null==n)return{};var e,a,l=function(n,i){if(null==n)return{};var e,a,l={},s=Object.keys(n);for(a=0;a<s.length;a++)e=s[a],i.indexOf(e)>=0||(l[e]=n[e]);return l}(n,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)e=s[a],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(l[e]=n[e])}return l}var c=a.createContext({}),o=function(n){var i=a.useContext(c),e=i;return n&&(e="function"==typeof n?n(i):t(t({},i),n)),e},p=function(n){var i=o(n.components);return a.createElement(c.Provider,{value:i},n.children)},k={inlineCode:"code",wrapper:function(n){var i=n.children;return a.createElement(a.Fragment,{},i)}},g=a.forwardRef((function(n,i){var e=n.components,l=n.mdxType,s=n.originalType,c=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),g=o(e),u=l,d=g["".concat(c,".").concat(u)]||g[u]||k[u]||s;return e?a.createElement(d,t(t({ref:i},p),{},{components:e})):a.createElement(d,t({ref:i},p))}));function u(n,i){var e=arguments,l=i&&i.mdxType;if("string"==typeof n||l){var s=e.length,t=new Array(s);t[0]=g;var r={};for(var c in i)hasOwnProperty.call(i,c)&&(r[c]=i[c]);r.originalType=n,r.mdxType="string"==typeof n?n:l,t[1]=r;for(var o=2;o<s;o++)t[o]=e[o];return a.createElement.apply(null,t)}return a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},66492:function(n,i,e){e.r(i),e.d(i,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return g}});var a=e(87462),l=e(63366),s=(e(67294),e(3905)),t=["components"],r={title:"\u670d\u52a1\u8c03\u8bd5\u6307\u5f15",sidebar_position:2},c="\u8c03\u8bd5\u76f8\u5173",o={unversionedId:"development/linkis-debug",id:"development/linkis-debug",isDocsHomePage:!1,title:"\u670d\u52a1\u8c03\u8bd5\u6307\u5f15",description:"\u56e0\u4e3alinkis\u672c\u8eab\u6a21\u5757\u6bd4\u8f83\u591a\uff0c\u8c03\u8bd5\u8d77\u6765\u6709\u4e00\u5b9a\u7684\u96be\u5ea6\uff0c\u4e0b\u9762\u5c31\u6307\u5bfc\u5927\u5bb6\u5982\u4f55\u8fdb\u884c\u4e00\u6b21\u672c\u5730\u7684\u670d\u52a1\u8c03\u8bd5(\u57fa\u4e8e1.0.3\u7248\u672c)\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/linkis-debug.md",sourceDirName:"development",slug:"/development/linkis-debug",permalink:"/zh-CN/docs/1.2.0/development/linkis-debug",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/linkis-debug.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u670d\u52a1\u8c03\u8bd5\u6307\u5f15",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5728Mac\u4e0a\u8c03\u8bd5Linkis",permalink:"/zh-CN/docs/1.2.0/development/linkis-debug-in-mac"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/1.2.0/development/new-engine-conn"}},p=[{value:"step 1 \u51c6\u5907\u6e90\u7801\u5e76\u7f16\u8bd1",id:"step-1-\u51c6\u5907\u6e90\u7801\u5e76\u7f16\u8bd1",children:[]},{value:"step2 \u5fc5\u8981\u7684\u53c2\u6570\u914d\u7f6e",id:"step2-\u5fc5\u8981\u7684\u53c2\u6570\u914d\u7f6e",children:[]},{value:"step3 \u8c03\u6574log4j.xml\u914d\u7f6e",id:"step3-\u8c03\u6574log4jxml\u914d\u7f6e",children:[]},{value:"step 4 \u6574\u4f53\u8c03\u8bd5\u65b9\u6848",id:"step-4-\u6574\u4f53\u8c03\u8bd5\u65b9\u6848",children:[{value:"linkis-mg-eureka\u7684\u542f\u52a8",id:"linkis-mg-eureka\u7684\u542f\u52a8",children:[]},{value:"linkis-mg-gateway\u7684\u542f\u52a8\u914d\u7f6e",id:"linkis-mg-gateway\u7684\u542f\u52a8\u914d\u7f6e",children:[]},{value:"linkis-ps-publicservice\u7684\u542f\u52a8\u914d\u7f6e",id:"linkis-ps-publicservice\u7684\u542f\u52a8\u914d\u7f6e",children:[]},{value:"linkis-ps-cs\u7684\u542f\u52a8\u914d\u7f6e",id:"linkis-ps-cs\u7684\u542f\u52a8\u914d\u7f6e",children:[]},{value:"linkis-cg-linkismanager\u542f\u52a8",id:"linkis-cg-linkismanager\u542f\u52a8",children:[]},{value:"linkis-cg-entrance\u542f\u52a8",id:"linkis-cg-entrance\u542f\u52a8",children:[]}]},{value:"\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6b65\u9aa4",id:"\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6b65\u9aa4",children:[{value:"1. \u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3",id:"1-\u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3",children:[]},{value:"2. \u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1",id:"2-\u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1",children:[]},{value:"3. \u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5",id:"3-\u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5",children:[]},{value:"4. \u5f00\u59cb\u8c03\u8bd5",id:"4-\u5f00\u59cb\u8c03\u8bd5",children:[]}]}],k={toc:p};function g(n){var i=n.components,r=(0,l.Z)(n,t);return(0,s.kt)("wrapper",(0,a.Z)({},k,r,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u8c03\u8bd5\u76f8\u5173"},"\u8c03\u8bd5\u76f8\u5173"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3alinkis\u672c\u8eab\u6a21\u5757\u6bd4\u8f83\u591a\uff0c\u8c03\u8bd5\u8d77\u6765\u6709\u4e00\u5b9a\u7684\u96be\u5ea6\uff0c\u4e0b\u9762\u5c31\u6307\u5bfc\u5927\u5bb6\u5982\u4f55\u8fdb\u884c\u4e00\u6b21\u672c\u5730\u7684\u670d\u52a1\u8c03\u8bd5(\u57fa\u4e8e1.0.3\u7248\u672c)\u3002")),(0,s.kt)("h4",null,(0,s.kt)("font",{color:"red"},"linkis 1.0.3\u7248\u672c\u524d\uff0c\u8fd8\u672a\u8fdb\u5165apache\u5b75\u5316\uff0c\u7ec4\u7ec7\u8fd8\u662f\u5f52\u5c5ewebank,\u4e3b\u7c7b\u7684\u5305\u540d\u4e3a`com.webank.wedatasphere.linkis`\uff0c\u8c03\u8bd5\u65f6\uff0c\u6ce8\u610f\u533a\u5206\u3002")),(0,s.kt)("h2",{id:"step-1-\u51c6\u5907\u6e90\u7801\u5e76\u7f16\u8bd1"},"step 1 \u51c6\u5907\u6e90\u7801\u5e76\u7f16\u8bd1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"git\xa0clone\xa0https://github.com/apache/incubator-linkis.git\ncd\xa0incubator-linkis\n#\u5982\u679c\u9700\u8981 \u53ef\u4ee5\u5207\u6362\u5230\u5bf9\u5e94\u7684\u5206\u652f\u4e0a\n#git checkout dev-xxx\nmvn -N install \nmvn\xa0clean\xa0install\n")),(0,s.kt)("h2",{id:"step2-\u5fc5\u8981\u7684\u53c2\u6570\u914d\u7f6e"},"step2 \u5fc5\u8981\u7684\u53c2\u6570\u914d\u7f6e"),(0,s.kt)("p",null,"\u5bf9\u4e8eincubator-linkis/linkis-dist/package/conf/\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u9700\u8981\u5bf9\u6570\u636e\u5e93\u4ee5\u53cahive meta\u7b49\u5fc5\u8981\u542f\u52a8\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002 "),(0,s.kt)("h2",{id:"step3-\u8c03\u6574log4jxml\u914d\u7f6e"},"step3 \u8c03\u6574log4j.xml\u914d\u7f6e"),(0,s.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8c03\u8bd5\u7684\u65f6\u5019\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0\uff0c\u9700\u8981\u4fee\u6539\u4e0b\u9ed8\u8ba4\u7684log4j2.xml\u6587\u4ef6\uff0c\u4fee\u6539appender\u9ed8\u8ba4\u4e3aconsole\u3002\u9700\u8981\u79fb\u9664\u9ed8\u8ba4\u7684RollingFile\u7684append\uff0c\u589e\u52a0console\u7684appender,\u5982\u4e0b\u6240\u793a\uff1a\n",(0,s.kt)("img",{src:e(97676).Z}),"\nlog4j2.xml \u8def\u5f84 incubator-linkis/linkis-dist/package/conf/log4j2.xml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},' <?xml version="1.0" encoding="UTF-8"?>\n<configuration status="error" monitorInterval="30">\n<appenders>\n    <RollingFile name="RollingFile" append="false" fileName="logs/${sys:serviceName}.log"\n                 filePattern="logs/$${date:yyyy-MM}/${sys:serviceName}/linkis-log-%d{yyyy-MM-dd}-%i.log">\n        <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-40t] %c{1.} (%L) [%M] - %msg%xEx%n"/>\n        <SizeBasedTriggeringPolicy size="100MB"/>\n        <DefaultRolloverStrategy max="10"/>\n    </RollingFile>\n    \n    <Console name="Console" target="SYSTEM_OUT">\n        <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n        <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n    </Console>\n</appenders>\n<loggers>\n    <root level="INFO">\n        <appender-ref ref="RollingFile"/>\n        <appender-ref ref="Console"/>\n    </root>\n</loggers>\n</configuration>\n')),(0,s.kt)("h2",{id:"step-4-\u6574\u4f53\u8c03\u8bd5\u65b9\u6848"},"step 4 \u6574\u4f53\u8c03\u8bd5\u65b9\u6848"),(0,s.kt)("p",null,"Linkis\u548cDSS\u7684\u670d\u52a1\u90fd\u4f9d\u8d56Eureka\uff0c\u6240\u4ee5\u9700\u8981\u9996\u5148\u542f\u52a8Eureka\u670d\u52a1\uff0cEureka\u670d\u52a1\u4e5f\u53ef\u4ee5\u7528\u60a8\u5df2\u7ecf\u542f\u52a8\u7684Eureka\u3002Eureka\u542f\u52a8\u540e\u5c31\u53ef\u4ee5\u542f\u52a8\u5176\u4ed6\u670d\u52a1\u4e86\u3002"),(0,s.kt)("p",null,"\u56e0\u4e3alinkis\u5185\u90e8\u901a\u8fc7-DserviceName\u53c2\u6570\u8bbe\u7f6e\u5e94\u7528\u540d\u4ee5\u53ca\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u4ee5-DserviceName\u662f\u5fc5\u987b\u7684\u542f\u52a8VM\u53c2\u6570 "),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 \u201c-Xbootclasspath/a:\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u201c\u547d\u4ee4\u3002\u5c06\u914d\u7f6e\u6587\u4ef6\uff0c\u8ffd\u52a0\u5230\u5f15\u5bfc\u7a0b\u5e8f\u7c7b\u7684\u641c\u7d22\u8def\u52b2\u672b\u5c3e\uff0c\u5373\u5c06\u4f9d\u8d56\u7684\u914d\u7f6e\u6587\u4ef6\u52a0\u5230classpath\u4e2d"),(0,s.kt)("font",{color:"red"}," \u901a\u8fc7\u52fe\u9009Include\xa0dependencies\xa0with\xa0\u201cProvided\u201d\xa0scope \uff0c\u8fd9\u6837\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Microservice Governance Services\u7ec4\u4ef6")),(0,s.kt)("h3",{id:"linkis-mg-eureka\u7684\u542f\u52a8"},"linkis-mg-eureka\u7684\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.eureka.SpringCloudEurekaApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-eureka -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[Program arguments]\n--spring.profiles.active=eureka --eureka.instance.preferIpAddress=true\n\n[Use classpath of module]\nlinkis-eureka\n")),(0,s.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u9ed8\u8ba4\u768420303\u7aef\u53e3\u53ef\u4ee5\u4fee\u6539\u7aef\u53e3\u914d\u7f6e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"\u6587\u4ef6\u8def\u5f84\uff1aconf/application-eureka.yml\n\u4fee\u6539\u7aef\u53e3\uff1a\nserver:\n  port: 8080 ##\u542f\u52a8\u7684\u7aef\u53e3\n")),(0,s.kt)("h5",{id:"\u5177\u4f53\u914d\u7f6e\u5982\u4e0b"},"\u5177\u4f53\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,s.kt)("p",null," \u8001\u7248idea\u914d\u7f6e\n",(0,s.kt)("img",{src:e(63886).Z}),"\n\u65b0\u7248idea\u914d\u7f6e\n",(0,s.kt)("img",{src:e(25698).Z})),(0,s.kt)("p",null,"\u542f\u52a8\u540e\u53ef\u4ee5\u901a\u8fc7",(0,s.kt)("a",{parentName:"p",href:"http://localhost:20303/"},"http://localhost:20303/")," \u67e5\u770beureka\u670d\u52a1\u5217\u8868\n",(0,s.kt)("img",{src:e(18894).Z})),(0,s.kt)("h3",{id:"linkis-mg-gateway\u7684\u542f\u52a8\u914d\u7f6e"},"linkis-mg-gateway\u7684\u542f\u52a8\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.gateway.springcloud.LinkisGatewayApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-gateway -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[Use classpath of module]\nlinkis-gateway-server-support\n\n")),(0,s.kt)("p",null,"\u6ce8\u610f \u82e5\u51fa\u73b0'org.apache.logging.log4j.LoggingException: log4j-slf4j-impl cannot be present with log4j-to-slf4j' \u95ee\u9898\n\u8bf7exclude\u6389\uff0c\u5bf9spring-boot-starter-logging\u7684\u4f9d\u8d56"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Public Enhancement Services\u7ec4\u4ef6")),(0,s.kt)("h3",{id:"linkis-ps-publicservice\u7684\u542f\u52a8\u914d\u7f6e"},"linkis-ps-publicservice\u7684\u542f\u52a8\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"\n[main Class]\norg.apache.linkis.filesystem.LinkisPublicServiceApp\n\n[VM Opitons]\n-DserviceName=linkis-ps-publicservice -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[Use classpath of module]\n#linkis < 1.1.0  \u4e3alinkis-jobhistory  \n#linkis >= 1.1.0 \u4e3alinkis-storage-script-dev-server\nlinkis-storage-script-dev-server\n")),(0,s.kt)("h3",{id:"linkis-ps-cs\u7684\u542f\u52a8\u914d\u7f6e"},"linkis-ps-cs\u7684\u542f\u52a8\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.cs.server.LinkisCSApplication\n\n[VM Opitons]\n-DserviceName=linkis-ps-cs -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[Use classpath of module]\nlinkis-cs-server\n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Computation Governance Services \u7ec4\u4ef6")),(0,s.kt)("h3",{id:"linkis-cg-linkismanager\u542f\u52a8"},"linkis-cg-linkismanager\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.manager.am.LinkisManagerApplication\n\n[VM Opitons]\n-DserviceName=linkis-cg-linkismanager -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[Use classpath of module]\nlinkis-application-manager\n")),(0,s.kt)("h3",{id:"linkis-cg-entrance\u542f\u52a8"},"linkis-cg-entrance\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.entrance.LinkisEntranceApplication\n\n[VM Opitons]\n-DserviceName=linkis-cg-entrance -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[Use classpath of module]\nlinkis-entrance\n")),(0,s.kt)("h4",null,(0,s.kt)("font",{color:"red"},"\u6ce8\uff1a\u6682\u4e0d\u652f\u6301Windows\u672c\u5730\u8c03\u8bd5\u7684\u670d\u52a1")),(0,s.kt)("p",null,"linkis-cg-engineplugin(ecp)\uff1a\u9700\u8981\u8bfb\u53d6\u672c\u5730\u7684ecp\u7269\u6599\uff0c\u672c\u5730\u8c03\u8bd5\u9700\u8981\u5148\u51c6\u5907\u597d\u5bf9\u5e94\u7684\u7269\u6599\uff0c\u5efa\u8bae\u5728\u8fdc\u7a0b\u8fdb\u884c\u8c03\u8bd5"),(0,s.kt)("p",null,"linkis-cg-engineconnmanager(ecm)\uff1a\u6682\u65f6ecm\u542f\u52a8\u5f15\u64ce\u4f7f\u7528\u7684\u662funix\u7684\u65b9\u5f0f\uff0c\u4e0d\u652f\u6301windows\u73af\u5883"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u4e0b\u9762\u662f\u901a\u8fc7\u6b63\u5e38\u6210\u529f\u5b89\u88c5\u540e\uff0clinkis\u670d\u52a1\u542f\u52a8\u5177\u4f53\u7684\u8be6\u7ec6\u547d\u4ee4\u53c2\u6570 \n\nLinkisInstallDir:\u5b8c\u6574linkis\u7684\u5b89\u88c5\u76ee\u5f55\n\n[linkis-mg-eureka]\nnohup java  -DserviceName=linkis-mg-eureka -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-mg-eureka-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-spring-cloud-services/linkis-mg-eureka/* org.apache.linkis.eureka.SpringCloudEurekaApplication  --eureka.instance.hostname=bdpujes110001 --spring.profiles.active=eureka 2>&1 > /data/LinkisInstallDir/logs/linkis-mg-eureka.out &\n\n[linkis-mg-gateway]\nnohup java  -DserviceName=linkis-mg-gateway -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-mg-gateway-gc.log  -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-spring-cloud-services/linkis-mg-gateway/* org.apache.linkis.gateway.springcloud.LinkisGatewayApplication  2>&1 >  /data/LinkisInstallDir/logs/linkis-mg-gateway.out &\n\n[linkis-ps-publicservice]\nnohup java  -DserviceName=linkis-ps-publicservice -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-ps-publicservice-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-public-enhancements/linkis-ps-publicservice/* org.apache.linkis.jobhistory.LinkisPublicServiceApp  2>&1 > /data/LinkisInstallDir/logs/linkis-ps-publicservice.out &\n\n[linkis-cg-linkismanager]\nnohup java  -DserviceName=linkis-cg-linkismanager -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-linkismanager-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-linkismanager/* org.apache.linkis.manager.am.LinkisManagerApplication  2>&1 > /data/LinkisInstallDir/logs/linkis-cg-linkismanager.out &\n\n[linkis-ps-cs]\nnohup java  -DserviceName=linkis-ps-cs -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-ps-cs-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-public-enhancements/linkis-ps-cs/* org.apache.linkis.cs.server.LinkisCSApplication  2>&1 > /data/LinkisInstallDir/logs/linkis-ps-cs.out &\n\n[linkis-cg-entrance] \nnohup java  -DserviceName=linkis-cg-entrance -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-entrance-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-entrance/* org.apache.linkis.entrance.LinkisEntranceApplication  2>&1 > /data/LinkisInstallDir/logs/linkis-cg-entrance.out &\n\n[linkis-cg-engineconnmanager]\nnohup java  -DserviceName=linkis-cg-engineconnmanager -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-engineconnmanager-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-engineconnmanager/* org.apache.linkis.ecm.server.LinkisECMApplication  2>&1 > /data/LinkisInstallDir/logs/linkis-cg-engineconnmanager.out &\n\n[linkis-cg-engineplugin]\nnohup java  -DserviceName=linkis-cg-engineplugin -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-engineplugin-gc.log   -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir/lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-engineplugin/* org.apache.linkis.engineplugin.server.LinkisEngineConnPluginServer  2>&1 > /data/LinkisInstallDir/logs/linkis-cg-engineplugin.out &\n")),(0,s.kt)("h2",{id:"\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6b65\u9aa4"},"\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6b65\u9aa4"),(0,s.kt)("h3",{id:"1-\u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3"},"1. \u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3"),(0,s.kt)("h4",{id:"11-\u660e\u786e\u9700\u8981\u8c03\u8bd5\u7684\u5305\u6240\u5728\u7684\u670d\u52a1"},"1.1 \u660e\u786e\u9700\u8981\u8c03\u8bd5\u7684\u5305\u6240\u5728\u7684\u670d\u52a1"),(0,s.kt)("p",null,"\u6839\u636e\u9700\u8981\u8c03\u8bd5\u7684\u4ee3\u7801\u4f4d\u7f6e,\u786e\u5b9a\u5176\u6240\u5c5e\u7684\u670d\u52a1"),(0,s.kt)("h4",{id:"12-\u8fdb\u5165linkis_homesbinext\u4fee\u6539\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u8fdc\u7a0b\u8c03\u7528\u7aef\u53e3"},"1.2 \u8fdb\u5165{LINKIS_HOME}/sbin/ext,\u4fee\u6539\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u8fdc\u7a0b\u8c03\u7528\u7aef\u53e3"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/167364775-4f5d2774-b6b9-4a65-b69c-69319db870c4.png",alt:"c-port"}),"  "),(0,s.kt)("h3",{id:"2-\u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1"},"2. \u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1"),(0,s.kt)("p",null,"sh linkis-daemon.sh restart ps-publicservice(\u5982\u679c\u4e0d\u786e\u5b9a\u670d\u52a1\u540d\u79f0,\u5728 {LINKIS_HOME}/sbin/linkis-start-all.sh \u5185\u67e5\u8be2)"),(0,s.kt)("h3",{id:"3-\u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5"},"3. \u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5"),(0,s.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\u6253\u5f00\u7a97\u53e3\u5e76\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5\u7684\u7aef\u53e3,\u670d\u52a1,\u4ee5\u53ca\u6a21\u5757",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/167364896-29805938-157f-47a2-baf4-f52cb63c64d1.png",alt:"c-debug"}),"  "),(0,s.kt)("h3",{id:"4-\u5f00\u59cb\u8c03\u8bd5"},"4. \u5f00\u59cb\u8c03\u8bd5"),(0,s.kt)("p",null,"\u70b9\u51fb\u8c03\u8bd5\u6309\u94ae,\u51fa\u73b0\u5982\u4e0b\u4fe1\u606f\u4ee3\u8868\u53ef\u4ee5\u5f00\u59cb\u8c03\u8bd5",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/163559920-05aba3c3-b146-4f62-8e20-93f94a65158d.png",alt:"\u4f01\u4e1a\u5fae\u4fe1\u622a\u56fe_16500167527083"})))}g.isMDXComponent=!0},25698:function(n,i,e){i.Z=e.p+"assets/images/debug_application-86cec1114b39f4b3062a9ee0f012f70c.png"},18894:function(n,i,e){i.Z=e.p+"assets/images/debug_eureka-37fd89e3fa3b354ee4dcf046e847fd12.png"},97676:function(n,i,e){i.Z=e.p+"assets/images/debug_log-0a9fd2e59cff71b638015d97369aa9ea.png"},63886:function(n,i,e){i.Z=e.p+"assets/images/old_debug_application-8bd21502f361681df983dff4c53af2e5.png"}}]);