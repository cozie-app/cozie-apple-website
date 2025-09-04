---
id: ws_privacy
title: Watch Survey - Privacy
sidebar_label: Watch Survey - Privacy
sidebar_position: 9
---


import useBaseUrl from '@docusaurus/useBaseUrl';

# Watch Survey Flow
[![Image](/img/watch_survey_privacy.png)](/img/watch_survey_privacy.png)

Click on the image to enlarge it.

The image above shows the flow of the survey questions. The questions and responses will look slightly different on the Apple Watch depending on the Apple Watch model size the text might be rendered differently. Not all questions are necessarily visible and scrolling might be required.

# Feature Descriptions

| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `alone_group` | Alone or in a group? | String |  "Alone", "Online", "Group" |
| `activity` | Category of activity? | String |  "Socialize", "Collaborate", "Learn" |
| `distracting` | Possibly distracting others? | String |   "Yes", "No" |
| `distractions` | Distractions nearby? | String | "None", "A little", "A lot" |
| `activity` | Category of activity? | String | "Focus", "Leisure" |
| `more_privacy` | Feeling like you need more privacy? | String |  "Yes", "No" |
| `kind_distraction` | What kind of distraction | String | "Visual", "Audio", "Others" |
| `why_more_privacy` | Why is more privacy needed? | String |  "See me", "Hear me", "Both" |
| `what_privacy` | What is it? | String | "Thermal", "Scent", "Glare" |
| `people_see` | What do people see? | String | "Appearance", "Work", "Behavior" |
| `activity` | "Category of activity? | String | "Socialize", "Collaborate", "Learn" |

[The JSON file for this watch survey is available on Github.](https://github.com/cozie-app/cozie-apple/blob/master/Watch%20Surveys/watch_survey_privacy.json)