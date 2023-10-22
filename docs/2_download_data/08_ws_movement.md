---
id: ws_movement
title: Watch Survey - Movement
sidebar_label: Watch Survey - Movement
sidebar_position: 8
---


import useBaseUrl from '@docusaurus/useBaseUrl';

# Watch Survey Flow
[![Image](/img/watch_survey_movement.png)](/img/watch_survey_movement.png)

Click on the image to enlarge it.


# Feature Descriptions

| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `last_60min` | In the past 60min, I used | String | "Lift", "Stairs", "Both", "Neither" |
| `lift_why` | Took lift, why? | String | "Convenient", "Less effort", "No stairs" |
| `stairs_why` | Took stairs, why? | String | "Convenient", "No lift", "Save energy", "Healthy" |
| `lift_con` | Lift convenient because? | String |  "Easiest", "Fastest", "Both" |
| `stairs_con` | Stairs convenient because | String | "Easiest", "Fastest", Both" |
| `working` | Are you working right now? | String | "Yes", "No" |
| `workstation` | What kind of workstation? | String |  "Adjustable", "Standing", "Sitting" |
| `adj_height` | Adjusted height today? | String |   "Up & down", "Down", "Up", "Never" |
| `current` | Are you | String | "Standing", "Sitting" |

[The JSON file for this watch survey is available on Github.](https://github.com/cozie-app/cozie-apple/blob/master/Watch%20Surveys/watch_survey_movement.json)