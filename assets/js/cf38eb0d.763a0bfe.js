"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9617],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51123:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Quick Deployment",sidebar_position:1},s=void 0,p={unversionedId:"deployment/quick_deploy",id:"deployment/quick_deploy",isDocsHomePage:!1,title:"Quick Deployment",description:"Notes",source:"@site/docs/deployment/quick_deploy.md",sourceDirName:"deployment",slug:"/deployment/quick_deploy",permalink:"/docs/1.1.3/deployment/quick_deploy",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/deployment/quick_deploy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Deployment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Version Overview",permalink:"/docs/1.1.3/release"},next:{title:"Cluster Deployment",permalink:"/docs/1.1.3/deployment/cluster_deployment"}},d=[{value:"Notes",id:"notes",children:[]},{value:"1. Determine your installation environment",id:"1-determine-your-installation-environment",children:[]},{value:"2. Linkis environment preparation",id:"2-linkis-environment-preparation",children:[{value:"a. Fundamental software installation",id:"a-fundamental-software-installation",children:[]},{value:"b. Create user",id:"b-create-user",children:[]},{value:"c. Preparing installation package",id:"c-preparing-installation-package",children:[]},{value:"d. Basic configuration modification(Do not rely on HDFS)",id:"d-basic-configuration-modificationdo-not-rely-on-hdfs",children:[]},{value:"e. Basic configuration modification(Rely on HDFS/Hive/Spark)",id:"e-basic-configuration-modificationrely-on-hdfshivespark",children:[]},{value:"f. Modify the database configuration",id:"f-modify-the-database-configuration",children:[]}]},{value:"3. Installation and Startup",id:"3-installation-and-startup",children:[{value:"1. Execute the installation script:",id:"1-execute-the-installation-script",children:[]},{value:"2. Installation steps",id:"2-installation-steps",children:[]},{value:"3. Whether install successfully",id:"3-whether-install-successfully",children:[]},{value:'<font color="red"> 4. Add mysql driver package</font>',id:"-4-add-mysql-driver-package",children:[]},{value:"5. Linkis quick startup",id:"5-linkis-quick-startup",children:[]}]}],c={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("font",{color:"red"},"Because the mysql-connector-java driver is under the GPL2.0 agreement and does not meet the license policy of the Apache open source agreement, starting from version 1.0.3, the official deployment package of the Apache version is provided. The default is no mysql-connector-java-x.x.x.jar dependency package. You need to add dependencies to the corresponding lib package during installation and deployment."),(0,o.kt)("p",null,"If you are new to Linkis, you can ignore this chapter, however, if you are already a Linkis user,  we recommend you reading the following article before installing or upgrading: ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.3/architecture/difference_between_1.0_and_0.x"},"Brief introduction of the difference between Linkis1.0 and Linkis0.X"),"."),(0,o.kt)("p",null,"Please note: Apart from the four EngineConnPlugins included in the Linkis 1.0 installation package by default: Python/Shell/Hive/Spark. You can manually install other types of engines such as JDBC depending on your own needs. For details, please refer to EngineConnPlugin installation documents."),(0,o.kt)("p",null,"Engines that Linkis 1.0 has adapted by default are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Engine Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Adaptation Situation"),(0,o.kt)("th",{parentName:"tr",align:null},"Included in official installation package"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Python"),(0,o.kt)("td",{parentName:"tr",align:null},"Adapted in 1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"Included")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,o.kt)("td",{parentName:"tr",align:null},"Adapted in 1.0"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Shell"),(0,o.kt)("td",{parentName:"tr",align:null},"Adapted in 1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"Included")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hive"),(0,o.kt)("td",{parentName:"tr",align:null},"Adapted in 1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"Included")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spark"),(0,o.kt)("td",{parentName:"tr",align:null},"Adapted in 1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"Included")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pipeline"),(0,o.kt)("td",{parentName:"tr",align:null},"Adapted in 1.0"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Presto"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not adapted in 1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not adapted in 1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Impala"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not adapted in 1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLSQL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not adapted in 1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TiSpark"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not adapted in 1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Not Included"))))),(0,o.kt)("h2",{id:"1-determine-your-installation-environment"},"1. Determine your installation environment"),(0,o.kt)("p",null,"The following is the dependency information for each engine."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Engine Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Dependency"),(0,o.kt)("th",{parentName:"tr",align:null},"Special Instructions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Python"),(0,o.kt)("td",{parentName:"tr",align:null},"Python Environment"),(0,o.kt)("td",{parentName:"tr",align:null},"If the path of logs and result sets are configured as hdfs://, then the HDFS environment is needed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,o.kt)("td",{parentName:"tr",align:null},"No dependency"),(0,o.kt)("td",{parentName:"tr",align:null},"If the path of logs and result sets are configured as hdfs://, then the HDFS environment is needed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Shell"),(0,o.kt)("td",{parentName:"tr",align:null},"No dependency"),(0,o.kt)("td",{parentName:"tr",align:null},"If the path of logs and result sets are configured as hdfs://, then the HDFS environment is needed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hive"),(0,o.kt)("td",{parentName:"tr",align:null},"Hadoop and Hive Environment"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spark"),(0,o.kt)("td",{parentName:"tr",align:null},"Hadoop/Hive/Spark"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirement: At least 3G memory is required to install Linkis.")),(0,o.kt)("p",null,"The default JVM heap memory of each microservice is 512M, and the heap memory of each microservice can be adjusted uniformly by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVER_HEAP_SIZE"),". If your computer resource is limited, we suggest modifying this parameter to 128M. as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim ${LINKIS_HOME}/deploy-config/linkis-env.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# java application default jvm memory.\nexport SERVER_HEAP_SIZE="128M"\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-linkis-environment-preparation"},"2. Linkis environment preparation"),(0,o.kt)("h3",{id:"a-fundamental-software-installation"},"a. Fundamental software installation"),(0,o.kt)("p",null,"The following pieces of software must be installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MySQL (5.5+), How to install MySQL"),(0,o.kt)("li",{parentName:"ul"},"JDK (1.8.0_141 or higher) How to install JDK")),(0,o.kt)("h3",{id:"b-create-user"},"b. Create user"),(0,o.kt)("p",null,"For example: ",(0,o.kt)("strong",{parentName:"p"},"The deployment user is hadoop"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a deployment user on the machine for installation.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo useradd hadoop  \n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Since the services of Linkis use  sudo -u {linux-user} to switch engines to execute jobs, the deployment user should have sudo permission and do not need to enter the password.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi /etc/sudoers\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"hadoop  ALL=(ALL)       NOPASSWD: NOPASSWD: ALL\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Set the following global environment variables on each installation node so that Linkis can use Hadoop, Hive and Spark.")),(0,o.kt)("p",{parentName:"li"},"Modify the .bash_rc of the deployment user, the command is as follows:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim /home/hadoop/.bash_rc ##Take the deployment user hadoop as an example.\n")),(0,o.kt)("p",null,"\u200b\t\tThe following is an example of setting environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," #JDK\n export JAVA_HOME=/nemo/jdk1.8.0_141\n\n ##If you do not use Hive, Spark or other engines and do not rely on Hadoop as          well,then there is no need to modify the following environment variables.\n #HADOOP  \n export HADOOP_HOME=/appcom/Install/hadoop\n export HADOOP_CONF_DIR=/appcom/config/hadoop-config\n #Hive\n export HIVE_HOME=/appcom/Install/hive\n export HIVE_CONF_DIR=/appcom/config/hive-config\n #Spark\n export SPARK_HOME=/appcom/Install/spark\n export SPARK_CONF_DIR=/appcom/config/spark-config/spark-submit\n export PYSPARK_ALLOW_INSECURE_GATEWAY=1  # Parameters must be added to Pyspark\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"If you want to equip your Pyspark and Python with drawing functions, you need to install the drawing module on each installation node"),". The command is as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install matplotlib\n")),(0,o.kt)("h3",{id:"c-preparing-installation-package"},"c. Preparing installation package"),(0,o.kt)("p",null,"Download the latest installation package from the Linkis release. (",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/download/main"},"Click here to enter the download page"),")"),(0,o.kt)("p",null,"Decompress the installation package to the installation directory and modify the configuration of the decompressed file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#version >=1.0.3\ntar -xvf apache-linkis-x.x.x-incubating-bin.tar.gz\n")),(0,o.kt)("h3",{id:"d-basic-configuration-modificationdo-not-rely-on-hdfs"},"d. Basic configuration modification(Do not rely on HDFS)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi deploy-config/linkis-env.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"}," #SSH_PORT=22        #Specify SSH port. No need to configuer if the stand-alone version is installed\n deployUser=hadoop      #Specify deploy user\n LINKIS_HOME=/appcom/Install/Linkis    # Specify installation directory.\n WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop    # Specify user root directory. Generally used to store user's script and log files, it's user's workspace. \n RESULT_SET_ROOT_PATH=file:///tmp/linkis   # The result set file path, used to store the result set files of the Job.\n ENGINECONN_ROOT_PATH=/appcom/tmp #Store the installation path of ECP. A local directory where deploy user has write permission.\n ENTRANCE_CONFIG_LOG_PATH=file:///tmp/linkis/  #Entrance's log path\n\n ## LDAP configuration. Linkis only supports deploy user login by default, you need to configure the following parameters to support multi-user login.\n #LDAP_URL=ldap://localhost:1389/ \n #LDAP_BASEDN=xxx\n")),(0,o.kt)("h3",{id:"e-basic-configuration-modificationrely-on-hdfshivespark"},"e. Basic configuration modification(Rely on HDFS/Hive/Spark)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi deploy-config/linkis-env.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"}," SSH_PORT=22       #Specify SSH port. No need to configuer if the stand-alone version is installed\n deployUser=hadoop      #Specify deploy user\n WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop     #Specify user root directory. Generally used to store user's script and log files, it's user's workspace.\n RESULT_SET_ROOT_PATH=hdfs:///tmp/linkis   # The result set file path, used to store the result set files of the Job.\n ENGINECONN_ROOT_PATH=/appcom/tmp #Store the installation path of ECP. A local directory where deploy user has write permission.\n ENTRANCE_CONFIG_LOG_PATH=hdfs:///tmp/linkis/  #Entrance's log path\n\n #1.0 supports multi-Yarn clusters, therefore, YARN_RESTFUL_URL must be configured\n YARN_RESTFUL_URL=http://127.0.0.1:8088  #URL of Yarn's ResourceManager\n\n # If you want to use it with Scriptis, for CDH version of hive, you need to set the following parameters.(For the community version of Hive, you can leave out the following configuration.)\n HIVE_META_URL=jdbc://...   #URL of Hive metadata database\n HIVE_META_USER=   # username of the Hive metadata database \n HIVE_META_PASSWORD=    # password of the Hive metadata database\n \n # set the conf directory of hadoop/hive/spark\n HADOOP_CONF_DIR=/appcom/config/hadoop-config  #hadoop's conf directory\n HIVE_CONF_DIR=/appcom/config/hive-config   #hive's conf directory\n SPARK_CONF_DIR=/appcom/config/spark-config #spark's conf directory\n\n ## LDAP configuration. Linkis only supports deploy user login by default, you need to configure the following parameters to support multi-user login.\n #LDAP_URL=ldap://localhost:1389/ \n #LDAP_BASEDN=dc=webank,dc=com\n \n ##If your spark version is not 2.4.3, you need to modify the following parameter\uff1a\n #SPARK_VERSION=3.1.1\n\n ##\uff1aIf your hive version is not 1.2.1, you need to modify the following parameter\uff1a\n #HIVE_VERSION=2.3.3\n")),(0,o.kt)("h3",{id:"f-modify-the-database-configuration"},"f. Modify the database configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi deploy-config/db.sh \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# set the connection information of the database\n# including ip address, database's name, username and port\n# Mainly used to store user's customized variables, configuration parameters, UDFs, and samll functions, and to provide underlying storage of the JobHistory.\nMYSQL_HOST=\nMYSQL_PORT=\nMYSQL_DB=\nMYSQL_USER=\nMYSQL_PASSWORD=\n")),(0,o.kt)("h2",{id:"3-installation-and-startup"},"3. Installation and Startup"),(0,o.kt)("h3",{id:"1-execute-the-installation-script"},"1. Execute the installation script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install.sh\n")),(0,o.kt)("h3",{id:"2-installation-steps"},"2. Installation steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The install.sh script will ask you whether to initialize the database and import the metadata. ")),(0,o.kt)("p",null,"It is possible that a user might repeatedly run the install.sh script and results in clearing all data in databases. Therefore, each time the install.sh is executed, user will be asked if they need to initialize the database and import the metadata."),(0,o.kt)("p",null,"Please select yes on the ",(0,o.kt)("strong",{parentName:"p"},"first installation"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note: If you are upgrading the existing environment of Linkis from 0.X to 1.0, please do not choose yes directly,  refer to Linkis1.0 Upgrade Guide first.")),(0,o.kt)("h3",{id:"3-whether-install-successfully"},"3. Whether install successfully"),(0,o.kt)("p",null,"You can check whether the installation is successful or not by viewing the logs printed on the console. "),(0,o.kt)("p",null,"If there is an error message, check the specific reason for that error or refer to FAQ for help."),(0,o.kt)("h3",{id:"-4-add-mysql-driver-package"},(0,o.kt)("font",{color:"red"}," 4. Add mysql driver package")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Because the mysql-connector-java driver is under the GPL2.0 agreement and does not meet the license policy of the Apache open source agreement, starting from version 1.0.3, the official deployment package of the Apache version is provided. The default is no mysql-connector-java-x.x.x.jar dependency package, you need to add dependencies to the corresponding lib package during installation and deployment"))),(0,o.kt)("p",null,"To download the mysql driver, take version 5.1.49 as an example: ",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar"},"download link")," ",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar"},"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar")),(0,o.kt)("p",null,"Copy the mysql driver package to the lib package path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp mysql-connector-java-5.1.49.jar {LINKIS_HOME}/lib/linkis-spring-cloud-services/linkis-mg-gateway/\ncp mysql-connector-java-5.1.49.jar {LINKIS_HOME}/lib/linkis-commons/public-module/\n")),(0,o.kt)("h3",{id:"5-linkis-quick-startup"},"5. Linkis quick startup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice")," that if you use DSS or other projects that rely on Linkis version < 1.1.1, you also need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo "wds.linkis.session.ticket.key=bdp-user-ticket-id" >> linkis.properties\n')),(0,o.kt)("p",null,"(1). Start services"),(0,o.kt)("p",null,"Run the following commands on the installation directory to start all services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh sbin/linkis-start-all.sh\n")),(0,o.kt)("p",null,"(2). Check if start successfully "),(0,o.kt)("p",null,"You can check the startup status of the services on the Eureka, here is the way to check:"),(0,o.kt)("p",null,"Open http://${EUREKA_INSTALL_IP}:${EUREKA_PORT} on the browser and check if services have registered successfully. "),(0,o.kt)("p",null,"If you have not specified EUREKA_INSTALL_IP and EUREKA_INSTALL_IP in config.sh, then the HTTP address is ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:20303"},"http://127.0.0.1:20303")),(0,o.kt)("p",null,"As shown in the figure below, if all the following micro-services are registered in the Eureka, it means that they've started successfully and been able to work."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Linkis1.0_Eureka",src:n(39574).Z})))}u.isMDXComponent=!0},39574:function(e,t,n){t.Z=n.p+"assets/images/Linkis1.0_combined_eureka-3d096175871c82b66a0a8baedfed2987.png"}}]);