---
id: ws_thermal_short
title: Watch Survey - Thermal (short)
sidebar_label: Watch Survey - Thermal (short)
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Watch Survey Flow
[![Image](/img/watch_survey_thermal_short.png)](/img/watch_survey_thermal_short.png)

Click on the image to enlarge it.

The image above shows the flow of the survey questions. The questions and responses will look slightly different on the Apple Watch depending on the Apple Watch model size the text might be rendered differently. Not all questions are necessarily visible and scrolling might be required.


# Feature Descriptions
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `tc_preference` | How would you prefer to be? | String |  "Cooler", "No Change", "Warmer" |
| `are_you` | Are you? | String | "Outdoor", "Indoor" |
| `clo` | What clothes are you wearing? | String | "Very light", "Light", "Medium", "Heavy" |

[The JSON file for this watch survey is available on Github.](https://github.com/cozie-app/cozie-apple/blob/master/Watch%20Surveys/watch_survey_thermal_short.json)