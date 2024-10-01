---
id: data_overview
title: Data Overview
sidebar_label: Data Overview
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The content on this side refers to the current Cozie version is v3.x.x. 
Some tables have a column referring to the older Cozie v2. That column contains information about the respective field name in the older Cozie v2, e.g., whether the field name was available in the older Cozie version and the field name it have had in the older Cozie version.

## Prefixes
| Prefix | Description | 
|--------|-------------|
| api_ | Backend settings |
| app_ | App related information |
| id_ | ID fields such as id_participant, id_password, id_onesignal |
| pss_ | Phone survey settings |
| q_ | Watch survey question responses |
| si_ | System information |
| ts_ | Time series |
| ws_ | Watch survey |
| wss_ | watch survey settings |

## Settings and index
| Field name | Type | Logging&nbsp;rate | Sampling interval| Description | Field name in Cozie v2|
|------------|------|-------------------|------------------|-------------|-----------------------|
| `id_experiment` | String | Logged with any other data point | - | Unique identifier for each experiment | `id_experiment` | 
| `id_onesignal` | String | Logged with any other data point | - |Unique OneSignal player id provided by OneSignal | `id_one_signal` |
| `id_participant` | String | Logged with any other data point | - | Unique identifier for each participant | `id_participant` |
| `id_password` | String | Logged with any other data point | - | 'Backend tab': Password for participant. It should be unique for each participant. It prevents data corruption by participants changing their `id_participant` or `id_experiment` | not available |
| `location_change` | Boolean | [***](#logging-rate) | - | Indicates location change of more than 50m | not available |
| `pss_reminder_days` | String | Logged when any sync button in the Cozie iPhone app  | -| Days on which the phone survey reminder is shown. | not available |
| `pss_reminder_enabled` | Boolean | Logged when any sync button in the Cozie iPhone app | - | Indicates whether the a phone survey reminder is enabled. (enabled: `True`) | not available |
| `pss_reminder_time` | String | Logged when any sync button in the Cozie iPhone app | - | Time at which the phone survey reminder is shown. | not available |
| `timestamp_lambda` | String | Logged with any other data point | - | Timestamp (UTC) of when the AWS Lambda function was invoked to insert the row into the database | `timestamp_lambda` |
| `transmit_trigger` | String | Logged with any other data point | - | Action that triggered the logging of the data corresponding to the same row | not available |
| `time`/`index` | String | Logged with any other data point | - | Timestamp (UTC) of when watch survey was submitted, also serves as index | `timestamp_end` |

## HealthKit data logged on the iPhone
| Field name | Type | Logging&nbsp;rate | Sampling interval| Description | Field name in Cozie v2|
|------------|------|-------------------|------------------|-------------|-----------------------|
| `ts_HRV` | Integer | [*](#logging-rate) | 15min | Heart Rate Variability in ms, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2881127-heartratevariabilitysdnn) | not available |
| `ts_altitude` | Integer | [***](#logging-rate) | - | Altitude in m | not available |
| `ts_audio_exposure_`<br/>`environment` | Integer | [*](#logging-rate) | 30min | Noise level in dB(A), provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081271-environmentalaudioexposure) | `ts_hearingEnvironmental`<br/>`Exposure`, `sound_pressure` | 
| `ts_audio_exposure_`<br/>`headphones` | Float? | [*](#logging-rate) | 30s? | Audio exposure in dB(A) from headphones, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081272-headphoneaudioexposure) | not available |
| `ts_heart_rate` | Integer? | [*](#logging-rate) | 3-6min (sometimes less) |Heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615138-heartrate)| `ts_heartRate`, `heart_rate` |
| `ts_latitude` | Float | [***](#logging-rate) | - | Latitude in ° | not available |
| `ts_location_`<br/>`accuracy_horizontal` | Float? | [***](#logging-rate) | - | Horizontal positioning accuracy in m (see `ts_latitude`, `ts_longitude`) | not available |
| `ts_location_`<br/>`accuracy_vertical` | Float? | [***](#logging-rate) | - | Vertical positioning accuracy in m (see `ts_altitude`) | not available |
| `ts_location_`<br/>`acquisition_method` | String | not yet implemented | - | is always 'GPS' | not available |
| `ts_location_floor` | Integer? | not yet implemented | - | is always 0.0 | not available |
| `ts_location_`<br/>`source_device` | String | not yet implemented | - | is always 'iPhone' | not available |
| `ts_longitude` | Float | [***](#logging-rate) | - | Longitude in ° | not available |
| `ts_oxygen_saturation` | Integer | [**](#logging-rate) | 1h | Blood oxygen saturation in % provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615377-oxygensaturation) | `ts_oxygenSaturation` |
| `ts_resting_heart_rate` | Integer | [*](#logging-rate) | 1d | Resting heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2867756-restingheartrate) | `ts_restingHeartRate` |
| `ts_sleep_REM` | Float? | [*](#logging-rate) | - | Duration of REM sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_awake` | Float? | [*](#logging-rate) | - | Duration of the participant being awake in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_core` | Float? | [*](#logging-rate) | - | Duration of light or intermediate sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_deep` | Float? | [*](#logging-rate) | - | Duration of deep sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_in_bed` | Float? | [*](#logging-rate) | - | Duration of the participant being in bed in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_stand_time` | Integer | [*](#logging-rate) | - | Stand time in min?, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3174858-applestandtime) | `ts_standTime` |
| `ts_step_count` | Integer | [*](#logging-rate) | ? | Number of steps walked, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615548-stepcount). The timestamp `time` marks the first step in the sample. | `ts_stepCount` |
| `ts_step_count_start_time` | String | ? | - | Start timestamp of the `ts_step_count` sample, coincides with`time` |  in development, will be added with Cozie 3.0.2 |
| `ts_step_count_end_time` | String | ? | - | End timestamp of the `ts_step_count` sample | in development, will be added with Cozie 3.0.2 |
| `ts_timestamp_location`| String | [*](#logging-rate) | ? | Timestamp (UTC) of when the GPS was retrieved | `timestamp_location` | 
| `ts_walking_distance` | Float | [*](#logging-rate) | ? | Distance walked in m, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615230-distancewalkingrunning). The timestamp `time` marks the first meter in the sample. | `ts_walkingDistance` |
| `ts_walking_distance_start_time` | String | ? | - | Start timestamp of the `ts_walking_distance` sample, coincides with`time` |  in development, will be added with Cozie 3.0.2 |
| `ts_walking_distance_end_time` | String | ? | - | End timestamp of the `ts_walking_distance` sample |  in development, will be added with Cozie 3.0.2 |
| `ts_wrist_temperature` | Integer | [*](#logging-rate) | 1d | Wrist temperature during sleep, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3951065-applesleepingwristtemperature) | not available |
| `ts_workout_type` | String | [*](#logging-rate) | - | Workout type recorded by the Apple Workout app, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkworkoutactivitytype) | - | Description |  in development, will be added with Cozie 3.0.2 |
| `ts_workout_duration` | Float | [*](#logging-rate) | - | Duration of workout in seconds, recorded by the Apple Workout app |  in development, will be added with Cozie 3.0.2 |
| `ts_exercise_time` | Integer | [*](#logging-rate) | - | Every full minute of movement that equals or exceeds the intensity of a brisk walk, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkactivitysummary/1615266-appleexercisetime) | - | ? | in development, will be added with Cozie 3.0.2 |
| `ts_active_energy_burned` | Float | [*](#logging-rate) | - | Amount of active energy the user burned during the specified day, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkactivitysummary/1615772-activeenergyburned) | - | ? | in development, will be added with Cozie 3.0.2 |



## Watch survey data
| Field name | Type | Logging&nbsp;rate | Sampling interval| Description | Field name in Cozie v2|
|------------|------|-------------------|------------------|-------------|-----------------------|
| `q_...` | String | Logged when the submit button at the end of the watch survey is pressed. | - |For field names of watch survey responses, see on the page for each watch survey example |  |
| `ws_HRV` | Float? | [**](#logging-rate) | 15min | Heart Rate Variability in ms, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2881127-heartratevariabilitysdnn) | not available |
| `ws_altitude` | Integer | [**](#logging-rate) | - | Altitude in m  | not available |
| `ws_audio_exposure_`<br/>`environment` | Float? | [**](#logging-rate) | 15min | Noise level in dB(A), provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081271-environmentalaudioexposure) | not available |
| `ws_audio_exposure_`<br/>`headphones` | Float? | [**](#logging-rate) | 30s? | Audio exposure in dB(A) from headphones, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081272-headphoneaudioexposure) | not available |
| `ws_heart_rate`| Float? | [**](#logging-rate) | 3-6min (sometimes less) |Heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615138-heartrate), submitted when iPhone Cozie app is opened. | not available |
| `ws_latitude` | Float | [**](#logging-rate) | - | Latitude in ° provided by GPS | `latitude` |
| `ws_location_`<br/>`accuracy_horizontal` | Float? | [**](#logging-rate) | - | Horizontal positioning accuracy in m (see `ws_latitude`, `ws_longitude`) | not available |
| `ws_location_`<br/>`accuracy_vertical` | Float? | [**](#logging-rate) | - | Vertical positioning accuracy in m (see `ws_altitude`) | not available |
| `ws_location_`<br/>`acquisition_method` | String | not yet implemented | - | is always 'GPS' | not available |
| `ws_location_floor` | Integer | not yet implemented | - | is always 0.0 | not available |
| `ws_location_`<br/>`source_device` | String | not yet implemented | - | is always 'Apple Watch' | not available |
| `ws_longitude` | Float | [**](#logging-rate) | - | Longitude in ° provided by GPS | `longitude` |

## HealthKit data logged on the Apple Watch
| Field name | Type | Logging&nbsp;rate | Sampling interval| Description | Field name in Cozie v2|
|------------|------|-------------------|------------------|-------------|-----------------------|
| `ws_oxygen_saturation` | Integer | [**](#logging-rate) | 1h | Blood oxygen saturation in % provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615377-oxygensaturation) | not available |
| `ws_resting_heart_rate` | Float? | [**](#logging-rate) | 1d | Resting heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2867756-restingheartrate) | not available |
| `ws_sleep_REM` | Float? | [**](#logging-rate) | - | Duration of REM sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_awake` | Float? | [**](#logging-rate) | - | Duration of the participant being awake in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_core` | Float? | [**](#logging-rate) | - | Duration of light or intermediate sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_deep` | Float? | [**](#logging-rate) | - | Duration of deep sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_in_bed` | Float? | [**](#logging-rate) | - | Duration of the participant being in bed in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_stand_time` | Float? | [**](#logging-rate) | - | Stand time in min?, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3174858-applestandtime) | not available |
| `ws_step_count` | Integer? | [**](#logging-rate) | - | Number of steps walked, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615548-stepcount). The timestamp `time` marks the first step in the sample. | not available |
| `ws_step_count_start_time` | String | ? | - | Start timestamp of the `ws_step_count` sample, coincides with`time` |  in development, will be added with Cozie 3.0.2 |
| `ws_step_count_end_time` | String | ? | - | End timestamp of the `ws_step_count` sample | in development, will be added with Cozie 3.0.2 |
| `ws_survey_count` | Integer | [**](#logging-rate) | - | Increasing key for each micro-survey response. Resets when Cozie app is (re-)installed. | `vote_count` |
| `ws_timestamp_location` | String | [**](#logging-rate) | - | Timestamp of the location measurement in UTC, Format: "%Y-%m-%dT%H:%M:%S.%fZ" | `timestamp_location` |
| `ws_timestamp_start` | String | [**](#logging-rate) | - | Timestamp (UTC) of when micro survey was started |`timestamp_start` |
| `ws_walking_distance` | Float | [**](#logging-rate) | - | Distance walked in m, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615230-distancewalkingrunning). The timestamp `time` marks the first meter in the sample. | not available |
| `ws_walking_distance_start_time` | String | ? | - | Start timestamp of the `ws_walking_distance` sample, coincides with`time` |  in development, will be added with Cozie 3.0.2 |
| `ws_walking_distance_end_time` | String | ? | - | End timestamp of the `ws_walking_distance` sample |  in development, will be added with Cozie 3.0.2 |
| `ws_wrist_temperature` | Float | [**](#logging-rate) | 1d |  Wrist temperature during sleep, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3951065-applesleepingwristtemperature) | not available |
| `ws_workout_type` | String | [**](#logging-rate) | - | Workout type recorded by the Apple Workout app, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkworkoutactivitytype) | - | Description |  in development, will be added with Cozie 3.0.2 |
| `ws_workout_duration` | Float | [**](#logging-rate) | - | Duration of workout in seconds, recorded by the Apple Workout app |  in development, will be added with Cozie 3.0.2 |
| `ws_exercise_time` | Integer | [**](#logging-rate) | - | Every full minute of movement that equals or exceeds the intensity of a brisk walk, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkactivitysummary/1615266-appleexercisetime) | - | ? | in development, will be added with Cozie 3.0.2 |
| `ws_active_energy_burned` | Float | [**](#logging-rate) | - | Amount of active energy the user burned during the specified day, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkactivitysummary/1615772-activeenergyburned) | - | ? | in development, will be added with Cozie 3.0.2 |
| `wss_goal` | Integer? | Logged when any sync button in the Cozie iPhone app | - |Watch survey response goal in the 'Settings' tab | not available |
| `wss_participation_days`| String | Logged when any sync button in the Cozie iPhone app | - | Participation days set in the Cozie app by the participant | `settings_participation_days` |
| `wss_participation_`<br/>`time_end` | String | Logged when any sync button in the Cozie iPhone app | - | Daily reminder end time set in the Cozie app by the participant | `settings_participation_`<br/>`time_end` |
| `wss_participation_`<br/>`time_start` | String | Logged when any sync button in the Cozie iPhone app | - | Daily reminder start time set in the Cozie app by the participant | `settings_participation_`<br/>`time_start` |
| `wss_reminder_enabled`(Please note the raw data field name currently contains a typo. This field is currently named `wss_reminder_enabeled`.) | Boolean? | Logged when any sync button in the Cozie iPhone app | - | Enable setting for the watch survey reminder in the 'Settings' tab | not available |
| `wss_reminder_interval` | String | Logged when any sync button in the Cozie iPhone app | - | Reminder frequency set in the Cozie app by the participant | `settings_notification_frequency` |
| `wss_time_out` | Integer | Not yet implemented | - | Minimal allowed duration between two watch survey responses | not available |
| `wss_title` | String | Logged when any sync button in the Cozie iPhone app | - | Title of watch survey selected in the 'Settings' tab | not available |

## Settings and metadata
| Field name | Type | Logging&nbsp;rate | Sampling interval| Description | Field name in Cozie v2|
|------------|------|-------------------|------------------|-------------|-----------------------|
| `api_phone_survey_url` | String | Logged when any sync button in the Cozie iPhone app | - | 'Backend tab': URL pointing to the phone survey, e.g., Qualtrics, Google Form or similar| not available |
| `api_read_key` | String  | Logged when any sync button in the Cozie iPhone app | - | 'Backend tab': Access key for the `api_read_url` | not available |
| `api_read_url` | String  | Logged when any sync button in the Cozie iPhone app | - | 'Backend tab': URL pointing to the database read API | not available |
| `api_watch_survey_url` | String | Logged when any sync button in the Cozie iPhone app | - | 'Backend tab': URL pointing to the JSON file with a custom watch survey | not available |
| `api_write_key` | String | Logged when any sync button in the Cozie iPhone app | - | 'Backend tab': Access key for the `api_write_url` | not available |
| `api_write_url` | String | Logged when any sync button in the Cozie iPhone app | - | 'Backend tab': URL pointing to the database write API | not available |
| `app_bundle_build_`<br/>`number` | String | Logged when any sync button in the Cozie iPhone app | - | Build number of iOS application | not available |
| `app_bundle_build_`<br/>`version` | String | Logged when any sync button in the Cozie iPhone app | - | Build version of iOS application | not available |
| `app_bundle_name` | String | Logged when any sync button in the Cozie iPhone app | - | iOS application name | not available |
| `app_one_signal_app_id` | String | Logged when any sync button in the Cozie iPhone app | - | OneSignal app ID (provided by OneSignal) | not available |
| `si_ios_version` | String | Logged when any sync button in the Cozie iPhone app | - | iOS version | not available |
| `si_iphone_battery_`<br/>`charge_state` | Float | Not yet implemented | - | iPhone battery charge state | not available |
| `si_iphone_cellular_`<br/>`signal_strength` | Float | Not yet implemented | - | Cellular signal strength on the iPhone | not available |
| `si_iphone_device_id` | String | Not yet implemented | - |  Unique iPhone hardware identifier | not available |
| `si_iphone_location_`<br/>`service_enabled` | Boolean | Not yet implemented | - | iPhone location services state | not available |
| `si_iphone_low_battery_`<br/>`mode_enabled` | Boolean | Not yet implemented | - | iPhone low power battery mode state | not available |
| `si_iphone_model` | String | Not yet implemented | - |iPhone hardware model identifier | not available |
| `si_iphone_wifi_`<br/>`signal_strength` | Float | Not yet implemented | - | Wifi signal strength on the iPhone | not available |
| `si_watch_battery_`<br/>`charge_state` | Float | Not yet implemented | - | Apple watch battery charge state | not available |
| `si_watch_cellular_`<br/>`signal_strength` | Float | Not yet implemented | - | Cellular signal strength on the Apple Watch | not available |
| `si_watch_connected_`<br/>`to_phone` | Boolean | Not yet implemented | - | State of connection between iPhone and Apple Watch | not available |
| `si_watch_device_id` | String | Not yet implemented | - | Unique identifier for Apple Watch hardware | not available |
| `si_watch_location_`<br/>`service_enabled` | Boolean | Not yet implemented | - | Apple Watch location services state | not available |
| `si_watch_model` | String | Not yet implemented | - | Apple Watch hardware model identifier | not available |
| `si_watch_wifi_`<br/>`signal_strength` | Float | Not yet implemented | - | Wifi signal strength on the Apple Watch | not available |
| `si_watchos_version` | String | Not yet implemented | - | WatchOS version | not available |

## Difference between `ts_` and `ws_`
The logging of time series data with the `ts_` prefix is triggered by several actions:
* Opening of the Cozie iPhone app
* Pressing any sync button in the Cozie iPhone app
* Background task

Logging time series data with the `ws_` prefix is triggered by the submit button at the end of the watch survey.

By the end of the experiment, the `ts_` data and `ws_` data should be nearly identical, e.g., the values for given timestamps for  `ts_heart_rate` and `ws_heart_rate` should be the same. The difference is the device that submits the data and the time the data is submitted. Because it is very difficult to sync the Cozie app on the Apple Watch with its counterpart on the Apple Watch in the background, we decided to log the data twice and then merge the two columns while processing the data. This approach maximizes the data upload frequency, maintainability, and ability to debug the app. 

It is very likely that the `ts_` data and `ws_` data will not be identical. Here are some reasons why:
 - More `ts_` data was collected after the last watch survey was submitted.
 - `ts_` data wasn't updated after the last watch survey was sent. 
 - Some data might have been lost somewhere between the app and the database.

 You can merge two corresponding `ts_` data and `ws_` data columns, as shown in the following code snippet:
 ```python
 df["ts_heart_rate_combined"] = df.groupby("id_participant")["ts_heart_rate"].fillna(df["ws_heart_rate"])
 ```

## Location data
Location data, e.g., `ts_latitude`, `ts_longitude`, with the `ts_` prefix is only sent every time the participant changes their location more than 50 meters, i.e., when and while the participant changes the location. Location data with the `ws_` prefix is sent when the submit button at the end of the watch survey is pressed, exactly the same as all other data with the `ws_` prefix ([see **](#logging-rate)).

Unlike the HealthKit data, e.g., `ts_heart_rate`/`ws_heart_rate`, the `ws_` and `ts_` location data are not to be expected to be the same. Nevertheless, you might consider combining the corresponding columns, depending on your application.


## Logging rate
Within the context of Cozie 'logging' refers to data being sent to the backend to be stored in the database (see also [Lambda timestamp](#lambda-timestamp-and-trigger)).
'Sampling' refers to the creation of measurement value. Sampling occurs more frequently. Several samples can be sent to the database in one action. For example, the heart rate is sampled at approximately 1 sample every three 3 minutes. All new heart rate samples are logged as `ws_heart_rate` when the watch survey is submitted. 
We put a lot of effort into increasing the logging rate as much as possible. However, there are limiting factors. HealthKit information can only be accessed while the device unlocked and background tasks run irregularly if at all.
Most frequent logging rate to  be expected is whenever a watch survey is submitted.

There are three modes of logging:
 - When the iPhone app is open / interacted with (*)
 - When a watch survey is submitted (**)
 - On location change (***)

## Lambda timestamp and trigger
For some of the field names there are two more accompanying fields for the timestamp of when the data was inserted into the database and what trigger the logging action. The field `lambda_timestamp` serves the same purpose. However this field value might over written in instances where values with identical `id_participant`, `id_experiment`, and `timestamp` are logged. The table below shows an example for `ts_HRV`. The columns `ts_HRV_lambda` and `ts_HRV_trigger` are used for debugging and development purposes. Unless you are investigating data anomalies or are working on app development, you can ignore these fields.

| Field name | Type | Logging rate | Description/Question | Field name in Cozie v2|
|--------------|------|---------------|----------------------|-------------------------|
| `ts_HRV` | Integer | [*](#logging-rate) | 15min | not available |
| `ts_HRV_lambda` | String | [*](#logging-rate) | Timestamp of when the value of `ts_HRV` was logged in UTC, Format: "%Y-%m-%dT%H:%M:%S.%fZ" | not available |
| `ts_HRV_trigger` | String | [*](#logging-rate) | String of what triggered the logging action of `ts_HRV` | not available |

These metadata columns shown in the example above are available for the following field names:

<table>
<tr><td>
<li><code>ts_HRV </code></li>
<li><code>ts_audio_exposure_environment </code></li>
<li><code>ts_audio_exposure_headphones </code></li>
<li><code>ts_heart_rate </code></li>
<li><code>ts_latitude </code></li>
<li><code>ts_oxygen_saturation </code></li>
<li><code>ts_resting_heart_rate </code></li>
<li><code>ts_sleep_REM </code></li>
<li><code>ts_sleep_awake </code></li>
<li><code>ts_sleep_core </code></li>
<li><code>ts_sleep_deep </code></li>
<li><code>ts_sleep_in_bed </code></li>
<li><code>ts_stand_time </code></li>
<li><code>ts_step_count </code></li>
<li><code>ts_walking_distance </code></li>
<p></p> 
</td>
<td>
<li><code>ws_HRV </code></li>
<li><code>ws_audio_exposure_environment </code></li>
<li><code>ws_audio_exposure_headphones </code></li>
<li><code>ws_heart_rate </code></li>
<li><code>ws_latitude </code></li>
<li><code>ws_oxygen_saturation </code></li>
<li><code>ws_resting_heart_rate </code></li>
<li><code>ws_sleep_REM </code></li>
<li><code>ws_sleep_awake </code></li>
<li><code>ws_sleep_core </code></li>
<li><code>ws_sleep_deep </code></li>
<li><code>ws_sleep_in_bed </code></li>
<li><code>ws_stand_time </code></li>
<li><code>ws_step_count </code></li>
<li><code>ws_walking_distance </code></li>
<li><code>ws_survey_count </code></li>
</td></tr>
</table>

### Triggers
Cozie data submission is triggered by different events. The table below lists the various events that cause Cozie to send data to the backend.
| Trigger label        | Cause for trigger |
|:---------------------|:------------------|
| application_appear   | Cozie phone app being opened |
| location_change      | Location change reported by iOS to Cozie |
| background_task      | Cozie app being scheduled by iOS in the background|
| watch_survey         | Watch survey response is submitted |
| app_change_settings  | Settings are changed in the Cozie phone app |
| sync_button_data_tab | Sync button is pressed in the 'Data' tab of the Cozie phone app|
| sync_button_settings_tab | Sync button in the Cozie 'Settings' tab is pressed |
| push_notification_action_button | Action button in a Cozie push notification is pressed |

## Difference between logging interval and sampling interval
The logging interval describes at what points in time the data is sent to the database. The sampling interval describes the time between two samples of the same data. For some data, these two are the same, e.g., for `ws_survey_count`, one data point is sent to the database when the submit button in the watch survey is pressed.
For `ws_heart_rate`, the Apple Watch records one data point every 3-6 minutes. This is the sampling interval. However, the data points are not sent to the database at the same time. The `ws_heart_rate` data points are only sent to the database when the submit button in the watch survey is pressed. When the submit button is pressed, all `ws_heart_rate` data points since the last time the submit button was pressed are sent to the database.  Hence, the log interval can be much longer than the sampling interval.

<!--
# To Do
#  - Switch 'app_bundle_build_number' and 'app_bundle_build_version' in Xcode
#  - Force string for q_ fields
#  - Check if sf_symbol_color can be used with cozie icons
#  - Check if .json files work for watch surveys
#  - Add wss_survey_id
#  - Change 'wss_reminder_enabeled' to 'wss_reminder_enabled'
#  - Add QR code generation to CoziePy
-->
<!--| `ts_body_mass` | Integer | | Body mass in kg, provided by Apple HealthKit, only available if manually provided in the Apple Health App. | `body_mass` |-->