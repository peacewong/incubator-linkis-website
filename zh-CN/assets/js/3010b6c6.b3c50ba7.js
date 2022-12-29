"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[89846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},53241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"SpringMVC \u66ff\u6362 Jersey \u5206\u4eab",sidebar_position:5},o=void 0,i={unversionedId:"development/springmvc-replaces-jersey",id:"version-1.0.3/development/springmvc-replaces-jersey",title:"SpringMVC \u66ff\u6362 Jersey \u5206\u4eab",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd linkis-1.0.3 \u7248\u672c\uff0c\u5982\u4f55\u4f7f\u7528Spring REST\u5bf9jersey REST\u6a21\u5f0f\u7684\u66ff\u6362\u3002\u57281.0.3\u7248\u672c\u4e4b\u524d\uff0clinkis\u63d0\u4f9b\u7684REST Web\u670d\u52a1\u662f\u4f7f\u7528\u7684jersey\u67b6\u6784\u3002\u8fdb\u884c\u66ff\u6362\u7684\u539f\u56e0\u4e3b\u8981\u662f\u8003\u8651\u5230//www.apache.org/legal/resolved.html#);2. linkis\u672c\u8eab\u662f\u57fa\u4e8eSpring\u5f00\u53d1\u7684\u9879\u76ee\uff0c\u4f7f\u7528Spring REST\u65b9\u5f0f\u7684\u4e0eFeign\u7ed3\u5408\u5ea6\u66f4\u53cb\u597d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/development/springmvc-replaces-jersey.md",sourceDirName:"development",slug:"/development/springmvc-replaces-jersey",permalink:"/zh-CN/docs/1.0.3/development/springmvc-replaces-jersey",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/development/springmvc-replaces-jersey.md",tags:[],version:"1.0.3",sidebarPosition:5,frontMatter:{title:"SpringMVC \u66ff\u6362 Jersey \u5206\u4eab",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",permalink:"/zh-CN/docs/1.0.3/development/web-build"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.3/upgrade/overview"}},s={},p=[{value:"Servlet \u7684\u8c03\u6574",id:"servlet-\u7684\u8c03\u6574",level:2},{value:"\u8bf7\u6c42\u8fd4\u56de\u7684\u7ed3\u6784\u4f53\u8c03\u6574",id:"\u8bf7\u6c42\u8fd4\u56de\u7684\u7ed3\u6784\u4f53\u8c03\u6574",level:2},{value:"jackson\u5347\u7ea7\u66ff\u6362",id:"jackson\u5347\u7ea7\u66ff\u6362",level:2},{value:"\u6ce8\u89e3\u5bf9\u6bd4",id:"\u6ce8\u89e3\u5bf9\u6bd4",level:2},{value:"Jackson\u5347\u7ea7\u4e3b\u8981\u66ff\u6362\u70b9",id:"jackson\u5347\u7ea7\u4e3b\u8981\u66ff\u6362\u70b9",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd linkis-1.0.3 \u7248\u672c\uff0c\u5982\u4f55\u4f7f\u7528Spring REST\u5bf9jersey REST\u6a21\u5f0f\u7684\u66ff\u6362\u3002\u57281.0.3\u7248\u672c\u4e4b\u524d\uff0clinkis\u63d0\u4f9b\u7684REST Web\u670d\u52a1\u662f\u4f7f\u7528\u7684jersey\u67b6\u6784\u3002\u8fdb\u884c\u66ff\u6362\u7684\u539f\u56e0\u4e3b\u8981\u662f\u8003\u8651\u5230:1. Lisence\u5408\u89c4\u95ee\u9898(",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/resolved.html#);2"},"https://www.apache.org/legal/resolved.html#);2"),". linkis\u672c\u8eab\u662f\u57fa\u4e8eSpring\u5f00\u53d1\u7684\u9879\u76ee\uff0c\u4f7f\u7528Spring REST\u65b9\u5f0f\u7684\u4e0eFeign\u7ed3\u5408\u5ea6\u66f4\u53cb\u597d\u3002")),(0,r.kt)("h2",{id:"servlet-\u7684\u8c03\u6574"},"Servlet \u7684\u8c03\u6574"),(0,r.kt)("p",null,"linkis\u57281.0.3\u4e4b\u524d\uff0cDataWorkCloudApplication\u542f\u52a8\u7c7b\u5728\u521b\u5efaJettyServletWebServerFactory\u7684Web\u5bb9\u5668\u65f6\uff0c\u4f7f\u7528\u7684\u662fjersey\u7684ServletContainer\u3002\n\u57281.0.3\u66ff\u6362\u4e3a\u4e86Spring\u7684DispatcherServlet\u3002\u5982\u679c\u6709\u57fa\u4e8elinkis\u4e8c\u6b21\u5f00\u53d1\u7684\u5176\u4ed6\u7ec4\u4ef6\uff0c\u6709\u4f9d\u8d56\u4e86DataWorkCloudApplication\u542f\u52a8\u7c7b\uff0c\u90a3\u4e48\u539f\u6765jersey\u6a21\u5f0f\u7684http\u670d\u52a1\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u8fd4\u56de\u7684\u7ed3\u6784\u4f53\u8c03\u6574"},"\u8bf7\u6c42\u8fd4\u56de\u7684\u7ed3\u6784\u4f53\u8c03\u6574"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jersey :http\u8bf7\u6c42\u8fd4\u56de\u5b9e\u4f53\uff1ajavax.ws.rs.core.Response\u4e3ajersey\u6a21\u5f0fhttp\u8fd4\u56de\u5b9e\u4f53\uff0cjersey\u5185\u90e8\u6709\u505a\u5355\u72ec\u7684\u5904\u7406,\u5c01\u88c5\u4e3a\u4e86Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spingmvc\u6a21\u5f0f\u9700\u8981\u4fee\u6539\uff0c\u76f4\u63a5\u8fd4\u56deMessage"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  return Message.messageToResponse(Message.ok().data("test", data));\n=>\n  return Message.ok().data("test", data)\n')),(0,r.kt)("h2",{id:"jackson\u5347\u7ea7\u66ff\u6362"},"jackson\u5347\u7ea7\u66ff\u6362"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"org.codehaus.jackson \u4ecev2\u7248\u672c\u65f6\u5df2\u7ecf\u4ece codehaus \u79fb\u4ea4\u5230github \u5e76\u91cd\u547d\u540d\u4e3acom.fasterxml.jackson"),(0,r.kt)("li",{parentName:"ul"},"jersey\u8001\u7248\u672c\u4f7f\u7528\u7684\u662forg.codehaus.jackson\uff0cspringmvc\u4f7f\u7528\u7684\u662f\u65b0\u7248\u672c\u7684com.fasterxml.jackson\uff0c\u66ff\u6362\u4e3aspringmvc\u98ce\u683c\u65f6\uff0c\u9700\u8981\u5347\u7ea7jackson")),(0,r.kt)("h2",{id:"\u6ce8\u89e3\u5bf9\u6bd4"},"\u6ce8\u89e3\u5bf9\u6bd4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"jersey\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"springmvc\u6ce8\u89e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@GET"),(0,r.kt)("td",{parentName:"tr",align:null},"@RequestMapping(method = RequestMethod.GET)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@POST"),(0,r.kt)("td",{parentName:"tr",align:null},"@RequestMapping(method = RequestMethod.POST)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"@RequestMapping(method = RequestMethod.DELETE)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"@RequestMapping(method = RequestMethod.PUT)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'@Path("/dss")'),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestMapping(path = "/dss)'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'@FormDataParam("system") String system'),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestParam(value ="system",required = false)'),(0,r.kt)("td",{parentName:"tr",align:null},"request\u4e3afalse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'@QueryParam("system") String system'),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestParam(value ="system",required = false)'),(0,r.kt)("td",{parentName:"tr",align:null},"request\u4e3afalse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'@PathParam("id") Long id'),(0,r.kt)("td",{parentName:"tr",align:null},'@PathVariable("id") Long id'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormDataMultiPart form"),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestParam("file") List\\<MultipartFile',">"," files"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u53c2\u6570\u540d\u4e3afile\uff0c\u7528\u6cd5\u9700\u8981\u4fee\u6539")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Context"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u5220\u9664"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'@DefaultValue("1000") @QueryParam("pageSize") int pageSize,'),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestParam(value = "pageSize",defaultValue = "1000")'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Consumes(MediaType.APPLICATION_JSON)"),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestMapping(consumes = {"application/json"})'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Produces(MediaType.APPLICATION_JSON)"),(0,r.kt)("td",{parentName:"tr",align:null},'@RequestMapping(produces = {"application/json"})'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570 org.codehaus.jackson.JsonNode"),(0,r.kt)("td",{parentName:"tr",align:null},"@RequestBody com.fasterxml.jackson.databind.JsonNode jsonNode"),(0,r.kt)("td",{parentName:"tr",align:null},"jersey\u8001\u7248\u672c\u4f7f\u7528\u7684\u662f\u8001\u7248\u672c\u7684jackson\uff0cspringmvc\u4f7f\u7528\u7684\u662f\u65b0\u7248\u672c\u7684JsonNode/")))),(0,r.kt)("h2",{id:"jackson\u5347\u7ea7\u4e3b\u8981\u66ff\u6362\u70b9"},"Jackson\u5347\u7ea7\u4e3b\u8981\u66ff\u6362\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\njackson-1.X \u65b9\u6cd5\uff1a getBooleanValue()\u3001getFields()\u3001getElements()\u3001getIntValue()\njackson-2.X \u65b9\u6cd5\uff1a booleanValue()\u3001fields()\u3001elements() \u548c intValue()\n\n")),(0,r.kt)("p",null,"\u8be6\u7ec6\u53ef\u53c2\u8003\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/55896802/upgrade-of-jackson-from-org-codehaus-jackson-to-com-fasterxml-jackson-version-1"},"https://stackoverflow.com/questions/55896802/upgrade-of-jackson-from-org-codehaus-jackson-to-com-fasterxml-jackson-version-1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.cowtowncoder.com/blog/archives/2012/04/entry_469.html"},"http://www.cowtowncoder.com/blog/archives/2012/04/entry_469.html"))))}m.isMDXComponent=!0}}]);