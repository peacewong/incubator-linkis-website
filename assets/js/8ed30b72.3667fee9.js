"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[15110],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(i),h=n,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return i?a.createElement(k,l(l({ref:t},p),{},{components:i})):a.createElement(k,l({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=i[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},36576:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=i(87462),n=i(63366),r=(i(67294),i(3905)),l=["components"],o={title:"Release Notes 1.1.3",sidebar_position:.2},s=void 0,u={unversionedId:"release-notes-1.1.3",id:"release-notes-1.1.3",title:"Release Notes 1.1.3",description:"Apache Linkis(incubating) 1.1.3 includes all of Project Linkis-1.1.3.",source:"@site/download/release-notes-1.1.3.md",sourceDirName:".",slug:"/release-notes-1.1.3",permalink:"/download/release-notes-1.1.3",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/download/release-notes-1.1.3.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"Release Notes 1.1.3",sidebar_position:.2},sidebar:"defaultSidebar",previous:{title:"Release Notes 1.2.0",permalink:"/download/release-notes-1.2.0"},next:{title:"Release Notes 1.1.2",permalink:"/download/release-notes-1.1.2"}},p=[{value:"New Feature",id:"new-feature",children:[],level:2},{value:"Enhancement",id:"enhancement",children:[],level:2},{value:"Bugs Fix",id:"bugs-fix",children:[],level:2},{value:"Security related",id:"security-related",children:[],level:2},{value:"Dependency changes",id:"dependency-changes",children:[],level:2},{value:"Thanks",id:"thanks",children:[],level:2}],c={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.1.3 includes all of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/19"},"Project Linkis-1.1.3"),"."),(0,r.kt)("p",null,"This release mainly integrates Prometheus to provide the basic capability of monitoring on linkis microservice; add task retries parameter for task submission; add records for the relationship between tasks and execution EC; Flink engine supports downloading Yarn logs to EC log directory; front-end page Support watermark; upgrade some security vulnerability components, etc.; fix known bugs reported by the community."),(0,r.kt)("p",null,"The main functions are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integrate prometheus to provide basic capability of monitoring on linkis microservice"),(0,r.kt)("li",{parentName:"ul"},"Task submission supports the parameter of the number of task retries"),(0,r.kt)("li",{parentName:"ul"},"Flink engine supports downloading Yarn logs to EC log directory"),(0,r.kt)("li",{parentName:"ul"},"Some dependency package upgrades and community-known bug fixes")),(0,r.kt)("p",null,"Abbreviations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"COMMON: Linkis Common"),(0,r.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,r.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,r.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,r.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,r.kt)("li",{parentName:"ul"},"LM: Linkis Manager"),(0,r.kt)("li",{parentName:"ul"},"PS: Linkis Public Service"),(0,r.kt)("li",{parentName:"ul"},"PE: Linkis Public Enhancement"),(0,r.kt)("li",{parentName:"ul"},"RPC: Linkis Common RPC"),(0,r.kt)("li",{parentName:"ul"},"CG: Linkis Computation Governance")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"new-feature"},"New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1656"},"[Linkis-1656]")," Integrate prometheus to provide basic capability for linkis microservice monitoring"),(0,r.kt)("li",{parentName:"ul"},"[","EC-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2241"},"[Linkis-2241]")," Add Yarn Log Operator to support downloading Yarn logs to EC log directory"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2108"},"[Linkis-2235]")," Front-end page supports watermark"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2164"},"[Linkis-2164]")," Entrance supports the parameter of task retry times"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2163"},"[Linkis-2163]")," Add task and execution EC records, EC information is recorded in the task's Metrics field")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2243"},"[Linkis-2243]")," Optimize the newly registered ECM service, optimize the service load selection logic, reduce the possible impact of new service availability issues"),(0,r.kt)("li",{parentName:"ul"},"[","PS-Jobhistory]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2198"},"[Linkis-2198]")," Optimize task code cache file name, increase time format length, to avoid conflicts in long tasks execution"),(0,r.kt)("li",{parentName:"ul"},"[","EC-Python]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2175"},"[Linkis-2175]")," Add py4j watchdog thread to monitor java process, preventing the case that java process quit abnormally, while python process doesn't quite"),(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2150"},"[Linkis-2150]")," Both common and entry modules have custom variable substitution logic, thus merge them into the common module as optimization"),(0,r.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2142"},"[Linkis-2142]")," Fix the problem that the JDBC Engine console configuration cannot take effect immediately after modification (cache time is adjusted to configurable item)"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2160"},"[Linkis-2160]")," The consumption queue for task submission supports configuring specific high-volume users"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2200"},"[Linkis-2200]")," Tag code optimization, remove the persistence of tag key-value"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1749"},"[Linkis-1749]")," When EC starts, make it possible to limit the port segment of the specified service through parameters"),(0,r.kt)("li",{parentName:"ul"},"[","Common-Storage]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2168"},"[Linkis-2168]")," File type in FileSource supports variable configuration"),(0,r.kt)("li",{parentName:"ul"},"[","Common-Storage]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2161"},"[Linkis-2161]")," Added support for formatting parameters automatically when exporting the result set to an excel file"),(0,r.kt)("li",{parentName:"ul"},"[","Gateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2249"},"[Linkis-2249]")," Optimize the gateway's Parser logic code"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2248"},"[Linkis-2248]")," User resource display page is sorted by user and creator"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2108"},"[Linkis-2108]")," Optimize the front-end page layout, unify the basic style, and optimize the secondary menu display"),(0,r.kt)("li",{parentName:"ul"},"[","Install]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2319"},"[Linkis-2319]")," Adjust the datasource service deployment mode, and it is enabled by default; when installing, configure the initial login password"),(0,r.kt)("li",{parentName:"ul"},"[","Install]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2421"},"[Linkis-2421]")," When installing and deploying, configure kerberos-related authentication information"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2159"},"[Linkis-2159]")," EC log log supports scrolling by size and time"),(0,r.kt)("li",{parentName:"ul"},"[","Common-Scheduler]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2272"},"[Linkis-2272]")," Optimized code format and added LoopArray unit test"),(0,r.kt)("li",{parentName:"ul"},"[","PS-ContextService]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2234"},"[Linkis-2234]")," Added a method for batch cleaning context values \u200b\u200bin contextservice")),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2275"},"[Linkis-2275]")," Fix the problem that the EC engine heartbeat report log feild is too long in abnormal scenarios to cause storage failure"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2239"},"[Linkis-2239]")," Fix yarm queue resource idle/busy state usage ratio ring chart is not displayed correctly"),(0,r.kt)("li",{parentName:"ul"},"[","PS-ContextService]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2226"},"[Linkis-2226]")," Fix FileReader and BufferedReader resources not released in final"),(0,r.kt)("li",{parentName:"ul"},"[","Install]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2203"},"[Linkis-2203]")," The problem of shell script authorization +x permission failure occurs when compiling in different systems"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2237"},"[Linkis-2237]")," Refactor JobQueueLabel and JobRunningLabel, fix task queue label and task running label bug"),(0,r.kt)("li",{parentName:"ul"},"[","Build]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2354"},"[Linkis-2354]")," Fix the ERROR level warning problem when compiling and packaging projects under WIN system"),(0,r.kt)("li",{parentName:"ul"},"[","Gateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2329"},"[Linkis-2329]")," Fix the configuration problem of LDAP integration"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2238"},"[Linkis-2238]"),' Optimize the result set path to be separated by date to solve the problem of too many subdirectories in a single folder. The resustset path is in the same folder, such as "/tmp/linkis/hadoop/linkis/20220516_210525/IDE/40099", which may cause too many files in one folder'),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2162"},"[Linkis-2162]")," Optimize the result set path to be separated by date to solve the problem of too many subdirectories in a single folder"),(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2332"},"[Linkis-2332]")," Close the SpringCloud default configuration center to reduce the interference of unnecessary log information"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2295"},"[Linkis-2295]")," remove redundant code in web install script")),(0,r.kt)("h2",{id:"security-related"},"Security related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","PS-Jobhistory]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2248"},"[Linkis-2248]")," Added parameter verification to the task query list interface to prevent sql injection security issues"),(0,r.kt)("li",{parentName:"ul"},"[","PS-PublicService]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2235"},"[Linkis-1949]")," /api/rest_j/v1/datasource/columns interface adds user permission check")),(0,r.kt)("h2",{id:"dependency-changes"},"Dependency changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2188"},"[Linkis-2188]")," Bump poi 5.2.1 to poi 5.2.2, fix possible memory allocation problems"),(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2182"},"[Linkis-2182]")," Bump gson:2.8.5 to gson:2.8.9")),(0,r.kt)("h2",{id:"thanks"},"Thanks"),(0,r.kt)("p",null,"The release of Apache Linkis(incubating) 1.1.3 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors, including but not limited to the following Contributors (in no particular order): Alexkun, CCweixiao, Davidhua1996, QuintinTao, caseone, det101 , doroxinrui, huiyuanjjjjuice, husofskyzy, hzdhgf, jackxu2011, legendtkl, liuyou2, peacewong, pjfanning, ruY9527, saLeox, seayi, wForget, wallezhang, yyuser5201314"))}m.isMDXComponent=!0}}]);