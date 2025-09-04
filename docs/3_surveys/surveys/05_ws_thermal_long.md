---
id: ws_thermal_long
title: Watch Survey - Thermal (long)
sidebar_label: Watch Survey - Thermal (long)
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Watch Survey Flow

[![Image](/img/watch_survey_thermal_long.png)](/img/watch_survey_thermal_long.png)

Click on the image to enlarge it.

The image above shows the flow of the survey questions. The questions and responses will look slightly different on the
Apple Watch depending on the Apple Watch model size the text might be rendered differently. Not all questions are
necessarily visible and scrolling might be required.

# Feature Descriptions

| Feature name       | Question                                                              | Type   | Response options                         |
|--------------------|-----------------------------------------------------------------------|--------|------------------------------------------|
| `tc_preference`    | How would you prefer to be?                                           | String | "Cooler", "No Change", "Warmer"          |
| `light_preference` | Light preference                                                      | String | "Dimmer", "No Change", "Brighter"        |
| `sound_preference` | Sound preference                                                      | String | "Quieter", "No Change", "Louder"         |
| `are_you`          | Are you?                                                              | String | "Outdoor", "Indoor"                      | 
| `location_place`   | Where are you?                                                        | String | "Home", "Office", "Vehicle", "Other"     |
| `mood`             | What mood are you in?                                                 | String | "Bad", "Good", "Neither"                 |
| `clo`              | What clothes are you wearing?                                         | String | "Very light", "Light", "Medium", "Heavy" |
| `changed_location` | Have you changed location, activity or clothing over the last 10-min? | String | "Yes", "No"                              |

[The JSON file for this watch survey is available on Github.](https://github.com/cozie-app/cozie-apple/blob/master/Watch%20Surveys/watch_survey_thermal_long.json)