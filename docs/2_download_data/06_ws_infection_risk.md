---
id: ws_infection_risk
title: Watch Survey - Infection Risk
sidebar_label: Watch Survey - Infection Risk
sidebar_position: 6
---


import useBaseUrl from '@docusaurus/useBaseUrl';

# Watch Survey Flow
[![Image](/img/watch_survey_infection_risk.png)](/img/watch_survey_infection_risk.png)

Click on the image to enlarge it.

The image above shows the flow of the survey questions. The questions and responses will look slightly different on the Apple Watch depending on the Apple Watch model size the text might be rendered differently. Not all questions are necessarily visible and scrolling might be required.

# Feature Descriptions
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `surroundings_infection` | Do your surroundings increase infection risk? | String | "Not at all", "A Little", "A lot"|
| `cause_risk` | What causes more risk? | String | "Ventilation", "People", "Surface" |
| `concerns` | Specifically, what concerns you? | String |  "Density", "Proximity", "Both" |
| `within_5m` | Currently, how many people within 5m? | String | "0 pax", "1-4 pax", "5+ pax" |

[The JSON file for this watch survey is available on Github.](https://github.com/cozie-app/cozie-apple/blob/master/Watch%20Surveys/watch_survey_infection_risk.json)