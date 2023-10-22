---
id: data_overview
title: Data Overview
sidebar_label: Data Overview
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';


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

## Field descriptions

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
| `id_experiment` | String | Logged with any other data point | - | Unique identifier for each experiment | `id_experiment` | 
| `id_onesignal` | String | Logged with any other data point | - |Unique OneSignal player id provided by OneSignal | `id_one_signal` |
| `id_participant` | String | Logged with any other data point | - | Unique identifier for each participant | `id_participant` |
| `id_password` | String | Logged with any other data point | - | 'Backend tab': Password for participant. It should be unique for each participant. It prevents data corruption by participants changing their `id_participant` or `id_experiment` | not available |
| `location_change` | Boolean | *** | - | Indicates location change of more than 50m | not available |
|  |  |  |  |  |
| `pss_reminder_days` | String | Logged when any sync button in the Cozie iPhone app  | -| Days on which the phone survey reminder is shown. | not available |
| `pss_reminder_enabled` | Boolean | Logged when any sync button in the Cozie iPhone app | - | Indicates whether the a phone survey reminder is enabled. (enabled: `True`) | not available |
| `pss_reminder_time` | String | Logged when any sync button in the Cozie iPhone app | - | Time at which the phone survey reminder is shown. | not available |
|  |  |  |  |  |
| `q_...` | String | Logged when the submit button at the end of the watch survey is pressed. | - |For field names of watch survey responses see on the page for each watch survey example |  |
|  |  |  |  |  |
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
|  |  |  |  |  |
| `timestamp_lambda` | String | Logged with any other data point | - | Timestamp (UTC) of when the AWS Lambda function was invoked to insert the row into the database | `timestamp_lambda` |
| `transmit_trigger` | String | Logged with any other data point | - | Action that triggered the logging of the data corresponding to the same row | not available |
| `time`/`index` | String | Logged with any other data point | - | Timestamp (UTC) of when micro survey was submitted, also serves as index | `timestamp_end` |
|  |  |  |  |  |
| `ts_HRV` | Integer | * | 15min | Heart Rate Variability in ms, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2881127-heartratevariabilitysdnn) | not available |
| `ts_altitude` | Integer | *** | - | Altitude in m | not available |
| `ts_audio_exposure_`<br/>`environment` | Integer | * | 30min | Noise level in dB(A), provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081271-environmentalaudioexposure) | `ts_hearingEnvironmental`<br/>`Exposure`, `sound_pressure` | 
| `ts_audio_exposure_`<br/>`headphones` | Float? | * | 30s? | Audio exposure in dB(A) from headphones, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081272-headphoneaudioexposure) | not available |
| `ts_heart_rate` | Integer? | * | 3-6min (sometimes less) |Heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615138-heartrate)| `ts_heartRate`, `heart_rate` |
| `ts_altitude` | Float | *** | - | Latitude in ° | not available |
| `ts_location_`<br/>`accuracy_horizontal` | Float? | *** | - | Horizontal positioning accuracy in m (see `ts_latitude`, `ts_longitude`) | not available |
| `ts_location_`<br/>`accuracy_vertical` | Float? | *** | - | Vertical positioning accuracy in m (see `ts_altitude`) | not available |
| `ts_location_`<br/>`acquisition_method` | String? | *** | - |  | not available |
| `ts_location_floor` | Float? | *** | - |  | not available |
| `ts_location_`<br/>`source_device` | String? | *** | - |  | not available |
| `ts_longitude` | Float | *** | - | Longitude in ° | not available |
| `ts_oxygen_saturation` | Integer | ** | 1h | Blood oxygen saturation in % provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615377-oxygensaturation) | `ts_oxygenSaturation` |
| `ts_resting_heart_rate` | Integer | * | 1d | Resting heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2867756-restingheartrate) | `ts_restingHeartRate` |
| `ts_sleep_REM` | Float? | * | - | Duration of REM sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_awake` | Float? | * | - | Duration of the participant being awake in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_core` | Float? | * | - | Duration of light or intermediate sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_deep` | Float? | * | - | Duration of deep sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_sleep_in_bed` | Float? | * | - | Duration of the participant being in bed in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ts_stand_time` | Integer | * | - | Stand time in min?, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3174858-applestandtime) | `ts_standTime` |
| `ts_step_count` | Integer | * | ? | Number of steps walked, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615548-stepcount) | `ts_stepCount` |
| `ts_timestamp_location`| String | * | ? | Timestamp (UTC) of when the GPS was retrieved | `timestamp_location` | 
| `ts_walking_distance` | Float | * | ? | Distance walked in m, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615230-distancewalkingrunning) | `ts_walkingDistance` |
| `ts_wrist_temperature` | Integer | * | 1d | Wrist temperature during sleep, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3951065-applesleepingwristtemperature) | not available |
|  |  |  |  |  |
| `ws_HRV` | Float? | ** | 15min | Heart Rate Variability in ms, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2881127-heartratevariabilitysdnn) | not available |
| `ws_altitude` | Integer | ** | - | Altitude in m  | not available |
| `ws_audio_exposure_`<br/>`environment` | Float? | ** | 15min | Noise level in dB(A), provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081271-environmentalaudioexposure) | not available |
| `ws_audio_exposure_`<br/>`headphones` | Float? | ** | 30s? | Audio exposure in dB(A) from headphones, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3081272-headphoneaudioexposure) | not available |
| `ws_heart_rate`| Float? | ** | 3-6min (sometimes less) |Heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615138-heartrate), submitted when iPhone Cozie app is opened. | not available |
| `ws_latitude` | Float | ** | - | Latitude in ° provided by GPS | `latitude` |
| `ws_location_`<br/>`accuracy_horizontal` | Float? | ** | - | Horizontal positioning accuracy in m (see `ws_latitude`, `ws_longitude`) | not available |
| `ws_location_`<br/>`accuracy_vertical` | Float? | ** | - | Vertical positioning accuracy in m (see `ws_altitude`) | not available |
| `ws_location_`<br/>`acquisition_method` | String? | ** | - |  | not available |
| `ws_location_floor` | Integer? | ** | - |  | not available |
| `ws_location_`<br/>`source_device` | String | ** | - |  | not available |
| `ws_longitude` | Float | ** | - | Longitude in ° provided by GPS | `longitude` |
| `ws_oxygen_saturation` | Integer | ** | 1h | Blood oxygen saturation in % provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615377-oxygensaturation) | not available |
| `ws_resting_heart_rate` | Float? | ** | 1d | Resting heart rate in bpm, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/2867756-restingheartrate) | not available |
| `ws_sleep_REM` | Float? | ** | - | Duration of REM sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_awake` | Float? | ** | - | Duration of the participant being awake in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_core` | Float? | ** | - | Duration of light or intermediate sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_deep` | Float? | ** | - | Duration of deep sleep in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_sleep_in_bed` | Float? | ** | - | Duration of the participant being in bed in min, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis) | not available |
| `ws_stand_time` | Float? | ** | ? | Stand time in min?, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3174858-applestandtime) | not available |
| `ws_step_count` | Integer? | ** | ? | Number of steps walked, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615548-stepcount) | not available |
| `ws_survey_count` | Integer | ** | - | Increasing key for each micro-survey response. Resets when Cozie app is (re-)installed. | `vote_count` |
| `ws_timestamp_location` | String | ** | - | Timestamp of the location measurement in UTC, Format: "%Y-%m-%dT%H:%M:%S.%fZ" | `timestamp_location` |
| `ws_timestamp_start` | String | ** | - | Timestamp (UTC) of when micro survey was started |`timestamp_start` |
| `ws_walking_distance` | Float | ** | - | Distance walked in m, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/1615230-distancewalkingrunning) | not available |
| `ws_wrist_temperature` | Float | ** | 1d |  Wrist temperature during sleep, provided by [Apple HealthKit](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/3951065-applesleepingwristtemperature) | not available |
|  |  |  |  |  |
| `wss_goal` | Integer? | Logged when any sync button in the Cozie iPhone app | - |Watch survey response goal in the 'Settings' tab | not available |
| `wss_participation_days`| String | Logged when any sync button in the Cozie iPhone app | - | Participation days set in the Cozie app by the participant | `settings_participation_days` |
| `wss_participation_`<br/>`time_end` | String | Logged when any sync button in the Cozie iPhone app | - | Daily reminder end time set in the Cozie app by the participant | `settings_participation_`<br/>`time_end` |
| `wss_participation_`<br/>`time_start` | String | Logged when any sync button in the Cozie iPhone app | - | Daily reminder start time set in the Cozie app by the participant | `settings_participation_`<br/>`time_start` |
| `wss_reminder_enabled` | Boolean? | Logged when any sync button in the Cozie iPhone app | - | Enable setting for the watch survey reminder in the 'Settings' tab | not available |
| `wss_reminder_interval` | String | Logged when any sync button in the Cozie iPhone app | - | Reminder frequency set in the Cozie app by the participant | `settings_notification_frequency` |
| `wss_time_out` | Integer | Not yet implemented | - | Minimal allowed duration between two watch survey responses | not available |
| `wss_title` | String | Logged when any sync button in the Cozie iPhone app | - | Title of watch survey selected in the 'Settings' tab | not available |

## Difference between `ts_` and `ws_`
\* The logging of time series data with the `ts_` prefix is triggered by several actions:
* Opening of the Cozie iPhone app
* Pressing of any sync button in the Cozie iPhone app
* Background task

\** The logging of time series data with the `ws_` prefix is triggered by the submit button at the end of the watch survey.

By the end of the experiment the `ts_` data and `ws_` data should me nearly identical, e.g., the values and timestamps for  `ts_heart_rate` and `ws_heart_rate` should be the same. The difference is that the device that submits the data and the time the data is submitted. Because it is very difficult to sync the Cozie app on the Apple Watch with its counter part on the Apple Watch in the background, we decided to log the data twice and then merge the two columns while processing the data. This approach maximized the data upload frequency, maintainability, and ability to debug the app.

## Location data
\*\** Location data, e.g., `ts_latitude`, `ts_longitude`, with the `ts_` prefix is only sent every time the participant changes their location more than 50 meters, i.e., when and while the participant changes the location. Location data with the `ws_` prefix is sent when the submit button at the end of the watch survey is pressed, exactly the same as all other data with the `ws_` prefix (see **).


## Lambda Timestamp and Trigger
For some of the field names there are two more accompanying fields for the timestamp of when the data was inserted into the database and what trigger the logging action. The field `lambda_timestamp` serves the same purpose. However this field value might over written in instances where values with identical `id_participant`, `id_experiment`, and `timestamp` are logged.The table below shows an example for `ts_HRV`. The columns `ts_HRV_lambda` and `ts_HRV_trigger` are used for debugging and development purposes.

| Field name | Type | Sampling rate | Description/Question | Field name in Cozie v2|
|--------------|------|---------------|----------------------|-------------------------|
| `ts_HRV` | Integer | * | 15min | not available |
| `ts_HRV_lambda` | String | * | Timestamp of when the value of `ts_HRV` was logged in UTC, Format: "%Y-%m-%dT%H:%M:%S.%fZ" | not available |
| `ts_HRV_trigger` | String | * | String of what triggered the logging action of `ts_HRV` | not available |

These meta data columns shown in the example above are available for the following field names:

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

## Difference between logging interval and sampling interval
The logging interval describes at what points in time the data is sent to the database. The sampling interval describes the time between two samples of the same data. For some data these two are the same, e.g., for `ws_survey_count`, one data point sent to the database when the submit button in the watch survey is pressed.
For `ws_heart_rate`, the Apple Watch records one data point every 3-6 minutes. This is the sampling interval. However, the data points are not sent to the database at the same times. The `ws_heart_rate` data points are only sent to the database, when the submit button in the watch survey is pressed. When the submit button is pressed, all `ws_heart_rate` data points since the last time the submit button was pressed are sent to the database.  Hence, the log interval can be much longer than the sampling interval.

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