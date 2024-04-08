---
id: backend_database_to_cozie
title: Reading Cozie data
sidebar_label: Reading Cozie data
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 


<img alt="Data flow from database to Cozie" src={useBaseUrl('img/backend/backend_read_influx.jpg')}width="30%" />

## Overview
The information shown in the 'Watch Survey' section on the 'Data' tab of the Cozie app is fetched from InfluxDB using the read API. These fields are a way for the participant to receive immediate feedback about the validity of their responses.

<img alt="Watch Survey section in Data tab" src={useBaseUrl('img/backend/cozie_tab_data_section_watch_survey.png')}width="30%" />

In the example above the, '100' is retrieved from the 'Settings' tab. The other three fields are retrieved using the read API.

The response body of the read API looks as follows:
```js title="Read API response body"
{
   "ws_survey_count_valid":"0",
   "ws_survey_count_invalid":"0",
   "ws_timestamp_survey_last":"-"
}
```

## Changes in the Cozie app
In order to have Cozie app read the data from your own backend, you need to update `API Read URL` and the `API Read Key` in the 'Backend' tab of the Cozie app.

### Lambda function code
- [cozie-apple-v3-app-read-influx-cozie](https://github.com/cozie-app/cozie-apple-backend/tree/main/lambda_cozie-apple-v3-app-read-influx-cozie)

### Lambda configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| **General configuration** | | |
| Memory | 512 MB |  |
| Ephemeral storage | 512 MB | default value |
| Timeout | 0 min 30 sec |  |
| **Triggers** | | |
| API Gateway | cozie-apple-v3-researcher-api |  |
| **Environment variables** | | |
| DB_HOST     | XXX.influxcloud.net | (replace 'XXX') |
| DB_NAME     | cozie-apple |  |
| DB_PASSWORD | XXX | (replace 'XXX') |
| DB_PORT     | 8086 |  |
| DB_USER     | Cozie-Apple-Lambda-Reader-App-API |  |
|  |  |  |
| **Layers** | | |
| AWSSDKPandas-Python311 |  | AWS Layer for Pandas |
| Influx |  | Custom layer for InfluxDB client |

### API Gateway configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| Proxy resource | disabled | default |
| Resource path | / | |
| Resource name | read-queue | |
| CORS (Cross Origin Resource Sharing) | enabled |
|  |  |  |
| **Method details** |  |  |
| Method type | ANY | |
| Integration type | Lambda function | |
| Lambda proxy integration | enabled | |
| Lambda function | arn:aws:lambda:[region]:[Accound ID]:function:cozie-apple-v3-app-read | check dropdown menu |
| Default timeout| enabled | 29 seconds (default) |
|  |  |  |
| **Method request settings** |  |  |
| Authorization | None | default |
| Request validator | None | default |
| API key required | enabled |  |
|  |  |  |
| **URL query string parameters** |  |  |
| leave empty |  | default |
|  |  |  |
| **HTTP request headers** |  |  |
|  leave empty | | default | 
|  |  |  |
| **Request body** |  |  |
| leave empty |  | default |