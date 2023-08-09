---
id: dd_ws_interaction
title: Watch Survey - Interaction
sidebar_label: Watch Survey - Interaction
---


import useBaseUrl from '@docusaurus/useBaseUrl';

# Watch Survey Flow
[![Image](/img/watch_survey_interaction.png)](/img/watch_survey_interaction.png)

Click on the image to enlarge it.

The image above shows the flow of the survey questions. The questions and responses will look slightly different on the Apple Watch depending on the Apple Watch model size the text might be rendered differently. Not all questions are necessarily visible and scrolling might be required.

This watch survey was used for the work published in [Utilizing wearable technology to characterize and facilitate occupant collaborations in flexible workspaces by Kristi Maisha et al.](https://arxiv.org/abs/2307.00789).

# Feature Descriptions

| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `ws_interaction` | Have you had a spontaneous interaction since your last survey? | String | "Yes", "No"|
| `ws_whom` | With whom? | String | "Supervisor", "Coworker", "Household Member", "Friend", "Other" |
| `ws_location_1` | Where are you currently located? | String |  "Work - in person", "Work - remote", "Home", "Transportation", "Other" |
| `ws_location_2` | Where were you located at the time of the interaction? | String |  "Desk", "Meeting Room", "Hallway", "Canteen", "Work - remote", "Other" |
| `ws_location_3` | Where are you currently located? | String | "Desk", "Meeting Room", "Hallway", "Canteen", "Other" |
| `ws_category` | Please categorize this interaction: | String |  "Collaboration", "Distraction", "Wanted Socialization" |
| `ws_description` | Please select a description for the interaction: | String | "New ideas", "Problem-solving", "Task-related", "Advice", "Other" |
| `ws_value` | Was the interaction valuable? | String | "Yes", "No"|
| `ws_initiation` | Did you initiate the interaction? | String | "Yes", "No"|
| `ws_focus` | Did this interaction impact your focus? | String | "Yes", "Partially", "No" |

