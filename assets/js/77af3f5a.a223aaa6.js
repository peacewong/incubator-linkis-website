"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[59832],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),k=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),g=k(a),s=l,N=g["".concat(m,".").concat(s)]||g[s]||d[s]||r;return a?n.createElement(N,p(p({ref:e},u),{},{components:a})):n.createElement(N,p({ref:e},u))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=g;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var k=2;k<r;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},66827:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={title:"ECM Resource Information Management",sidebar_position:10},p=void 0,i={unversionedId:"api/http/linkis-cg-linkismanager-api/ecm-resource-management-api",id:"version-1.3.0/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api",title:"ECM Resource Information Management",description:"ECResourceInfoRestfulApi class",source:"@site/versioned_docs/version-1.3.0/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api.md",sourceDirName:"api/http/linkis-cg-linkismanager-api",slug:"/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api",permalink:"/docs/latest/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.3.0/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api.md",tags:[],version:"1.3.0",sidebarPosition:10,frontMatter:{title:"ECM Resource Information Management",sidebar_position:10},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"EC Resource Information Management",permalink:"/docs/latest/api/http/linkis-cg-linkismanager-api/ec-resource-management-api"},next:{title:"Engine Management",permalink:"/docs/latest/api/http/linkis-cg-linkismanager-api/engine-management-api"}},m={},k=[{value:"delete EC info",id:"delete-ec-info",level:2},{value:"Get EC information",id:"get-ec-information",level:2},{value:"ECM resource list",id:"ecm-resource-list",level:2},{value:"Edit EMC instance",id:"edit-emc-instance",level:2},{value:"Open engine log",id:"open-engine-log",level:2}],u={toc:k};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," ECResourceInfoRestfulApi class ")),(0,l.kt)("h2",{id:"delete-ec-info"},"delete EC info"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/delete/{ticketid}}")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Delete EC information")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"204"),(0,l.kt)("td",{parentName:"tr",align:null},"No Content"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,l.kt)("h2",{id:"get-ec-information"},"Get EC information"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/get")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Get EC information")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n    }\n')),(0,l.kt)("h2",{id:"ecm-resource-list"},"ECM resource list"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/listAllEMs")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Get a detailed list of all ECM resources, which can be queried according to conditions, and query all by default")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null},"instance name"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeHealthy"),(0,l.kt)("td",{parentName:"tr",align:null},"Status, the status has the following enumeration types 'Healthy', 'UnHealthy', 'WARN', 'StockAvailable', 'StockUnavailable'"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner"),(0,l.kt)("td",{parentName:"tr",align:null},"Creator"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/linkisManager/listAllEMs",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "EMs": [{\n            "labels": [{\n                "stringValue": "",\n                "labelKey": "",\n                "feature": "",\n                "instance": "",\n                "serviceInstance": {\n                    "instance": "",\n                    "applicationName": ""\n                },\n                "serviceName": "",\n                "featureKey": "",\n                "empty":\n            }],\n            "applicationName": "",\n            "instance": ":",\n            "resourceType": "",\n            "maxResource": {\n                "memory": ,\n                "cores": ,\n                "instance":\n            },\n            "minResource": {\n                "memory": ,\n                "cores": ,\n                "instance":\n            },\n            "usedResource": {\n                "memory": ,\n                "cores": ,\n                "instance":\n            },\n            "lockedResource": {\n                "memory": 0,\n                "cores": 0,\n                "instance": 0\n            },\n            "expectedResource": {\n                "memory": 0,\n                "cores": 0,\n                "instance": 0\n            },\n            "leftResource": {\n                "memory": ,\n                "cores": ,\n                "instance":\n            },\n            "owner": "",\n            "runningTasks": null,\n            "pendingTasks": null,\n            "succeedTasks": null,\n            "failedTasks": null,\n            "maxMemory": ,\n            "usedMemory": ,\n            "systemCPUUsed": null,\n            "systemLeftMemory": ,\n            "nodeHealthy": "",\n            "msg": "",\n            "startTime":\n        }]\n    }\n}\n')),(0,l.kt)("h2",{id:"edit-emc-instance"},"Edit EMC instance"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/modifyEMInfo")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Edit or modify the instance under EMC management")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"Engine Label"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance status, the status has the following enumeration types 'Healthy', 'UnHealthy', 'WARN', 'StockAvailable', 'StockUnavailable'"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null},"Engine instance name"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The label in the added content belongs to the key in the map in the labels collection"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labels"),(0,l.kt)("td",{parentName:"tr",align:null},"The engine instance updates the parameter content, and the collection stores the map type"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stringValue"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the label in the added content belongs to the value in the map in the labels collection"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/linkisManager/modifyEMInfo",\n    "status": 0,\n    "message": "success",\n    "data": {}\n}\n')),(0,l.kt)("h2",{id:"open-engine-log"},"Open engine log"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/openEngineLog")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Open the engine log, the stdout type engine log is opened by default")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    applicationName: ""\n    emInstance: ""\n    instance: ""\n    parameters: {\n        pageSize: ,\n        fromLine: ,\n        logType: ""\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"Engine Label"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emInstance"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fromLine"),(0,l.kt)("td",{parentName:"tr",align:null},"From Line"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null},"Engine instance name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logType"),(0,l.kt)("td",{parentName:"tr",align:null},"Log type, default stdout type, belonging to parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Page Size"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"Pagination information"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/linkisManager/openEngineLog",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "result": {\n            "logPath": "",\n            "logs": [""],\n            "endLine": ,\n            "rows":\n        },\n        "isError": false,\n        "errorMsg": ""\n    }\n}\n')))}d.isMDXComponent=!0}}]);