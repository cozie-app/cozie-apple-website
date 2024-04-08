---
id: backend_cozie_to_database
title: Sending Cozie data
sidebar_label: Sending Cozie data
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

<!--
<img alt="Data flow from Cozie app to database" src={useBaseUrl('img/backend/backend_write_influx.jpg')}width="30%" /> &nbsp;&nbsp;&nbsp;&nbsp;
-->
<img alt="Data flow from Cozie app to database" src={useBaseUrl('img/backend/backend_write_influx_with_SQS.jpg')}width="30%" />

## Overview
The Cozie app calls the AWS API Gateway using the API Gateway Key. The `API Write URL` and `API Write Key` are provided in the 'Backend' tab of the Cozie app. The API Gateway checks the API key and then forwards the request to the Lambda function 'cozie-apple-v3-app-write-queue'. This Lambda function splits the payload into chunks of 100 rows each and inserts it into the SQS queue 'cozie-apple-app-write-influx-queue'.

The SQS queue, then triggers the Lambda function 'cozie-apple-v3-app-write-influx-queue' which then processes the payload and inserts it into InfluxDB. The processing includes:
 - checking the datatype of field values
 - adding `timestamp_lambda`, `transmit_trigger`, `_lambda`, `_trigger` to the row
 - SQL sanitization


## Changes in the Cozie app
In order to have Cozie app send the data to your own backend, you need to update `API Write URL` and the `API Write Key` in the 'Backend' tab of the Cozie app.

## Payload data structure
The Cozie app sends data to the backend in the same payload format for all types of data. The payload format is inspired by the InfluxDB Python client and how it can use dictionaries as input.
The example below shows a minimal payload that is sent from the Cozie app to the backend. It represents one row in a InfluxDB table or `measurement`. All data, i.e., watch survey, HealthKit data, and GPS data follows this structure.
The field names listed under `fields` are listed in the [data overview](../download_data/data_overview), e.g., instead of `example_integer` you could use `ts_HRV`.


```js title="Watch survey payload example"
[
   {
      "time":"2022-09-01T07:02:51.578+0800",
      "measurement":"dev",
      "tags":{
         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
         "id_participant":"dev01",
         "id_password":"5DAC30B6E86"
      },
      "fields":{
         "example_integer":3,
         "example_string":"test",
      }
   }
]
```

