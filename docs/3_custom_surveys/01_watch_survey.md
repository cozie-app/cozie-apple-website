---
id: custom_watch_survey
title: How to Create a Custom Watch Survey
sidebar_label: Watch Survey
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In Cozie, it is possible to create a custom watch survey. The watch 
survey is defined in a JSON file. An example is shown below.

Example of JSON file for custom watch survey
```js title="example_survey.json"
{
  "survey_name": "Example Survey",
  "survey_id": "example_survey",
  "survey": [{
      "question": "How would you prefer to be?",
      "question_id": "q_thermal",
      "response_options": [{
          "text": "Cooler",
          "icon": "snowflake",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_location"
        },
        {
          "text": "No Change",
          "icon": "emoticon_happy",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_location"
        },
        {
          "text": "Warmer",
          "icon": "flame.fill",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": true,
          "sf_symbols_color": "#FF0000",
          "next_question_id": "q_location"
        }
      ]
    },
    {
      "question": "Where are you?",
      "question_id": "q_location",
      "response_options": [{
          "text": "Outdoor",
          "icon": "person_walking",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_clothing"
        },
        {
          "text": "Indoor",
          "icon": "indoor",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_clothing"
        }
      ]
    },
    {
      "question": "What clothes are you wearing?",
      "question_id": "q_clothing",
      "response_options": [{
          "text": "Very light",
          "icon": "clothes_shirt_sleeveless",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        },
        {
          "text": "Light",
          "icon": "clothes_shirt_short",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        },
        {
          "text": "Medium",
          "icon": "clothes_shirt_pants",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        },
        {
          "text": "Heavy",
          "icon": "clothes_pullover",
          "icon_background_color": "#F1A62E",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        }
      ]
    }
  ]
}
```
 
| Key | Description       | Example value |
|-----|-------------------|----------------|
| `survey_name`           | Name of watch survey that is shown in the 'Settings' tab of the Cozie iPhone app                 | `Thermal (short)` |
| `survey_id`             | Survey ID                                                                                        | `thermal_short` |
| `survey`                | Array with questions                                                                             | - |
| `question`              | Question that is shown in the watch survey on the Apple Watch                                    | `How would you prefer to be?` |
| `question_id`           | The question ID is used as column name in the database. It has to have the prefix `q_`           | `q_preference_thermal` |
| `response_options`      | Array of response options objects                                                                | - |
| `text`                  | Response text that is show in the watch survey on the Apple Watch and text that is stored in the database. | `Cooler`  |
| `icon`                  | [Filename or SF symbol name](watch_survey_icons) of icon that is shown on the left hand side of the response option text | `snow_flake` |
| `icon_background_color` | Background color that is shown for image based icons and SF Symbol based icons                   | `#F1A62E` |
| `use_sf_symbols`        | Boolean that indicates whether the value specified in `icon` is a filename or an SF symbol name  | `false` |
| `sf_symbols_color`      | Foreground color that is shown for SF symbols                                                    | `#000000` |
| `next_question_id`      | Question ID of the next question shown if this response option is selected. If it watch survey should end after selecting the response option, then the `next question_id` is an empty string. | `q_location` |

## How to load the watch survey into the Cozie app:
1. Open to the Cozie app and go to the *Backend* tab.
2. Add the URL to the watch survey file in the input field labelled *Watch 
Survey Link* (<a href={useBaseUrl('watch_surveys/watch_survey_example.json')} 
target="_blank">Link to example survey</a>)
<img alt="Screenshot backend watch survey configuration" src={useBaseUrl('img/backend_watch_survey.png')}width="30%" />  &nbsp;

3. Press the sync button in the *Backend* tab. The watch survey should now be available to select in the *Settings* tab.

4. Go to the *Settings* tab and select your watch survey. The watch survey defined in the JSON file provided with the link above should be listed in the pop-up list. Select it.

5. Sync the settings with the Apple Watch while the Cozie app is open on the Apple Watch, just like described in the [Setup guide](/docs/setup).