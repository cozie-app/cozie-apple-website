---
id: custom_backend
title: Custom Backend
sidebar_label: Custom backend
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

The backend of Cozie is fairly simple and the creation of your own Cozie backend should be manageable provided you have some experience with web technology and databases. By creating your own backend you can operate the Cozie app fully independent and you can make changes in order to be compliant with your domestic data privacy laws.

Most changes in the backend of Cozie can be accommodated by updating the settings in the 'Backend tab' of the Cozie app. However, if you want to send push notifications independent of us, you will need create a copy of the Cozie app and publish your own version. We will show how it can be done.

## Overview
The Cozie backend is created using Amazon Web Services (AWS). We primarily use AWS Lambda functions for web interfaces and data processing and InfluxDB as database engine. All services are hosted in the AWS region South East Asia (Singapore) / ap-southeast-1.

There is only 4 backend functions in the Cozie backend:
 - [Write data sent by the Cozie app to the Influx DB](backend_cozie_to_database)
 - [Read data from the InfluxDB and send it to the Cozie app](backend_database_to_cozie)
 - [Retrieve data from the InfluxDB and sent it to the researcher](backend_retrieving_cozie_data)
 - [Send push notification to the Cozie app](backend_push_notifcations)

## AWS
Amazon Web Services (AWS) offers countless services. It is quite difficult to keep an overview. Fortunately, the Cozie backend only uses one such service at its core, which is AWS Lambda. AWS Lambda allows you to execute code in the cloud and send requests and data to the lambda function The service is available for many programming languages. For Cozie, we focus on Python.

- **Core services**
   - AWS Lambda
- **Management**
   - AWS Cost Explorer
   - AWS CloudWatch
- **Advanced features**
   - AWS API Gateway
   - AWS EventBridge
   - AWS Simple Queue Service (SQS)
   - AWS Simple Storage Service (S3)

To make the operation and management of the Cozie backend a bit easier, we use a few more services. 

The **AWS Cost Explorer** allows you to monitor the cost of the AWS services. However, most of the Cozie operation should fit into the free tier of AWS provided it is dialed in.

With **AWS CloudWatch**, we monitor the Lambda function and detect errors. Normally, there are no errors, but we like stay on top of things.

**AWS API Gateway** allows you to route request and do authentication, e.g., with API keys. Instead of using AWS API Gateway, it is also possible to send requests directly to the URL of and AWS Lambda function.

**AWS API EventBridge** offers scheduling. This comes in handy if you want to execute a Lambda function at a certain interval or time of day. This could be the case if you want to monitor Cozie data and send push notification if certain conditions are met. See [Just-in-Time-Adaptive Interventions (JITAI)](https://cozie.app/docs/research/publications-jitai) for more information.

**AWS Simple Queue Sevice (SQS)** can help to speed up the process of the Cozie app sending data to backend. The Cozie app can accumulate data over several hours, e.g., overnight. If the participant then submits a watch survey in the morning, a fair bit of data is sent to the backend. The respective Lambda function can take several seconds to complete and respond to the Cozie app, which feels like an eternity for the participant. 

To remedy the situation, the data can be sent to the SQS first instead to a Lambda function. The SQS buffers the data and responds to the app quickly. Then SQS can call the Lambda function that ingests the Cozie data and inserts it into InfluxDB.

Similarly, retrieving Cozie data for research, can take a few minutes if the dataset includes dozens of participants who provided data for several weeks. This can lead to memory issues in InfluxDB and/or wait times for the researcher requesting the data. 

To speed up the data retrieval, Cozie data can be retrieved and pre-processed in regular intervals. The pre-processed data can then be cached using **AWS Simple Storage Service (S3)**. When a research wants to retrieve the Cozie data, the pre-processed data is fetched from the S3 cache and only the Cozie data that has not already been cached needs to be fetched from the database. This process is much faster and more gentle on the memory of the InfluxDB.

## InfluxDB
InfluxDB is the database engine that we use in the backend of Cozie. It is a database optimized for time-series data. It uses a query language that is similar to SQL. 

There are a few key differences on the surface. Being aware of these conventions makes it much easier to understand this documentation.
What is called a `table` in MySQL is a `measurement` in InfluxDB.
There are two different kinds of `column` types in InfluxDB. They are called `tags` and `fields`. The `column name` is either a `field key` or `tag key`. The value in a column is either a `tag value` or `key value`.
In an SQL query, you can only `GROUP BY` `time` interval and tag `values`. 
InfluxDB identifies unique data points by their measurement, tag set, and timestamp (See [here](https://docs.influxdata.com/influxdb/v2/write-data/best-practices/duplicate-points/) for more information.).
If you insert data with the same `measurement`, `timestamp`, and `tag` values that already exist in the database, then the row is overwritten without warning.

See Influx' documentation for the [InfluxDB Key concepts](https://docs.influxdata.com/influxdb/v1/concepts/key_concepts/).

## Costs
We have experience with approximately 50-100 participants enrolled in an experiment using the Cozie app. 

