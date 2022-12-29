"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[12895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5fae\u670d\u52a1\u79df\u6237\u9694\u79bb\u67b6\u6784\u8bbe\u8ba1",sidebar_position:9},i=void 0,u={unversionedId:"architecture/service-architecture/service_isolation",id:"architecture/service-architecture/service_isolation",title:"\u5fae\u670d\u52a1\u79df\u6237\u9694\u79bb\u67b6\u6784\u8bbe\u8ba1",description:"1. \u603b\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/service-architecture/service_isolation.md",sourceDirName:"architecture/service-architecture",slug:"/architecture/service-architecture/service_isolation",permalink:"/zh-CN/docs/1.3.1/architecture/service-architecture/service_isolation",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/service-architecture/service_isolation.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u5fae\u670d\u52a1\u79df\u6237\u9694\u79bb\u67b6\u6784\u8bbe\u8ba1",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5173\u67b6\u6784",permalink:"/zh-CN/docs/1.3.1/architecture/service-architecture/gateway"},next:{title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.3.1/architecture/feature/commons/variable"}},o={},c=[{value:"1. \u603b\u8ff0",id:"1-\u603b\u8ff0",level:2},{value:"1.1 \u9700\u6c42\u80cc\u666f",id:"11-\u9700\u6c42\u80cc\u666f",level:3},{value:"1.2 \u76ee\u6807",id:"12-\u76ee\u6807",level:3},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",level:2},{value:"2.1 \u6280\u672f\u67b6\u6784",id:"21-\u6280\u672f\u67b6\u6784",level:3},{value:"2.2 \u4e1a\u52a1\u67b6\u6784",id:"22-\u4e1a\u52a1\u67b6\u6784",level:3},{value:"3. \u6a21\u5757\u8bbe\u8ba1",id:"3-\u6a21\u5757\u8bbe\u8ba1",level:2},{value:"3.1 \u6838\u5fc3\u6267\u884c\u6d41\u7a0b",id:"31-\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",level:3},{value:"4. \u6570\u636e\u7ed3\u6784\uff1a",id:"4-\u6570\u636e\u7ed3\u6784",level:2},{value:"5. \u5982\u4f55\u4f7f\u7528\uff1a",id:"5-\u5982\u4f55\u4f7f\u7528",level:2},{value:"5.1 add route label for entrance",id:"51-add-route-label-for-entrance",level:3},{value:"5.2 Use route label",id:"52-use-route-label",level:3},{value:"5.3 Use non-existing label",id:"53-use-non-existing-label",level:3},{value:"5.4 without label",id:"54-without-label",level:3},{value:"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1\uff1a",id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1",level:2},{value:"6.1 \u5b89\u5168",id:"61-\u5b89\u5168",level:3},{value:"6.2 \u6027\u80fd",id:"62-\u6027\u80fd",level:3},{value:"6.3 \u5bb9\u91cf",id:"63-\u5bb9\u91cf",level:3},{value:"6.4 \u9ad8\u53ef\u7528",id:"64-\u9ad8\u53ef\u7528",level:3}],s={toc:c};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u603b\u8ff0"},"1. \u603b\u8ff0"),(0,r.kt)("h3",{id:"11-\u9700\u6c42\u80cc\u666f"},"1.1 \u9700\u6c42\u80cc\u666f"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u5728Gateway\u8fdb\u884c\u670d\u52a1\u8f6c\u53d1\u65f6\u662f\u57fa\u4e8eribbon\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u60c5\u51b5\u4e0b\u5b58\u5728\u4e00\u4e9b\u91cd\u8981\u4e1a\u52a1\u7684\u4efb\u52a1\u5e0c\u671b\u505a\u5230\u670d\u52a1\u7ea7\u522b\u7684\u9694\u79bb\uff0c\u5982\u679c\u57fa\u4e8eribbon\u8fdb\u884c\u670d\u52a1\u5728\u5747\u8861\u5c31\u4f1a\u5b58\u5728\u95ee\u9898\u3002\u6bd4\u5982\u79df\u6237A\u5e0c\u671b\u4ed6\u7684\u4efb\u52a1\u90fd\u8def\u7531\u5230\u7279\u5b9a\u7684Linkis-CG-Entrance\u670d\u52a1\uff0c\u8fd9\u6837\u5f53\u5176\u4ed6\u7684\u5b9e\u4f8b\u51fa\u73b0\u5f02\u5e38\u65f6\u53ef\u4ee5\u4e0d\u4f1a\u5f71\u54cd\u5230A\u670d\u52a1\u7684Entrance\u3002\n","\xa0","\xa0","\xa0","\xa0","\xa0","\u53e6\u5916\u652f\u6301\u670d\u52a1\u7684\u79df\u6237\u53ca\u9694\u79bb\u4e5f\u53ef\u4ee5\u505a\u5230\u5feb\u901f\u9694\u79bb\u67d0\u4e2a\u5f02\u5e38\u670d\u52a1\uff0c\u652f\u6301\u7070\u5ea6\u5347\u7ea7\u7b49\u573a\u666f\u3002"),(0,r.kt)("h3",{id:"12-\u76ee\u6807"},"1.2 \u76ee\u6807"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301\u901a\u8fc7\u89e3\u6790\u8bf7\u6c42\u7684\u6807\u7b7e\u6309\u7167\u8def\u7531\u6807\u7b7e\u5bf9\u670d\u52a1\u8fdb\u884c\u8f6c\u53d1"),(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301\u670d\u52a1\u7684\u6807\u7b7e\u6ce8\u518c\u548c\u4fee\u6539")),(0,r.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u6b64\u6b21\u7279\u6027\u65b0\u589e\u4e3b\u8981\u4fee\u6539\u70b9\u4f4dlinkis-mg-gateway\u548cinstance-label\u4e24\u4e2a\u6a21\u5757\uff0c\u8bbe\u8ba1\u5230\u65b0\u589eGateway\u7684\u8f6c\u53d1\u903b\u8f91\uff0c\u4ee5\u53cainstance-label\u652f\u6301\u670d\u52a1\u548c\u6807\u7b7e\u7684\u6ce8\u518c\u3002"),(0,r.kt)("h3",{id:"21-\u6280\u672f\u67b6\u6784"},"2.1 \u6280\u672f\u67b6\u6784"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u6574\u4f53\u6280\u672f\u67b6\u6784\u4e3b\u8981\u4fee\u6539\u70b9\u4f4dRestFul\u8bf7\u6c42\u9700\u8981\u5e26\u4e0a\u8def\u7531\u6807\u7b7e\u7b49\u6807\u7b7e\u53c2\u6570\u4fe1\u606f\uff0c\u7136\u540e\u5728Gateway\u8fdb\u884c\u8f6c\u53d1\u65f6\u4f1a\u89e3\u6790\u5bf9\u5e94\u7684\u6807\u7b7e\u5b8c\u6210\u63a5\u53e3\u7684\u8def\u7531\u8f6c\u53d1\u3002\u6574\u4f53\u5982\u4e0b\u56fe\u6240\u793a\n",(0,r.kt)("img",{alt:"arc",src:n(61186).Z,width:"1341",height:"679"})),(0,r.kt)("p",null,"\u51e0\u70b9\u8bf4\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5bf9\u5e94\u7684\u670d\u52a1\u6253\u4e0a\u4e86\u540c\u4e00\u4e2aroteLabel\u5219\u968f\u673a\u8f6c\u53d1"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5bf9\u5e94\u7684routeLabel\u6ca1\u6709\u5bf9\u5e94\u7684\u670d\u52a1\uff0c\u5219\u63a5\u53e3\u76f4\u63a5\u5931\u8d25"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u63a5\u53e3\u6ca1\u6709routeLabel\u5219\u57fa\u4e8e\u539f\u6709\u7684\u8f6c\u53d1\u903b\u8f91\uff0c\u4e0d\u4f1a\u8def\u7531\u5230\u6253\u4e0a\u4e86\u7279\u5b9a\u6807\u7b7e\u7684\u670d\u52a1")),(0,r.kt)("h3",{id:"22-\u4e1a\u52a1\u67b6\u6784"},"2.2 \u4e1a\u52a1\u67b6\u6784"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u6b64\u6b21\u7684\u7279\u6027\u4e3b\u8981\u662f\u4e3a\u4e86\u5b8c\u6210Restful\u79df\u6237\u9694\u79bb\u8f6c\u53d1\u529f\u80fd\u3002\u529f\u80fd\u70b9\u8bbe\u8ba1\u7684\u6a21\u5757\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e00\u7ea7\u6a21\u5757"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e8c\u7ea7\u6a21\u5757"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:null},"MG"),(0,r.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e3\u6790restful\u8bf7\u6c42\u53c2\u6570\u4e2d\u7684\u8def\u7531\u6807\u7b7e\uff0c\u5b8c\u6210\u63a5\u53e3\u6309\u7167\u8def\u7531\u6807\u7b7e\u7684\u8f6c\u53d1\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:null},"PS"),(0,r.kt)("td",{parentName:"tr",align:null},"InstanceLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"InstanceLabel\u670d\u52a1\uff0c\u5b8c\u6210\u670d\u52a1\u548c\u6807\u7b7e\u7684\u5173\u8054")))),(0,r.kt)("h2",{id:"3-\u6a21\u5757\u8bbe\u8ba1"},"3. \u6a21\u5757\u8bbe\u8ba1"),(0,r.kt)("h3",{id:"31-\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"},"3.1 \u6838\u5fc3\u6267\u884c\u6d41\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[\u8f93\u5165\u7aef]"," \u8f93\u5165\u7aef\u4e3a\u8bf7\u6c42Gatway\u7684restful\u8bf7\u6c42\uff0c\u4e14\u662f\u53c2\u6570\u4e2d\u5f85\u7528roure label\u7684\u8bf7\u6c42\u624d\u4f1a\u8fdb\u884c\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"[\u5904\u7406\u6d41\u7a0b]"," Gateway\u4f1a\u5224\u65ad\u8bf7\u6c42\u662f\u5426\u5e26\u6709\u5bf9\u5e94\u7684RouteLabel\uff0c\u5982\u679c\u5b58\u5728\u5219\u57fa\u4e8eRouteLabel\u6765\u8fdb\u884c\u8f6c\u53d1\u3002\n\u8c03\u7528\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Time",src:n(61300).Z,width:"710",height:"519"})),(0,r.kt)("h2",{id:"4-\u6570\u636e\u7ed3\u6784"},"4. \u6570\u636e\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS `linkis_ps_instance_label`;\nCREATE TABLE `linkis_ps_instance_label` (\n  `id` int(20) NOT NULL AUTO_INCREMENT,\n  `label_key` varchar(32) COLLATE utf8_bin NOT NULL COMMENT 'string key',\n  `label_value` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'string value',\n  `label_feature` varchar(16) COLLATE utf8_bin NOT NULL COMMENT 'store the feature of label, but it may be redundant',\n  `label_value_size` int(20) NOT NULL COMMENT 'size of key -> value map',\n  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `label_key_value` (`label_key`,`label_value`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\nDROP TABLE IF EXISTS `linkis_ps_instance_info`;\nCREATE TABLE `linkis_ps_instance_info` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'structure like ${host|machine}:${port}',\n  `name` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'equal application name in registry',\n  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create unix timestamp',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `instance` (`instance`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\nDROP TABLE IF EXISTS `linkis_ps_instance_label_relation`;\nCREATE TABLE `linkis_ps_instance_label_relation` (\n  `id` int(20) NOT NULL AUTO_INCREMENT,\n  `label_id` int(20) DEFAULT NULL COMMENT 'id reference linkis_ps_instance_label -> id',\n  `service_instance` varchar(128) NOT NULL COLLATE utf8_bin COMMENT 'structure like ${host|machine}:${port}',\n  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'update unix timestamp',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create unix timestamp',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n")),(0,r.kt)("h2",{id:"5-\u5982\u4f55\u4f7f\u7528"},"5. \u5982\u4f55\u4f7f\u7528\uff1a"),(0,r.kt)("h3",{id:"51-add-route-label-for-entrance"},"5.1 add route label for entrance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'echo "spring.eureka.instance.metadata-map.route=et1" >> $LINKIS_CONF_DIR/linkis-cg-entrance.properties \nsh  $LINKIS_HOME/sbin/linkis-damemon.sh restart cg-entrance\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Time",src:n(61300).Z,width:"710",height:"519"})),(0,r.kt)("h3",{id:"52-use-route-label"},"5.2 Use route label"),(0,r.kt)("p",null,"submit task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'url:/api/v1/entrance/submit\n{\n    "executionContent": {"code": "echo 1", "runType":  "shell"},\n    "params": {"variable": {}, "configuration": {}},\n    "source":  {"scriptPath": "ip"},\n    "labels": {\n        "engineType": "shell-1",\n        "userCreator": "peacewong-IDE",\n        "route": "et1"\n    }\n}\n')),(0,r.kt)("p",null,"will be routed to a fixed service\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 45158,\n        "execID": "exec_id018030linkis-cg-entrancelocalhost:9205IDE_peacewong_shell_0"\n    }\n}\n')),(0,r.kt)("p",null,"or linkis-cli:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sh bin/linkis-cli -submitUser  hadoop  -engineType shell-1 -codeType shell  -code "whoami" -labelMap route=et1 --gatewayUrl http://127.0.0.1:9101\n')),(0,r.kt)("h3",{id:"53-use-non-existing-label"},"5.3 Use non-existing label"),(0,r.kt)("p",null,"submit task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'url:/api/v1/entrance/submit\n{\n    "executionContent": {"code": "echo 1", "runType":  "shell"},\n    "params": {"variable": {}, "configuration": {}},\n    "source":  {"scriptPath": "ip"},\n    "labels": {\n        "engineType": "shell-1",\n        "userCreator": "peacewong-IDE",\n        "route": "et1"\n    }\n}\n')),(0,r.kt)("p",null,"will get the error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "method": "/api/rest_j/v1/entrance/submit",\n    "status": 1,\n    "message": "GatewayErrorException: errCode: 11011 ,desc: Cannot route to the corresponding service, URL: /api/rest_j/v1/entrance/submit RouteLabel: [{\\"stringValue\\":\\"et2\\",\\"labelKey\\":\\"route\\",\\"feature\\":null,\\"modifiable\\":true,\\"featureKey\\":\\"feature\\",\\"empty\\":false}] ,ip: localhost ,port: 9101 ,serviceKind: linkis-mg-gateway",\n    "data": {\n        "data": "{\\r\\n    \\"executionContent\\": {\\"code\\": \\"echo 1\\", \\"runType\\":  \\"shell\\"},\\r\\n    \\"params\\": {\\"variable\\": {}, \\"configuration\\": {}},\\r\\n    \\"source\\":  {\\"scriptPath\\": \\"ip\\"},\\r\\n    \\"labels\\": {\\r\\n        \\"engineType\\": \\"shell-1\\",\\r\\n        \\"userCreator\\": \\"peacewong-IDE\\",\\r\\n        \\"route\\": \\"et2\\"\\r\\n    }\\r\\n}"\n    }\n}\n')),(0,r.kt)("h3",{id:"54-without-label"},"5.4 without label"),(0,r.kt)("p",null,"submit task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'url:/api/v1/entrance/submit\n{\n    "executionContent": {"code": "echo 1", "runType":  "shell"},\n    "params": {"variable": {}, "configuration": {}},\n    "source":  {"scriptPath": "ip"},\n    "labels": {\n        "engineType": "shell-1",\n        "userCreator": "peacewong-IDE"\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nwill route to untagged entranceservices\n{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 45159,\n        "execID": "exec_id018018linkis-cg-entrancelocalhost2:9205IDE_peacewong_shell_0"\n    }\n}\n\n')),(0,r.kt)("h2",{id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1"},"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1\uff1a"),(0,r.kt)("h3",{id:"61-\u5b89\u5168"},"6.1 \u5b89\u5168"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca\u5b89\u5168\u95ee\u9898\uff0crestful\u9700\u8981\u767b\u5f55\u8ba4\u8bc1"),(0,r.kt)("h3",{id:"62-\u6027\u80fd"},"6.2 \u6027\u80fd"),(0,r.kt)("p",null,"\u5bf9Gateway\u8f6c\u53d1\u6027\u80fd\u5f71\u54cd\u8f83\u5c0f\uff0c\u6709\u7f13\u5b58\u76f8\u5e94\u7684label\u548cinstance\u7684\u6570\u636e"),(0,r.kt)("h3",{id:"63-\u5bb9\u91cf"},"6.3 \u5bb9\u91cf"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h3",{id:"64-\u9ad8\u53ef\u7528"},"6.4 \u9ad8\u53ef\u7528"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"))}p.isMDXComponent=!0},61186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service_isolation_arc-26d9a3fbd9716c27367293e47738ff13.png"},61300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/service_isolation_time-537a90a7dc1d8cb4531074f4fdecce12.png"}}]);