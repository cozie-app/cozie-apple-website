---
id: watch_survey
title: How to Create a Custom Watch Survey
sidebar_label: Watch Survey
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In Cozie v3, it is possible to create a custom watch survey. The entire watch survey is defined in a JSON file. An example is shown below.

## Example of JSON file for custom watch survey

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
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_location"
        },
        {
          "text": "No Change",
          "icon": "smile",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_location"
        },
        {
          "text": "Warmer",
          "icon": "flame.fill",
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
          "icon": "outdoor",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": "q_clothing"
        },
        {
          "text": "Indoor",
          "icon": "indoor",
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
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        },
        {
          "text": "Light",
          "icon": "clothes_shirt_short",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        },
        {
          "text": "Medium",
          "icon": " clothes_shirt_pants",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        },
        {
          "text": "Heavy",
          "icon": " clothes_pullover",
          "use_sf_symbols": false,
          "sf_symbols_color": "#000000",
          "next_question_id": ""
        }
      ]
    }
  ]
}
```
 
| Key | Description | Example value |
|-----|-------------|----------------|
| `survey_name`      | Name of watch survey that is shown in the 'Settings' tab of the Cozie iPhone app | `Thermal (short)` |
| `survey_id`        | Survey ID | `thermal_short` |
| `survey`           | Array with questions | - |
| `question`         | Question that is shown in the watch survey on the Apple Watch | `How would you prefer to be?` |
| `question_id`      | The question ID is used as column name in the database. It has to have the prefix `q_` | `q_preference_thermal` |
| `response_options` | Array of response options objects | - |
| `text`             | Response text that is show in the watch survey on the Apple Watch and text that is stored in the database. | `Cooler`  |
| `icon`             | [Filename or SF symbol name](/c3_watch_survey_icons.md) of icon that is shown on the left hand side of the response option text | `snow_flake` |
| `use_sf_symbols`   | Boolean that indicates whether the value specified in `icon` is a filename or an SF symbol name  | `false` |
| `sf_symbols_color` | Background color that is shown for SF symbols | `#000000` |
| `next_question_id` | Question ID of the next question shown if this response option is selected. If it watch survey should end after selecting the response option, then the `next question_id` is an empty string. | `q_location` |

## How to load the watch survey into the Cozie app:
1. Open to the Cozie app and go to the 'Backend' tab. Then, a
2. Add the URL to the watch survey file in the input field labelled 'Watch Survey Link' (<a href={useBaseUrl('watch_surveys/watch_survey_example.json')} target="_blank">Link to example survey</a>)
3. Press the sync button in the 'Backend'
4. Go to the 'Settings' tab and configure the 'Participant ID', 'Experiment ID', and 'Watch Survey'. The watch survey defined in the JSON file provided with the link above should be listed.
5. Keep the Cozie iPhone app open and open the Cozie app on the Apple Watch
6. Keep both apps open and press the sync button in the 'Settings' tab. The Apple Watch icons in the 'Settings' should change their color from grey to orange.
7. If the Apple Watch icons remain grey, close and open again the Cozie app on the Apple Watch and try step 6 again.