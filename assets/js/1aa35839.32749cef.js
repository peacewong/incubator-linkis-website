"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[50148],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return p}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),v=u(t),p=i,m=v["".concat(s,".").concat(p)]||v[p]||d[p]||c;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=v;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},95959:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return v}});var n=t(87462),i=t(63366),c=(t(67294),t(3905)),o=["components"],a={title:"Overview",sidebar_position:1},s=void 0,u={unversionedId:"architecture/microservice-governance-services/overview",id:"architecture/microservice-governance-services/overview",isDocsHomePage:!1,title:"Overview",description:"Background",source:"@site/docs/architecture/microservice-governance-services/overview.md",sourceDirName:"architecture/microservice-governance-services",slug:"/architecture/microservice-governance-services/overview",permalink:"/docs/1.2.0/architecture/microservice-governance-services/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/microservice-governance-services/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Source Management Service Architecture",permalink:"/docs/1.2.0/architecture/public-enhancement-services/metadata-manager"},next:{title:"Gateway Design",permalink:"/docs/1.2.0/architecture/microservice-governance-services/gateway"}},l=[{value:"<strong>Background</strong>",id:"background",children:[]},{value:"<strong>Architecture diagram</strong>",id:"architecture-diagram",children:[]},{value:"<strong>Architecture Introduction</strong>",id:"architecture-introduction",children:[]}],d={toc:l};function v(e){var r=e.components,a=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"background"},(0,c.kt)("strong",{parentName:"h2"},"Background")),(0,c.kt)("p",null,"Microservice governance includes three main microservices: Gateway, Eureka and Open Feign.\nIt is used to solve Linkis's service discovery and registration, unified gateway, request forwarding, inter-service communication, load balancing and other issues.\nAt the same time, Linkis 1.0 will also provide the supporting for Nacos; the entire Linkis is a complete microservice architecture and each business progress requires multiple microservices to complete."),(0,c.kt)("h2",{id:"architecture-diagram"},(0,c.kt)("strong",{parentName:"h2"},"Architecture diagram")),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(48518).Z})),(0,c.kt)("h2",{id:"architecture-introduction"},(0,c.kt)("strong",{parentName:"h2"},"Architecture Introduction")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Linkis Gateway",(0,c.kt)("br",{parentName:"p"}),"\n","As the gateway entrance of Linkis, Linkis Gateway is mainly responsible for request forwarding, user access authentication and WebSocket communication.\nThe Gateway of Linkis 1.0 also added Label-based routing and forwarding capabilities.\nA WebSocket routing and forwarder is implemented by Spring Cloud Gateway in Linkis, it is used to establish a WebSocket connection with the client.\nAfter the connection is established, it will automatically analyze the client's WebSocket request and determine which backend microservice the request should be forward to through the rules,\nthen the request is forwarded to the corresponding backend microservice instance.",(0,c.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0",(0,c.kt)("a",{parentName:"p",href:"/docs/1.2.0/architecture/microservice-governance-services/gateway"},"Linkis Gateway"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Linkis Eureka",(0,c.kt)("br",{parentName:"p"}),"\n","Mainly responsible for service registration and discovery. Eureka consists of multiple instances(service instances). These service instances can be divided into two types: Eureka Server and Eureka Client.\nFor ease of understanding, we divide Eureka Client into Service Provider and Service Consumer. Eureka Server provides service registration and discovery.\nThe Service Provider registers its own service with Eureka, so that service consumers can find it.\nThe Service Consumer obtains a listed of registered services from Eureka, so that they can consume services.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Linkis has implemented a set of its own underlying RPC communication schema based on Feign. As the underlying communication solution, Linkis RPC integrates the SDK into the microservices in need.\nA microservice can be both the request caller and the request receiver.\nAs the request caller, the Receiver of the target microservice will be requested through the Sender.\nAs the request receiver, the Receiver will be provided to process the request sent by the Sender in order to complete the synchronous response or asynchronous response.\n"))),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(35665).Z})))}v.isMDXComponent=!0},48518:function(e,r,t){r.Z=t.p+"assets/images/linkis-microservice-gov-01-c677653c7ded2c8b47cd3a4b48f3eee8.png"},35665:function(e,r,t){r.Z=t.p+"assets/images/linkis-microservice-gov-03-6da92a57bfdd5592c24efd65f8d79f58.png"}}]);