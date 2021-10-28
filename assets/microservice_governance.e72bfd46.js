import{o as e,c as i,b as r,e as n,r as s,l as t,u as a}from"./vendor.1180558b.js";var o="/assets/linkis-microservice-gov-01.2e1292b0.png",l="/assets/linkis-microservice-gov-03.9ece64b6.png";const c={class:"markdown-body"},u=[r("h2",null,[r("strong",null,"Background")],-1),r("p",null,"Microservice governance includes three main microservices: Gateway, Eureka and Open Feign. It is used to solve Linkis’s service discovery and registration, unified gateway, request forwarding, inter-service communication, load balancing and other issues. At the same time, Linkis 1.0 will also provide the supporting for Nacos; the entire Linkis is a complete microservice architecture and each business progress requires multiple microservices to complete.",-1),r("h2",null,[r("strong",null,"Architecture diagram")],-1),r("p",null,[r("img",{src:o,alt:""})],-1),r("h2",null,[r("strong",null,"Architecture Introduction")],-1),r("ol",null,[r("li",null,[r("p",null,[n("Linkis Gateway As the gateway entrance of Linkis, Linkis Gateway is mainly responsible for request forwarding, user access authentication and WebSocket communication. The Gateway of Linkis 1.0 also added Label-based routing and forwarding capabilities. A WebSocket routing and forwarder is implemented by Spring Cloud Gateway in Linkis, it is used to establish a WebSocket connection with the client. After the connection is established, it will automatically analyze the client’s WebSocket request and determine which backend microservice the request should be forward to through the rules, then the request is forwarded to the corresponding backend microservice instance.      "),r("a",{href:"Gateway.md"},"Linkis Gateway")])]),r("li",null,[r("p",null,"Linkis Eureka Mainly responsible for service registration and discovery. Eureka consists of multiple instances(service instances). These service instances can be divided into two types: Eureka Server and Eureka Client. For ease of understanding, we divide Eureka Client into Service Provider and Service Consumer. Eureka Server provides service registration and discovery. The Service Provider registers its own service with Eureka, so that service consumers can find it. The Service Consumer obtains a listed of registered services from Eureka, so that they can consume services.")]),r("li",null,[r("p",null,"Linkis has implemented a set of its own underlying RPC communication schema based on Feign. As the underlying communication solution, Linkis RPC integrates the SDK into the microservices in need. A microservice can be both the request caller and the request receiver. As the request caller, the Receiver of the target microservice will be requested through the Sender. As the request receiver, the Receiver will be provided to process the request sent by the Sender in order to complete the synchronous response or asynchronous response.")])],-1),r("p",null,[r("img",{src:l,alt:""})],-1)],d={setup:(r,{expose:n})=>(n({frontmatter:{}}),(r,n)=>(e(),i("div",c,u)))},h={class:"markdown-body"},v=[r("h2",null,[r("strong",null,"背景")],-1),r("p",null,"微服务治理包含了Gateway、Eureka、Open Feign等三个主要的微服务。用来解决Linkis的服务发现与注册、统一网关、请求转发、服务间通信、负载均衡等问题。同时Linkis1.0还会提供对Nacos的支持；整个Linkis是一个完全的微服务架构，每个业务流程都是需要多个微服务协同完成的。",-1),r("h2",null,[r("strong",null,"架构图")],-1),r("p",null,[r("img",{src:o,alt:""})],-1),r("h2",null,[r("strong",null,"架构描述")],-1),r("ol",null,[r("li",null,"Linkis Gateway作为Linkis的网关入口，主要承担了请求转发、用户访问认证、WebSocket通信等职责。Linkis1.0的Gateway还新增了基于Label的路由转发能力。Linkis在Spring Cloud Gateway中，实现了WebSocket路由转发器，用于与客户端建立WebSocket连接，建立连接成功后，会自动分析客户端的WebSocket请求，通过规则判断出请求该转发给哪个后端微服务，从而将WebSocket请求转发给对应的后端微服务实例。")],-1),r("p",null,[n("     "),r("a",{href:"Gateway.md"},"进入Linkis Gateway")],-1),r("ol",{start:"2"},[r("li",null,[r("p",null,"Linkis Eureka 主要负责服务注册与发现，Eureka由多个instance(服务实例)组成，这些服务实例可以分为两种：Eureka Server和Eureka Client。为了便于理解，我们将Eureka client再分为Service Provider和Service Consumer。Eureka Server 提供服务注册和发现，Service Provider服务提供方，将自身服务注册到Eureka，从而使服务消费方能够找到Service Consumer服务消费方，从Eureka获取注册服务列表，从而能够消费服务。")]),r("li",null,[r("p",null,"Linkis基于Feign实现了一套自己的底层RPC通信方案。Linkis RPC作为底层的通信方案，将提供SDK集成到有需要的微服务之中。一个微服务既可以作为请求调用方，也可以作为请求接收方。作为请求调用方时，将通过Sender请求目标接收方微服务的Receiver，作为请求接收方时，将提供Receiver用来处理请求接收方Sender发送过来的请求，以便完成同步响应或异步响应。")])],-1),r("p",null,[r("img",{src:l,alt:""})],-1)],k={setup:(r,{expose:n})=>(n({frontmatter:{}}),(r,n)=>(e(),i("div",h,v)))},m={setup(i){const r=s(localStorage.getItem("locale")||"en");return(i,n)=>"en"===r.value?(e(),t(a(d),{key:0})):(e(),t(a(k),{key:1}))}};export{m as default};
