---
id: backend_retrieving_cozie_data
title: Retrieving Cozie data
sidebar_label: Retrieving data
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

<img alt="Data flow from database to researcher" src={useBaseUrl('img/backend/backend_retrieve_data.jpg')}width="60%" />

## Overview
How to retrieve data from a user/researcher perspective is shown under [Data and Download](../download_data/download)

There are a few technical constraints that are governing the design of the web API for Cozie dat retrieval:
 - Payload limit of Python Lambda function: 6MB
 - Timeout limit of AWS API Gateway: 30 seconds
 - InfluxDB Cloud cluster memory: 4GB

If any of these limits are reached, the web API returns an error. If the memory of InfluxDB is exceeded, the cluster crashes and restarts. This process takes a few minutes during which no data can be written to or read from the InfluxDB.
To avoid reaching the memory limit of the InfluxDB data of only one participant is queried at a time.

## Lambda function code
- [cozie-apple-v3-researcher-read-influx](https://github.com/cozie-app/cozie-apple-backend/tree/main/lambda_cozie-apple-v3-researcher-read-influx)

### Lambda configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| **General configuration** | | |
| Memory | 4096 MB |  |
| Ephemeral storage | 512 MB | default value |
| Timeout | 4 min 0 sec |  |
|  |  |  |
| **Triggers** | | |
| API Gateway | cozie-apple-v3-researcher-api |  |
|  |  |  |
| **Environment variables** | | |
| DB_HOST     | XXX.influxcloud.net | (replace 'XXX') |
| DB_NAME     | cozie-apple |  |
| DB_PASSWORD | XXX | (replace 'XXX') |
| DB_PORT     | 8086 |  |
| DB_USER     | Cozie-Apple-Lambda-Writer-App-API |  |
| S3_BUCKET_NAME | cozie-apple-web-api |  |
|  |  |  |
| **Layers** | | |
| AWSSDKPandas-Python311 |  | AWS Layer for Pandas |
| Influx |  | Custom layer for InfluxDB client |

### S3 bucket configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| **General configuration** | | |
| Bucket name | cozie-apple-web-api |  |

### API Gateway configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| Proxy resource | disabled | default |
| Resource path | / | |
| Resource name | retrieve | |
| CORS (Cross Origin Resource Sharing) | enabled |
|  |  |  |
| **Method details** |  |  |
| Method type | ANY | |
| Integration type | Lambda function | |
| Lambda proxy integration | enabled | |
| Lambda function | arn:aws:lambda:[region]:[Accound ID]:function:cozie-apple-v3-researcher-read-influx | check dropdown menu |
| Default timeout| enabled | 29 seconds (default) |
|  |  |  |
| **Method request settings** |  |  |
| Authorization | None | default |
| Request validator | None | default |
| API key required | enabled |  |
|  |  |  |
| **URL query string parameters** |  |  |
|  |  | leave default |
|  |  |  |
| **HTTP request headers** |  |  |
|  |  | leave default |
|  |  |  |
| **Request body** |  |  |
|  |  | leave default |
|  |  |  |

## Conclusion
If you don't need to offer a web API then it might be easier to retrieve the data from your database directly and omitting this part of the web API.