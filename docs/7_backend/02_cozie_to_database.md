---
id: backend_cozie_to_database
title: Sending Cozie data
sidebar_label: Sending Cozie data
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 


<img alt="Data flow from Cozie app to database" src={useBaseUrl('img/backend/backend_write_influx.jpg')}width="100%" />

## Overview

## Changes in the Cozie app

## Payload data structure
The Cozie app sends data to the backend in the same payload format for all types of data. The payload format is inspired by the InfluxDB Python client and how it can use dictionaries as input.
The example below shows a minimal payload that is sent from the Cozie app to the backend. All data, i.e., watch survey, HealthKit data, and GPS data follows this structure.
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
| -------- | ------- |
| time | Timestamp that is save to InfluxDB |
| measurement | This is similar to a Table in MySQL. See [InfluxDB key concepts for more information](https://docs.influxdata.com/influxdb/v1/concepts/key_concepts/). Within the Cozie framework data from each experiment is saved into a separate measurement/table. Hence, the `id_experiment` and measururement are synonym. In the example above the `id_experiment` is 'dev'.|
| tags |  |
| id_onesignal |  |
| id_participant |  |
| id_password |  |
| fields |  |
| example_integer |  |
| example_string |  |



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
         //"ws_timestamp_end":"2022-09-02T05:03:36.943+0800", // should be the same as time
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
         //"timestamp_lambda":"2022-09-05T01:00:35.511782Z"
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
         //"timestamp_lambda":"2022-09-05T01:00:35.511782+0800"
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
         //"timestamp_lambda":"2022-09-05T01:00:35.511782+0800"
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
         //"timestamp_lambda":"2022-09-05T01:00:35.511782+0800"
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
         //"timestamp_lambda":"2022-09-05T01:00:35.511782+0800"
      }
   }
]
```


### Lambda function code

```python title="Lambda function"

```

### Settings
- General configuration  
   - Timeout: 4 min 0 sec
   - Memory: 2047 MB
   - Ephemeral storage: 512 MB
- Function URL:
   - Auth type: None
   - Invoice mode: Buffered
   - CORS: Not enabled
- Environment variables:
   - DB_HOST: XXX.influxcloud.net
   - DB_NAME: cozie-apple
   - DB_PASSWORD: XXX
   - DB_USER: Cozie-Apple-Lambda-Writer