import{_ as n}from"./add_an_engineConn_flow_chart.5a1c06c5.js";import{o as e,c as i,b as t,e as l,r as a,l as o,u as r}from"./vendor.1180558b.js";const s={class:"markdown-body"},u=[t("h1",null,"How to add an EngineConn",-1),t("p",null,"Adding EngineConn is one of the core processes of the computing task preparation phase of Linkis computing governance. It mainly includes the following steps. First, client side (Entrance or user client) initiates a request for a new EngineConn to LinkisManager . Then LinkisManager initiates a request to EngineConnManager to start EngineConn based on demands and label rules. Finally, LinkisManager returns the usable EngineConn to the client side.",-1),t("p",null,"Based on the figure below, let’s explain the whole process in detail:",-1),t("p",null,[t("img",{src:n,alt:"Process of adding a EngineConn"})],-1),t("h2",null,"1. LinkisManger receives the requests from client side",-1),t("p",null,[t("strong",null,"Glossary:")],-1),t("ul",null,[t("li",null,[l("LinkisManager: The management center of Linkis computing governance capabilities. Its main responsibilities are: "),t("ol",null,[t("li",null,[t("p",null,"Based on multi-level combined tags, provide users with available EngineConn after complex routing, resource management and load balancing.")]),t("li",null,[t("p",null,"Provide EC and ECM full life cycle management capabilities.")]),t("li",null,[t("p",null,"Provide users with multi-Yarn cluster resource management functions based on multi-level combined tags. It is mainly divided into three modules: AppManager, ResourceManager and LabelManager , which can support multi-active deployment and have the characteristics of high availability and easy expansion.")])])])],-1),t("p",null,"After the AM module receives the Client’s new EngineConn request, it first checks the parameters of the request to determine the validity of the request parameters. Secondly, selects the most suitable EngineConnManager (ECM) through complex rules for use in the subsequent EngineConn startup. Next, it will apply to RM for the resources needed to start the EngineConn, Finally, it will request the ECM to create an EngineConn.",-1),t("p",null,"The four steps will be described in detail below.",-1),t("h3",null,"1. Request parameter verification",-1),t("p",null,"After the AM module receives the engine creation request, it will check the parameters. First, it will check the permissions of the requesting user and the creating user, and then check the Label attached to the request. Since in the subsequent creation process of AM, Label will be used to find ECM and perform resource information recording, etc, you need to ensure that you have the necessary Label. At this stage, you must bring the Label with UserCreatorLabel (For example: hadoop-IDE) and EngineTypeLabel ( For example: spark-2.4.3).",-1),t("h3",null,"2. Select a EngineConnManager(ECM)",-1),t("p",null,"ECM selection is mainly to complete the Label passed through the client to select a suitable ECM service to start EngineConn. In this step, first, the LabelManager will be used to search in the registered ECM through the Label passed by the client, and return in the order according to the label matching degree. After obtaining the registered ECM list, rules will be selected for these ECMs. At this stage, rules such as availability check, resource surplus, and machine load have been implemented. After the rule is selected, the ECM with the most matching label, the most idle resource, and the low load will be returned.",-1),t("h3",null,"3. Apply resources required for EngineConn",-1),t("ol",null,[t("li",null,[t("p",null,"After obtaining the assigned ECM, AM will then request how many resources will be used by the client’s engine creation request by calling the EngineConnPluginServer service. Here, the resource request will be encapsulated, mainly including Label, the EngineConn startup parameters passed by the Client, and the user configuration parameters obtained from the Configuration module. The resource information is obtained by calling the ECP service through RPC.")]),t("li",null,[t("p",null,"After the EngineConnPluginServer service receives the resource request, it will first find the corresponding engine tag through the passed tag, and select the EngineConnPlugin of the corresponding engine through the engine tag. Then use EngineConnPlugin’s resource generator to calculate the engine startup parameters passed in by the client, calculate the resources required to apply for a new EngineConn this time, and then return it to LinkisManager."),t("p",null,[t("strong",null,"Glossary:")])])],-1),t("ul",null,[t("li",null,[l("EgineConnPlugin: It is the interface that Linkis must implement when connecting a new computing storage engine. This interface mainly includes several capabilities that this EngineConn must provide during the startup process, including EngineConn resource generator, EngineConn startup command generator, EngineConn engine connection Device. Please refer to the Spark engine implementation class for the specific implementation: "),t("a",{href:"https://github.com/apache/incubator-linkis/blob/master/linkis-engineconn-plugins/engineconn-plugins/spark/src/main/scala/com/webank/wedatasphere/linkis/engineplugin/spark/SparkEngineConnPlugin.scala"},"SparkEngineConnPlugin"),l(".")]),t("li",null,"EngineConnPluginServer: It is a microservice that loads all the EngineConnPlugins and provides externally the required resource generation capabilities of EngineConn and EngineConn’s startup command generation capabilities."),t("li",null,"EngineConnResourceFactory: Calculate the total resources needed when EngineConn starts this time through the parameters passed in."),t("li",null,"EngineConnLaunchBuilder: Through the incoming parameters, a startup command of the EngineConn is generated to provide the ECM to start the engine.")],-1),t("ol",{start:"3"},[t("li",null,"After AM obtains the engine resources, it will then call the RM service to apply for resources. The RM service will use the incoming Label, ECM, and the resources applied for this time to make resource judgments. First, it will judge whether the resources of the client corresponding to the Label are sufficient, and then judge whether the resources of the ECM service are sufficient, if the resources are sufficient, the resource application is approved this time, and the resources of the corresponding Label are added or subtracted.")],-1),t("h3",null,"4. Request ECM for engine creation",-1),t("ol",null,[t("li",null,"After completing the resource application for the engine, AM will encapsulate the engine startup request, send it to the corresponding ECM via RPC for service startup, and obtain the instance object of EngineConn."),t("li",null,"AM will then determine whether EngineConn is successfully started and become available through the reported information of EngineConn. If it is, the result will be returned, and the process of adding an engine this time will end.")],-1),t("h2",null,"2. ECM initiates EngineConn",-1),t("p",null,[t("strong",null,"Glossary:")],-1),t("ul",null,[t("li",null,"EngineConnManager: EngineConn’s manager. Provides engine life-cycle management, and at the same time reports load information and its own health status to RM."),t("li",null,"EngineConnBuildRequest: The start engine command passed by LinkisManager to ECM, which encapsulates all tag information, required resources and some parameter configuration information of the engine."),t("li",null,"EngineConnLaunchRequest: Contains the BML materials, environment variables, ECM required local environment variables, startup commands and other information required to start an EngineConn, so that ECM can build a complete EngineConn startup script based on this.")],-1),t("p",null,"After ECM receives the EngineConnBuildRequest command passed by LinkisManager, it is mainly divided into three steps to start EngineConn:",-1),t("ol",null,[t("li",null,"Request EngineConnPluginServer to obtain EngineConnLaunchRequest encapsulated by EngineConnPluginServer."),t("li",null,"Parse EngineConnLaunchRequest and encapsulate it into EngineConn startup script."),t("li",null,"Execute startup script to start EngineConn.")],-1),t("h3",null,"2.1 EngineConnPluginServer encapsulates EngineConnLaunchRequest",-1),t("p",null,"Get the EngineConn type and corresponding version that actually needs to be started through the label information of EngineConnBuildRequest, get the EngineConnPlugin of the EngineConn type from the memory of EngineConnPluginServer, and convert the EngineConnBuildRequest into EngineConnLaunchRequest through the EngineConnLaunchBuilder of the EngineConnPlugin.",-1),t("h3",null,"2.2 Encapsulate EngineConn startup script",-1),t("p",null,"After the ECM obtains the EngineConnLaunchRequest, it downloads the BML materials in the EngineConnLaunchRequest to the local, and checks whether the local necessary environment variables required by the EngineConnLaunchRequest exist. After the verification is passed, the EngineConnLaunchRequest is encapsulated into an EngineConn startup script.",-1),t("h3",null,"2.3 Execute startup script",-1),t("p",null,"Currently, ECM only supports Bash commands for Unix systems, that is, only supports Linux systems to execute the startup script.",-1),t("p",null,"Before startup, the sudo command is used to switch to the corresponding requesting user to execute the script to ensure that the startup user (ie, JVM user) is the requesting user on the Client side.",-1),t("p",null,"After the startup script is executed, ECM will monitor the execution status and execution log of the script in real time. Once the execution status returns to non-zero, it will immediately report EngineConn startup failure to LinkisManager and the entire process is complete; otherwise, it will keep monitoring the log and status of the startup script until The script execution is complete.",-1),t("h2",null,"3. EngineConn initialization",-1),t("p",null,"After ECM executed EngineConn’s startup script, EngineConn microservice was officially launched.",-1),t("p",null,[t("strong",null,"Glossary:")],-1),t("ul",null,[t("li",null,"EngineConn microservice: Refers to the actual microservices that include an EngineConn and one or more Executors to provide computing power for computing tasks. When we talk about adding an EngineConn, we actually mean adding an EngineConn microservice."),t("li",null,"EngineConn: The engine connector is the actual connection unit with the underlying computing storage engine, and contains the session information with the actual engine. The difference between it and Executor is that EngineConn only acts as a connection and a client, and does not actually perform calculations. For example, SparkEngineConn, its session information is SparkSession."),t("li",null,"Executor: As a real computing storage scenario executor, it is the actual computing storage logic execution unit. It abstracts the various capabilities of EngineConn and provides multiple different architectural capabilities such as interactive execution, subscription execution, and responsive execution.")],-1),t("p",null,"The initialization of EngineConn microservices is generally divided into three stages:",-1),t("ol",null,[t("li",null,"Initialize the EngineConn of the specific engine. First use the command line parameters of the Java main method to encapsulate an EngineCreationContext that contains relevant label information, startup information, and parameter information, and initialize EngineConn through EngineCreationContext to complete the establishment of the connection between EngineConn and the underlying Engine, such as: SparkEngineConn will initialize one at this stage SparkSession is used to establish a connection relationship with a Spark application."),t("li",null,"Initialize the Executor. After the EngineConn is initialized, the corresponding Executor will be initialized according to the actual usage scenario to provide service capabilities for subsequent users. For example, the SparkEngineConn in the interactive computing scenario will initialize a series of Executors that can be used to submit and execute SQL, PySpark, and Scala code capabilities, and support the Client to submit and execute SQL, PySpark, Scala and other codes to the SparkEngineConn."),t("li",null,"Report the heartbeat to LinkisManager regularly, and wait for EngineConn to exit. When the underlying engine corresponding to EngineConn is abnormal, or exceeds the maximum idle time, or Executor is executed, or the user manually kills, the EngineConn automatically ends and exits.")],-1),t("hr",null,null,-1),t("p",null,"At this point, The process of how to add a new EngineConn is basically over. Finally, let’s make a summary:",-1),t("ul",null,[t("li",null,"The client initiates a request for adding EngineConn to LinkisManager."),t("li",null,"LinkisManager checks the legitimacy of the parameters, first selects the appropriate ECM according to the label, then confirms the resources required for this new EngineConn according to the user’s request, applies for resources from the RM module of LinkisManager, and requires ECM to start a new EngineConn as required after the application is passed."),t("li",null,"ECM first requests EngineConnPluginServer to obtain an EngineConnLaunchRequest containing BML materials, environment variables, ECM required local environment variables, startup commands and other information needed to start an EngineConn, and then encapsulates the startup script of EngineConn, and finally executes the startup script to start the EngineConn."),t("li",null,"EngineConn initializes the EngineConn of a specific engine, and then initializes the corresponding Executor according to the actual usage scenario, and provides service capabilities for subsequent users. Finally, report the heartbeat to LinkisManager regularly, and wait for the normal end or termination by the user.")],-1)],g={setup:(n,{expose:t})=>(t({frontmatter:{}}),(n,t)=>(e(),i("div",s,u)))},c={class:"markdown-body"},h=[t("h1",null,"EngineConn新增流程",-1),t("p",null,"EngineConn的新增，是Linkis计算治理的计算任务准备阶段的核心流程之一。它主要包括了Client端（Entrance或用户客户端）向LinkisManager发起一个新增EngineConn的请求，LinkisManager为用户按需、按标签规则，向EngineConnManager发起一个启动EngineConn的请求，并等待EngineConn启动完成后，将可用的EngineConn返回给Client的整个流程。",-1),t("p",null,"如下图所示，接下来我们来详细说明一下整个流程：",-1),t("p",null,[t("img",{src:n,alt:"EngineConn新增流程"})],-1),t("h2",null,"一、LinkisManager接收客户端请求",-1),t("p",null,[t("strong",null,"名词解释"),l("：")],-1),t("ul",null,[t("li",null,[l("LinkisManager：是Linkis计算治理能力的管理中枢，主要的职责为： "),t("ol",null,[t("li",null,[t("p",null,"基于多级组合标签，为用户提供经过复杂路由、资源管控和负载均衡后的可用EngineConn；")]),t("li",null,[t("p",null,"提供EC和ECM的全生命周期管理能力；")]),t("li",null,[t("p",null,"为用户提供基于多级组合标签的多Yarn集群资源管理功能。主要分为 AppManager（应用管理器）、ResourceManager（资源管理器）、LabelManager（标签管理器）三大模块，能够支持多活部署，具备高可用、易扩展的特性。")])])])],-1),t("p",null,"    AM模块接收到Client的新增EngineConn请求后，首先会对请求做参数校验，判断请求参数的合法性；其次是通过复杂规则选中一台最合适的EngineConnManager（ECM），以用于后面的EngineConn启动；接下来会向RM申请启动该EngineConn需要的资源；最后是向ECM请求创建EngineConn。",-1),t("p",null,"下面将对四个步骤进行详细说明。",-1),t("h3",null,"1. 请求参数校验",-1),t("p",null,"    AM模块在接受到引擎创建请求后首先会做参数判断，首先会做请求用户和创建用户的权限判断，接着会对请求带上的Label进行检查。因为在AM后续的创建流程当中，Label会用来查找ECM和进行资源信息记录等，所以需要保证拥有必须的Label，现阶段一定需要带上的Label有UserCreatorLabel(例：hadoop-IDE)和EngineTypeLabel(例：spark-2.4.3）。",-1),t("h3",null,"2. EngineConnManager（ECM）选择",-1),t("p",null,"    ECM选择主要是完成通过客户端传递过来的Label去选择一个合适的ECM服务去启动EngineConn。这一步中首先会通过LabelManager去通过客户端传递过来的Label去注册的ECM中进行查找，通过按照标签匹配度进行顺序返回。在获取到注册的ECM列表后，会对这些ECM进行规则选择，现阶段已经实现有可用性检查、资源剩余、机器负载等规则。通过规则选择后，会将标签最匹配、资源最空闲、负载低的ECM进行返回。",-1),t("h3",null,"3. EngineConn资源申请",-1),t("ol",null,[t("li",null,[t("p",null,"在获取到分配的ECM后，AM接着会通过调用EngineConnPluginServer服务请求本次客户端的引擎创建请求会使用多少的资源，这里会通过封装资源请求，主要包含Label、Client传递过来的EngineConn的启动参数、以及从Configuration模块获取到用户配置参数，通过RPC调用ECP服务去获取本次的资源信息。")]),t("li",null,[t("p",null,"EngineConnPluginServer服务在接收到资源请求后，会先通过传递过来的标签找到对应的引擎标签，通过引擎标签选择对应引擎的EngineConnPlugin。然后通过EngineConnPlugin的资源生成器，对客户端传入的引擎启动参数进行计算，算出本次申请新EngineConn所需的资源，然后返回给LinkisManager。"),t("p",null,[t("strong",null,"名词解释：")])])],-1),t("ul",null,[t("li",null,[t("p",null,[l("EgineConnPlugin：是Linkis对接一个新的计算存储引擎必须要实现的接口，该接口主要包含了这种EngineConn在启动过程中必须提供的几个接口能力，包括EngineConn资源生成器、EngineConn启动命令生成器、EngineConn引擎连接器。具体的实现可以参考Spark引擎的实现类："),t("a",{href:"https://github.com/apache/incubator-linkis/blob/master/linkis-engineconn-plugins/engineconn-plugins/spark/src/main/scala/com/webank/wedatasphere/linkis/engineplugin/spark/SparkEngineConnPlugin.scala"},"SparkEngineConnPlugin"),l("。")])]),t("li",null,[t("p",null,"EngineConnPluginServer：是加载了所有的EngineConnPlugin，对外提供EngineConn的所需资源生成能力和EngineConn的启动命令生成能力的微服务。")]),t("li",null,[t("p",null,"EngineConnPlugin资源生成器（EngineConnResourceFactory）：通过传入的参数，计算出本次EngineConn启动时需要的总资源。")]),t("li",null,[t("p",null,"EngineConn启动命令生成器（EngineConnLaunchBuilder）：通过传入的参数，生成该EngineConn的启动命令，以提供给ECM去启动引擎。")])],-1),t("ol",{start:"3"},[t("li",null,"AM在获取到引擎资源后，会接着调用RM服务去申请资源，RM服务会通过传入的Label、ECM、本次申请的资源，去进行资源判断。首先会判断客户端对应Label的资源是否足够，然后再会判断ECM服务的资源是否足够,如果资源足够，则本次资源申请通过，并对对应的Label进行资源的加减。")],-1),t("h3",null,"4. 请求ECM创建引擎",-1),t("ol",null,[t("li",null,"在完成引擎的资源申请后，AM会封装引擎启动的请求，通过RPC发送给对应的ECM进行服务启动，并获取到EngineConn的实例对象；"),t("li",null,"AM接着会去通过EngineConn的上报信息判断EngineConn是否启动成功变成可用状态，如果是就会将结果进行返回，本次新增引擎的流程也就结束。")],-1),t("h2",null,"二、 ECM启动EngineConn",-1),t("p",null,"名词解释：",-1),t("ul",null,[t("li",null,[t("p",null,"EngineConnManager（ECM）：EngineConn的管理器，提供引擎的生命周期管理，同时向RM汇报负载信息和自身的健康状况。")]),t("li",null,[t("p",null,"EngineConnBuildRequest：LinkisManager传递给ECM的启动引擎命令，里面封装了该引擎的所有标签信息、所需资源和一些参数配置信息。")]),t("li",null,[t("p",null,"EngineConnLaunchRequest：包含了启动一个EngineConn所需的BML物料、环境变量、ECM本地必需环境变量、启动命令等信息，让ECM可以依此构建出一个完整的EngineConn启动脚本。")])],-1),t("p",null,"ECM接收到LinkisManager传递过来的EngineConnBuildRequest命令后，主要分为三步来启动EngineConn：1. 请求EngineConnPluginServer，获取EngineConnPluginServer封装出的EngineConnLaunchRequest；2. 解析EngineConnLaunchRequest，封装成EngineConn启动脚本；3. 执行启动脚本，启动EngineConn。",-1),t("h3",null,"2.1 EngineConnPluginServer封装EngineConnLaunchRequest",-1),t("p",null,"通过EngineConnBuildRequest的标签信息，拿到实际需要启动的EngineConn类型和对应版本，从EngineConnPluginServer的内存中获取到该EngineConn类型的EngineConnPlugin，通过该EngineConnPlugin的EngineConnLaunchBuilder，将EngineConnBuildRequest转换成EngineConnLaunchRequest。",-1),t("h3",null,"2.2 封装EngineConn启动脚本",-1),t("p",null,"ECM获取到EngineConnLaunchRequest之后，将EngineConnLaunchRequest中的BML物料下载到本地，并检查EngineConnLaunchRequest要求的本地必需环境变量是否存在，校验通过后，将EngineConnLaunchRequest封装成一个EngineConn启动脚本",-1),t("h3",null,"2.3 执行启动脚本",-1),t("p",null,"目前ECM只对Unix系统做了Bash命令的支持，即只支持Linux系统执行该启动脚本。",-1),t("p",null,"启动前，会通过sudo命令，切换到对应的请求用户去执行该脚本，确保启动用户（即JVM用户）为Client端的请求用户。",-1),t("p",null,"执行该启动脚本后，ECM会实时监听脚本的执行状态和执行日志，一旦执行状态返回非0，则立马向LinkisManager汇报EngineConn启动失败，整个流程完成；否则则一直监听启动脚本的日志和状态，直到该脚本执行完成。",-1),t("h2",null,"三、EngineConn初始化",-1),t("p",null,"ECM执行了EngineConn的启动脚本后，EngineConn微服务正式启动。",-1),t("p",null,"名词解释：",-1),t("ul",null,[t("li",null,[t("p",null,"EngineConn微服务：指包含了一个EngineConn、一个或多个Executor，用于对计算任务提供计算能力的实际微服务。我们说的新增一个EngineConn，其实指的就是新增一个EngineConn微服务。")]),t("li",null,[t("p",null,"EngineConn：引擎连接器，是与底层计算存储引擎的实际连接单元，包含了与实际引擎的会话信息。它与Executor的差别，是EngineConn只是起到一个连接、一个客户端的作用，并不真正的去执行计算。如SparkEngineConn，其会话信息为SparkSession。")]),t("li",null,[t("p",null,"Executor：执行器，作为真正的计算存储场景执行器，是实际的计算存储逻辑执行单元，对EngineConn各种能力的具体抽象，提供交互式执行、订阅式执行、响应式执行等多种不同的架构能力。")])],-1),t("p",null,"EngineConn微服务的初始化一般分为三个阶段：",-1),t("ol",null,[t("li",null,[t("p",null,"初始化具体引擎的EngineConn。先通过Java main方法的命令行参数，封装出一个包含了相关标签信息、启动信息和参数信息的EngineCreationContext，通过EngineCreationContext初始化EngineConn，完成EngineConn与底层Engine的连接建立，如：SparkEngineConn会在该阶段初始化一个SparkSession，用于与一个Spark application建立了连通关系。")]),t("li",null,[t("p",null,"初始化Executor。EngineConn初始化之后，接下来会根据实际的使用场景，初始化对应的Executor，为接下来的用户使用，提供服务能力。比如：交互式计算场景的SparkEngineConn，会初始化一系列可以用于提交执行SQL、PySpark、Scala代码能力的Executor，支持Client往该SparkEngineConn提交执行SQL、PySpark、Scala等代码。")]),t("li",null,[t("p",null,"定时向LinkisManager汇报心跳，并等待EngineConn结束退出。当EngineConn对应的底层引擎异常、或是超过最大空闲时间、或是Executor执行完成、或是用户手动kill时，该EngineConn自动结束退出。")])],-1),t("hr",null,null,-1),t("p",null,"到了这里，EngineConn的新增流程就基本结束了，最后我们再来总结一下EngineConn的新增流程：",-1),t("ul",null,[t("li",null,[t("p",null,"客户端向LinkisManager发起新增EngineConn的请求；")]),t("li",null,[t("p",null,"LinkisManager校验参数合法性，先是根据标签选择合适的ECM，再根据用户请求确认本次新增EngineConn所需的资源，向LinkisManager的RM模块申请资源，申请通过后要求ECM按要求启动一个新的EngineConn；")]),t("li",null,[t("p",null,"ECM先请求EngineConnPluginServer获取一个包含了启动一个EngineConn所需的BML物料、环境变量、ECM本地必需环境变量、启动命令等信息的EngineConnLaunchRequest，然后封装出EngineConn的启动脚本，最后执行启动脚本，启动该EngineConn；")]),t("li",null,[t("p",null,"EngineConn初始化具体引擎的EngineConn，然后根据实际的使用场景，初始化对应的Executor，为接下来的用户使用，提供服务能力。最后定时向LinkisManager汇报心跳，等待正常结束或被用户终止。")])],-1)],p={setup:(n,{expose:t})=>(t({frontmatter:{}}),(n,t)=>(e(),i("div",c,h)))},E={setup(n){const i=a(localStorage.getItem("locale")||"en");return(n,t)=>"en"===i.value?(e(),o(r(g),{key:0})):(e(),o(r(p),{key:1}))}};export{E as default};
