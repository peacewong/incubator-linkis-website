"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[78219],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=l,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={title:"Seatunnel",sidebar_position:13},i=void 0,o={unversionedId:"engine-usage/seatunnel",id:"engine-usage/seatunnel",title:"Seatunnel",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0cSeatunnel \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/seatunnel.md",sourceDirName:"engine-usage",slug:"/engine-usage/seatunnel",permalink:"/zh-CN/docs/1.3.1/engine-usage/seatunnel",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/seatunnel.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Seatunnel",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Trino",permalink:"/zh-CN/docs/1.3.1/engine-usage/trino"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.1/api/overview"}},p={},s=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"1.1 \u5f15\u64ce\u5b89\u88c5",id:"11-\u5f15\u64ce\u5b89\u88c5",level:3},{value:"1.2 \u5f15\u64ce\u73af\u5883\u9a8c\u8bc1",id:"12-\u5f15\u64ce\u73af\u5883\u9a8c\u8bc1",level:3},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72",id:"2-\u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72",level:2},{value:"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09\u975e\u9ed8\u8ba4\u5f15\u64ce",id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce",level:3},{value:"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",level:3},{value:"2.3 \u5f15\u64ce\u5237\u65b0",id:"23-\u5f15\u64ce\u5237\u65b0",level:3},{value:"2.3.1 \u91cd\u542f\u5237\u65b0",id:"231-\u91cd\u542f\u5237\u65b0",level:4},{value:"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",level:3},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.2 \u901a\u8fc7 OnceEngineConn \u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7-onceengineconn-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",level:2},{value:"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",level:3},{value:"4.2 \u914d\u7f6e\u4fee\u6539",id:"42-\u914d\u7f6e\u4fee\u6539",level:3},{value:"4.2.1 \u5ba2\u6237\u7aef\u914d\u7f6e\u53c2\u6570",id:"421-\u5ba2\u6237\u7aef\u914d\u7f6e\u53c2\u6570",level:4},{value:"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",level:4}],u={toc:s};function c(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Seatunnel")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,l.kt)("h3",{id:"11-\u5f15\u64ce\u5b89\u88c5"},"1.1 \u5f15\u64ce\u5b89\u88c5"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u4e0a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Seatunnel")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Seatunnel")," \u5f15\u64ce\u3002\u800c\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"Seatunnel")," \u662f\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"Spark")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Flink")," \u73af\u5883\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-seatunnel")," \u5f15\u64ce\u524d\uff0c\u5f3a\u70c8\u5efa\u8bae\u672c\u5730\u8dd1\u901a ",(0,l.kt)("inlineCode",{parentName:"p"},"Seatunnel")," \u73af\u5883\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Seatunnel 2.1.2")," \u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://dlcdn.apache.org/incubator/seatunnel/2.1.2/apache-seatunnel-incubating-2.1.2-bin.tar.gz"},"https://dlcdn.apache.org/incubator/seatunnel/2.1.2/apache-seatunnel-incubating-2.1.2-bin.tar.gz")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEATUNNEL_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"Seatunnel\u5b89\u88c5\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SPARK_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"Spark\u5b89\u88c5\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"Seatunnel\u6267\u884c\u57fa\u4e8eSpark\u5c31\u9700\u8981")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLINK_HOME"),(0,l.kt)("td",{parentName:"tr",align:null},"Flink\u5b89\u88c5\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"Seatunnel\u6267\u884c\u57fa\u4e8eFlink\u5c31\u9700\u8981")))),(0,l.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Linkis\u53d8\u91cf\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.engine.seatunnel.plugin.home"),(0,l.kt)("td",{parentName:"tr",align:null},"Seatunnel\u5b89\u88c5\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,l.kt)("h3",{id:"12-\u5f15\u64ce\u73af\u5883\u9a8c\u8bc1"},"1.2 \u5f15\u64ce\u73af\u5883\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Spark")," \u4efb\u52a1\u4e3a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd $SEATUNNEL_HOME\n./bin/start-seatunnel-spark.sh --master local[4] --deploy-mode client --config ./config/spark.batch.conf.template\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(69994).Z,width:"1014",height:"515"})),(0,l.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72"},"2. \u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72"),(0,l.kt)("h3",{id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce"},"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09",(0,l.kt)("a",{parentName:"h3",href:"/zh-CN/docs/1.3.1/engine-usage/overview"},"\u975e\u9ed8\u8ba4\u5f15\u64ce")),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u76f4\u63a5\u4e0b\u8f7d\u5f15\u64ce\u63d2\u4ef6\u5305"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u4e0b\u8f7d")),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u5355\u72ec\u7f16\u8bd1\u5f15\u64ce\u63d2\u4ef6\uff08\u9700\u8981\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"maven")," \u73af\u5883\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u7f16\u8bd1\ncd ${linkis_code_dir}/linkis-engineconn-plugins/seatunnel/\nmvn clean install\n# \u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\uff0c\u4f4d\u4e8e\u5982\u4e0b\u76ee\u5f55\u4e2d\n${linkis_code_dir}/linkis-engineconn-plugins/seatunnel/target/out/\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,l.kt)("h3",{id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"},"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"),(0,l.kt)("p",null,"\u5c06 2.1 \u4e2d\u7684\u5f15\u64ce\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,l.kt)("p",null,"\u4e0a\u4f20\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 seatunnel\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 v2.1.2\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 lib\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugin\n\u2502\xa0\xa0     \u2514\u2500\u2500 2.1.2\n")),(0,l.kt)("h3",{id:"23-\u5f15\u64ce\u5237\u65b0"},"2.3 \u5f15\u64ce\u5237\u65b0"),(0,l.kt)("h4",{id:"231-\u91cd\u542f\u5237\u65b0"},"2.3.1 \u91cd\u542f\u5237\u65b0"),(0,l.kt)("p",null,"\u901a\u8fc7\u91cd\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," \u670d\u52a1\u5237\u65b0\u5f15\u64ce"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,l.kt)("h3",{id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"},"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"),(0,l.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," \u8fd9\u5f20\u8868\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"last_update_time")," \u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230 `linkis` \u7684\u6570\u636e\u5e93 \nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,l.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,l.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli --mode once -code \'test\'  -engineType seatunnel-2.1.2 -codeType sspark  -labelMap userCreator=hadoop-seatunnel -labelMap engineConnMode=once -jobContentMap code=\'env {\n   spark.app.name = "SeaTunnel"\n   spark.executor.instances = 2\n   spark.executor.cores = 1\n   spark.executor.memory = "1g"\n   }\n   source { \n     Fake {\n       result_table_name = "my_dataset"\n     }\n   }\n   transform {}\n   sink {Console {}}\' -jobContentMap master=local[4] -jobContentMap deploy-mode=client -sourceMap jobName=OnceJobTest  -submitUser hadoop -proxyUser hadoop\n')),(0,l.kt)("h3",{id:"32-\u901a\u8fc7-onceengineconn-\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7 OnceEngineConn \u63d0\u4ea4\u4efb\u52a1"),(0,l.kt)("p",null,"OnceEngineConn \u901a\u8fc7 LinkisManagerClient \u8c03\u7528 LinkisManager \u7684 createEngineConn \u63a5\u53e3\uff0c\u5e76\u5c06\u4ee3\u7801\u53d1\u9001\u5230\u521b\u5efa\u7684 Seatunnel \u5f15\u64ce\uff0c\u7136\u540e Seatunnel \u5f15\u64ce\u5f00\u59cb\u6267\u884c\u3002 Client \u7684\u4f7f\u7528\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 maven \u9879\u76ee\uff0c\u6216\u8005\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.computation.client;\nimport org.apache.linkis.common.conf.Configuration;\nimport org.apache.linkis.computation.client.once.simple.SubmittableSimpleOnceJob;\nimport org.apache.linkis.computation.client.utils.LabelKeyUtils;\npublic class SeatunnelOnceJobTest {\n    public static void main(String[] args) {\n        LinkisJobClient.config().setDefaultServerUrl("http://ip:9001");\n        String code =\n                "\\n"\n                        + "env {\\n"\n                        + "  spark.app.name = \\"SeaTunnel\\"\\n"\n                        + "  spark.executor.instances = 2\\n"\n                        + "  spark.executor.cores = 1\\n"\n                        + "  spark.executor.memory = \\"1g\\"\\n"\n                        + "}\\n"\n                        + "\\n"\n                        + "source {\\n"\n                        + "  Fake {\\n"\n                        + "    result_table_name = \\"my_dataset\\"\\n"\n                        + "  }\\n"\n                        + "\\n"\n                        + "}\\n"\n                        + "\\n"\n                        + "transform {\\n"\n                        + "}\\n"\n                        + "\\n"\n                        + "sink {\\n"\n                        + "  Console {}\\n"\n                        + "}";\n        SubmittableSimpleOnceJob onceJob =\n                LinkisJobClient.once()\n                        .simple()\n                        .builder()\n                        .setCreateService("seatunnel-Test")\n                        .setMaxSubmitTime(300000)\n                        .addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY(), "seatunnel-2.1.2")\n                        .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY(), "hadoop-seatunnel")\n                        .addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY(), "once")\n                        .addStartupParam(Configuration.IS_TEST_MODE().key(), true)\n                        .addExecuteUser("hadoop")\n                        .addJobContent("runType", "sspark")\n                        .addJobContent("code", code)\n                        .addJobContent("master", "local[4]")\n                        .addJobContent("deploy-mode", "client")\n                        .addSource("jobName", "OnceJobTest")\n                        .build();\n        onceJob.submit();\n        System.out.println(onceJob.getId());\n        onceJob.waitForCompleted();\n        System.out.println(onceJob.getStatus());\n        LinkisJobMetrics jobMetrics = onceJob.getJobMetrics();\n        System.out.println(jobMetrics.getMetrics());\n    }\n}\n')),(0,l.kt)("h2",{id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("h3",{id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"},"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.engine.seatunnel.plugin.home"),(0,l.kt)("td",{parentName:"tr",align:null},"/opt/linkis/seatunnel"),(0,l.kt)("td",{parentName:"tr",align:null},"Seatunnel\u5b89\u88c5\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"42-\u914d\u7f6e\u4fee\u6539"},"4.2 \u914d\u7f6e\u4fee\u6539"),(0,l.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2d\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e"),(0,l.kt)("h4",{id:"421-\u5ba2\u6237\u7aef\u914d\u7f6e\u53c2\u6570"},"4.2.1 \u5ba2\u6237\u7aef\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli --mode once -code \'test\'  \\\n-engineType seatunnel-2.1.2 -codeType sspark  \\\n-labelMap userCreator=hadoop-seatunnel -labelMap engineConnMode=once \\\n-jobContentMap code=\'env {\n   spark.app.name = "SeaTunnel"\n   spark.executor.instances = 2\n   spark.executor.cores = 1\n   spark.executor.memory = "1g"\n   }\n   source { \n     Fake {\n       result_table_name = "my_dataset"\n     }\n   }\n   transform {}\n   sink {Console {}}\' -jobContentMap master=local[4] \\\n   -jobContentMap deploy-mode=client \\\n   -sourceMap jobName=OnceJobTest  \\\n   -runtimeMap wds.linkis.engine.seatunnel.plugin.home=/opt/linkis/seatunnel \\\n   -submitUser hadoop -proxyUser hadoop \n')),(0,l.kt)("h4",{id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,l.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": \'env {\n    spark.app.name = "SeaTunnel"\n    spark.executor.instances = 2\n    spark.executor.cores = 1\n    spark.executor.memory = "1g"\n    }\n    source { \n        Fake {\n            result_table_name = "my_dataset"\n        }\n    }\n    transform {}\n    sink {Console {}}\', \n    "runType":  "sql"},\n    "params": {\n        "variable": {},\n        "configuration": {\n                "runtime": {\n                    "wds.linkis.engine.seatunnel.plugin.home":"/opt/linkis/seatunnel"\n                    }\n                }\n        },\n    "labels": {\n        "engineType": "seatunnel-2.1.2",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')))}c.isMDXComponent=!0},69994:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/check-seatunnel-eb158e0b946d2e55b7bfac3b90b0448b.png"}}]);