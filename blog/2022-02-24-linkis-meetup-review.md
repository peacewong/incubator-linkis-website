
---
Feature introduction and application practices of Linkis 1.0.3

---
>Recently，The first meetup in 2022 was held by the WeDataSphere and Apache Linkis（incubating）communities.
This event invited Sargent Di of Linkis PPMC and Zhang Yanzhao of Linkis contributor to share the《Features of the New Version of Linkis1.0.3》 and 《The Transformation of Enterprise Big Data Platform Based on Linkis》


##  《Features of the New Version of Linkis1.0.3》by Sargent Di Linkis PPMC 

### 1.Introduction to Linkis

Linkis builds a layer of computing middleware between the upper application and the lower engine, solves the problem of "computing governance" in a standardized and reusable way, and provides powerful connectivity, control, orchestration, expansion and reuse capabilities.
By using the rest / websocket / JDBC and other standard interfaces provided by linkis, the upper application can easily connect and access the lower engine such as MySQL / spark / hive / Presto / Flink, and realize the horizontal interworking of user resources such as variables, functions and script files across the upper application.
By decoupling the upper application from the lower engine, linkis simplifies the complex network call relationship of the data platform, reduces the overall complexity, saves the development and operation and maintenance costs, and makes the data platform more flexible and controllable.
Github repo：https://github.com/apache/incubator-Linkis


### 2. New Feature in Linkis 1.0.3 

Apache Linkis(Incubating) 1.0.3 contains all Project Linkis-1.0.3.  
Linkis 1.0.3 is the first version update into Apache incubation.
It mainly completed the construction of ASF infrastructure，including license improvement /package name modification，added EngineConn's support for Operator and other functions，and fixed the bugs in version1.0.2 fed back by the community.

#### Main functions:

a)  HTTP restful API style replaces jersey with spring MVC.

b)  Replace codehaus JSON with fastxml JSON.

c)  Support engineconn / onceengineconn universal operator.

d)  Support for proxy users using Kerberos.

Learning more: https://github.com/apache/incubator-linkis

## 《The Transformation of Enterprise Big Data Platform Based on Linkis》by Zhang Yanzhao  Linkis contributor、Big Data Development Engineer

### 1.Introduction to Troila Big Data Platform

Troila Big Data Platform is a self-developed enterprise level big data platform product, which aims to help enterprises realize convenient development and data capitalization. As an upper layer application, it submits the workflow scheduling task to dolphin scheduler and the temporary task to linkis directly. It can also analyze the task parameters and submit the real-time task to linkis directly

### 2.Why introduce Linkis

With the development of business，there are more and more system modules, complex dependencies and huge deployment packages, resulting in long deployment time.When running data analysis，it is easy to make mistake，which will interfere with other tasks，cause memory overflow，affect the whole application and reduce the stability of the service.
Moreover, in the connection between the upper application and the lower engine, the connection, execution and state management of various components need to be maintained. The code is becoming more and more complex and difficult to expand. After investigation, it is found that the design idea and core features of linkis are a good solution.
As the computing middleware between the upper application and the lower engine, linkis decouples the application layer and the engine layer, simplifies the complex call relationship, reduces the overall complexity, and effectively saves the overall development and maintenance cost. In addition, with the support of linkis's unified entrance, stability and rich computing and storage engine, it can effectively help us solve the above business pain points.

### 3.Dolphin scheduler on Linkis Practice

In terms of task addition, in order to avoid supporting both dolphin schedule and linkis at the same time, we hand over the specific operations to perform tasks to linkis for unified completion. Dolphin schedule only configures and schedules the workflow, and encapsulates its split tasks into submittableinteractive job as the task of linkis, Submit to linki for unified operation of jobs.


In terms of installation and testing, it is inevitable to encounter some small problems. I share it with you as a reference.
Permission problem: error: could not find or load main class com webank. wedatasphere. Linkis. engineconn. launch. The engine connserver reported an error. After troubleshooting, it was found that the engine could not be started due to the failure to read the configuration file, insufficient permissions or unable to load the main class. WDS is turned on Linkis. storage. enable. io. Proxy proxy configuration and engine initialization to engineconn_ ROOT_ The dir directory is solved after recursive authorization.

The JDBC engine supports Clickhouse: no obvious error is reported, and the task is always running; Manually introduce dependencies into the JDBC engine to eliminate conflicting dependencies and enable it to support the Clickhouse data source.

In the future, we will continue to optimize the application of linkis in the business system, and look forward to exchanging experience with you.

####   *The above is a brief introduction. Please visit video playback for details.playback:https://www.bilibili.com/video/BV1La411h7Pf?spm_id_from=333.999.0.0*




