---
id: backend_retrieving_cozie_data
title: Retrieving Cozie data
sidebar_label: Retrieveing data
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

<img alt="Data flow from database to researcher" src={useBaseUrl('img/backend/backend_retrieve_data.jpg')}width="30%" />

## Overview

How to retrieve data from a user/researcher perspective is shown under [Data and Download](../download_data/download)

## Lambda function code

```python title="Lambda function"

```



### Settings
- General configuration  
    - Timeout: 4 min 0 sec
    - Memory: 4096 MB
    - Ephemeral storage: 512 MB
- Function URL:
    - Auth type: None
    - Invoice mode: Buffered
    - CORS: Not enabled
- Triggers:
    - API Gateway: cozie-apple-researcher-api
- Environment variables:
    - DB_HOST: XXX.influxcloud.net
    - DB_NAME: cozie-apple
    - DB_PASSWORD: XXX
    - DB_USER: Cozie-Apple-Lambda-Reader
    - S3_BUCKET_NAME: cozie-apple-web-api

## Conclusion
This way of retrieving the Cozie data is very simple and straight forward. It comes at the disadvantage that it can be slow and it can peak the memory usage of InfluxDB. In the worst case, the memory usage exceeds the maximum limit and crashed the InfluxDB, which causes a restart of the instance. This can be avoided by only querying data of one participant at a time and even limiting the retrieved for one participant.
An alternative is to use a cache that is frequently updated. This allow to only request data that has not yet been cached and even most of the pre-processing can be done ahead of time. For more information see [how to write to a cache](backend_cache_write) and [how to read from a cache](backend_cache_read)