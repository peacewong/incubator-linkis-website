---
title: BML物料库架构
sidebar_position: 2
---
## 背景

BML（物料库服务）是linkis的物料管理系统，主要用来存储用户的各种文件数据，包括用户脚本、资源文件、第三方Jar包等，也可以存储引擎运行时需要使用到的类库。

具备以下功能点：

1)、支持各种类型的文件。支持文本形式和二进制形式的文件，如果是在大数据领域的用户，可以将他们的脚本文件、物料压缩包都可以存储到本系统中。

2）、服务无状态，多实例部署，做到服务高可用。本系统在部署的时候，可以进行多实例部署，每个实例对外独立提供服务，不会互相干扰，所有的信息都是存储在数据库中进行共享。

3）、使用方式多样。提供Rest接口和SDK两种方式，用户可以根据自己的需要进行选择。

4）、文件采用追加方式，避免过多的HDFS小文件。HDFS小文件多会导致HDFS整体性能的下降，我们采用了文件追加的方式，将多个版本的资源文件合成一个大文件，有效减少了HDFS的文件数量。

5)、精确权限控制，用户资源文件内容安全存储。资源文件往往会有重要的内容，用户只希望自己可读

6）、提供了文件上传、更新、下载等操作任务的生命周期管理。

## 架构图

![BML架构图](/Images-zh/Architecture/bml-02.png)

## 架构说明

1、Service层 包含资源管理、上传资源、下载资源、共享资源还有工程资源管理。

资源管理负责资源的增删改查操作，访问权限控制，文件是否过期等基本操作。

2、文件版本控制
每个BML资源文件都是具有版本信息的，同一个资源每次更新操作都会产生一个新的版本，当然也支持历史版本的查询和下载操作。BML使用版本信息表记录了每个版本的资源文件HDFS存储的偏离位置和大小，可以在一个HDFS文件上存储多个版本的数据。

3、资源文件存储
主要使用HDFS文件作为实际的数据存储，HDFS文件可以有效保证物料库文件不被丢失，文件采用追加方式，避免过多的HDFS小文件。

### 核心流程

**上传文件：**

1.  判断用户上传文件的操作类型，属于首次上传还是更新上传，如果是首次上传需要新增一条资源信息记录，系统已经为这个资源生成了一个全局唯一标识的resource_id和一个资源放置的位置resource_location。资源A的第一个版本A1需要在HDFS文件系统中resource_location位置进行存储。存储完之后，就可以得到第一个版本记为V00001，如果是更新上传需要查找上次最新的版本。

2.  上传文件流到指定的HDFS文件，如果是更新则采用文件追加的方式加到上次内容的末尾。

3.  新增一条版本记录，每次上传都会产生一条新的版本记录。除了记录这个版本的元数据信息外，最重要的是记录了该版本的文件的存储位置，包括文件路径，起始位置，结束位置。

**下载文件：**

1.  用户下载资源的时候，需要指定两个参数一个是resource_id，另外一个是版本version，如果不指定version的话，默认下载最新版本。

2.  用户传入resource_id和version两个参数到系统之后，系统查询resource_version表，查到对应的resource_location和start_byte和end\_byte进行下载，通过流处理的skipByte方法，将resource\_location的前(start_byte-1)个字节跳过，然后读取到end_byte
    字节数。读取成功之后，将流信息返回给用户。

3.  在resource_download_history中插入一条下载成功的记录

## 数据库设计

1、资源信息表(resource)

| 字段名            | 作用                         | 备注                             |
|-------------------|------------------------------|----------------------------------|
| resource_id       | 全局唯一标识一个资源的字符串 | 可以采用UUID进行标识             |
| resource_location | 存放资源的位置               | 例如 hdfs:///tmp/bdp/\${用户名}/ |
| owner             | 资源的所属者                 | 例如 zhangsan                    |
| create_time       | 记录创建时间                 |                                  |
| is_share          | 是否共享                     | 0表示不共享，1表示共享           |
| update\_time      | 资源最后的更新时间           |                                  |
| is\_expire        | 记录资源是否过期             |                                  |
| expire_time       | 记录资源过期时间             |                                  |

2、资源版本信息表（resource_version）

| 字段名            | 作用               | 备注     |
|-------------------|--------------------|----------|
| resource_id       | 唯一标识资源       | 联合主键 |
| version           | 资源文件的版本     |          |
| start_byte        | 资源文件开始字节数 |          |
| end\_byte         | 资源文件结束字节数 |          |
| size              | 资源文件大小       |          |
| resource_location | 资源文件放置位置   |          |
| start_time        | 记录上传的开始时间 |          |
| end\_time         | 记录上传的结束时间 |          |
| updater           | 记录更新用户       |          |

3、资源下载历史表(resource_download_history)

| 字段        | 作用                      | 备注                           |
|-------------|---------------------------|--------------------------------|
| resource_id | 记录下载资源的resource_id |                                |
| version     | 记录下载资源的version     |                                |
| downloader  | 记录下载的用户            |                                |
| start\_time | 记录下载时间              |                                |
| end\_time   | 记录结束时间              |                                |
| status      | 记录是否成功              | 0表示成功，1表示失败           |
| err\_msg    | 记录失败原因              | null表示成功，否则记录失败原因 |