|Field name| Comment |
|:-------- |:------- |
| time | Timestamp that is save to InfluxDB |
| measurement | This is similar to a Table in MySQL. See [InfluxDB key concepts for more information](https://docs.influxdata.com/influxdb/v1/concepts/key_concepts/). Within the Cozie framework data from each experiment is saved into a separate measurement/table. Hence, the `id_experiment` and measururement are synonym. In the example above the `id_experiment` is 'dev'.|
| **tags** |  |
| id_onesignal | Player ID provided by OneSignal. This ID is needed to send a push notification to this particular participant using the OneSignal API. |
| id_participant | Unique identifier for Participant |
| id_password | Password for participant. This password should be unique for reach participant. It is needed to send push notifications and retrieve Cozie data using our web API for researchers. |
| **fields** |  |
| example_integer | Example for an integer. Any string can be chosen as field key. The datatype of the field value needs to be checked before insertion into InfluxDB. |
| example_string | Example for a string. |



## Payload data structure for watch survey
The example below shows the payload from a watch survey response. The fields with the prefix `q_` are defined in the [JSON file for the watch survey](../custom_surveys/custom_watch_survey).
```js title="Watch survey payload example"
[
   {
      "time":"2022-09-01T07:02:51.578+0800",
      "measurement":"dev",
      "tags":{
         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
         "id_participant":"dev01",
         "id_password":"5DAC30B6E86"
      },
      "fields":{
         "ws_survey_count":3,
         "ws_timestamp_start":"2022-09-02T05:03:21.066+0800",
         "ws_timestamp_location":"2022-09-02T05:01:22.645+0800",
         "ws_longitude":103.77041753262827,
         "ws_latitude":1.2965471870539595,
         "ws_altitude": 73.4,
         "ws_location_floor":3,
         "ws_location_accuracy_horizontal":5.4,
         "ws_location_accuracy_vertical":2.8,
         "ws_location_acquisition_method":"GPS",
         "ws_location_source_device":"Apple Watch",
         "q_preference_thermal":"No Change",
         "q_preference_noise":"Quieter",
         "q_noise_source":"Appliances",
         "q_headphones":"No",
         "q_preference":"Cooler",
         "transmit_trigger":"watch_survey",
      }
   }
]
```

## Payload data structure for HealthKit data
```js title="HealthKit payload example"
[
   {
      "time":"2022-09-01T07:42:24.471+0800",
      "measurement":"dev",
      "tags":{
         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
         "id_participant":"dev01",
         "id_password":"5DAC30B6E86"
      },
      "fields":{
         "heart_rate":74,
         "transmit_trigger":"background_task"
      }
   },
   {
      "time":"2022-09-01T07:47:24.471+0800",
      "measurement":"dev",
      "tags":{
         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
         "id_participant":"dev01",
         "id_password":"5DAC30B6E86"
      },
      "fields":{
         "heart_rate":74,
         "transmit_trigger":"background_task"
      }
   },
   {
      "time":"2022-09-01T08:46:30.479+0800",
      "measurement":"dev",
      "tags":{
         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
         "id_participant":"dev01",
         "id_password":"5DAC30B6E86"
      },
      "fields":{
         "ts_audio_exposure_environment":57,
         "transmit_trigger":"background_task"
      }
   },
   {
      "time":"2022-09-02T04:22:59.454+0800",
      "measurement":"dev",
      "tags":{
         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
         "id_participant":"dev01",
         "id_password":"5DAC30B6E86"
      },
      "fields":{
         "ts_audio_exposure_environment":60,
         "transmit_trigger":"background_task"
      }
   }
]
```


### Lambda function code
- [cozie-apple-v3-app-write-queue](https://github.com/cozie-app/cozie-apple-backend/tree/main/lambda_cozie-apple-v3-app-write-queue)
- [cozie-apple-v3-app-write-influx-queue](https://github.com/cozie-app/cozie-apple-backend/tree/main/lambda_cozie-apple-v3-app-write-influx-queue)


### Lambda configuration

#### cozie-apple-v3-app-write-queue
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| **General configuration** | | |
| Memory | 1024 MB |  |
| Ephemeral storage | 512 MB | default value |
| Timeout | 0 min 20 sec |  |
|  |  |  |
| **Triggers** | | |
| API Gateway | cozie-apple-v3-researcher-api |  
|  |  |  |
| **Environment variables** | | |
| SQS_URL       | https:&#8203;//sqs.ap-southeast-1.amazonaws.com/XXX/cozie-apple-app-write-influx-queue | (replace 'XXX') |
|  |  |  |
| **Layers** | | |
| No layers required |  |  |

#### cozie-apple-v3-app-write-influx-queue
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| **General configuration** | | |
| Memory | 2047 MB |  |
| Ephemeral storage | 512 MB | default value |
| Timeout | 4 min 0 sec |  |
|  |  |  |
| **Triggers** | | |
| SQS | cozie-apple-app-write-influx-queue |  |
|  |  |  |
| **Environment variables** | | |
| DB_HOST     | XXX.influxcloud.net | (replace 'XXX') |
| DB_NAME     | cozie-apple |  |
| DB_PASSWORD | XXX | (replace 'XXX') |
| DB_PORT     | 8086 |  |
| DB_USER     | Cozie-Apple-Lambda-Writer-App-API |  |
|  |  |  |
| **Layers** | | |
| AWSSDKPandas-Python311 |  | AWS Layer for Pandas |
| Influx |  | Custom layer for InfluxDB client |


### SQS configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| **Details** |  |  |
| Type | Standard |  |
| Name | cozie-apple-app-write-influx-queue |  |
|  |  |  |
| **Configuration** |  |  |
| Visibility timeout | 30 seconds |  |
| Message retention period | 4 days |  |
| Maximum Message size | 256KB | maximum value |
| Delivery delay | 0 seconds |  |
| Receive message wait time | o seconds |  |
|  |  |  |
| **Encryption** |  |  |
| Server-side encryption | enabled |  |
| Encryption key type | Amazon SQS key (SSE-SQS) |  |
|  |  |  |
| **Access policy** |  |  |
| Method | Basic |  |
| Define who can send messages to the queue | Only the queue owner |  |
| Define who can receive messages from the queue | Only the queue owner |  |
| Redrive allow policy  | Disabled |  |
| Dead-letter queue | Disabled |  |


### API Gateway configuration
| Configuration | Value | Comment |
|:--------------|:------|:--------|
| Proxy resource | disabled | default |
| Resource path | / | |
| Resource name | write-queue | |
| CORS (Cross Origin Resource Sharing) | enabled |
|  |  |  |
| **Method details** |  |  |
| Method type | ANY | |
| Integration type | Lambda function | |
| Lambda proxy integration | enabled | |
| Lambda function | arn:aws:lambda:[region]:[Accound ID]:function:cozie-apple-v3-app-write-queue | check dropdown menu |
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

## Notes
- Initially, the write chain was shorter, only including the AWS API Gateway and one lambda function. Overtime, the amount of data logged by the Cozie app increased and the duration for the Lambda function to process the data increased as well. Eventually, it could take 20-30 seconds to process the request. The participant needed to wait this amount of time for the watch app to submit the survey. Python Lambda functions don't support streaming. Hence, Python Lambda functions cannot return a response early. Hence, we decided to make the data transfer from the app to the backend independent from the data insertion into the database.

- Currently, it the datatype of field values needs to be checked on the backend. Otherwise, one risks loosing data if the datatype varies. This can happen in unfortunate circumstances, e.g., a field value that is normally a float (`50.56`), but also can happen to be an integer (`51`). Whatever datatype is inserted first into InfluxDB defines the datatype of the column of a particular experiment ID (or `measurement`).

  This could be avoided if the datatype is encoded in the payload. This will likely be addressed in the near future, e.g., 
  ```js title="Watch survey payload example"
   [
      {
         "time":"2022-09-01T07:02:51.578+0800",
         "measurement":"dev",
         "tags":{
            "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",
            "id_participant":"dev01",
            "id_password":"5DAC30B6E86"
         },
         "fields_int":{
            "example_integer_1":3,
            "example_integer_2":5,
         },
         "fields_float":{
            "example_float_1":1.23,
            "example_float_2":90.45,
         },
         "fields_str":{
            "example_string_1":"test",
            "example_string_2":"asdf",
         }
      }
   ]
   ```