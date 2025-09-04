---
id: custom_phone_survey
title: How to Create a Custom Phone Survey
sidebar_label: Phone Survey
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Phone surveys are more intrusive than watch surveys. However, they allow to ask 
longer questions and provide a wider range of response options.

We have used phone surveys for *End of Week Surveys* and *End of Day Surveys*.

In Cozie, it is possible to create a custom phone survey. A link to any web 
survey can be entered in the *Backend* tab. Once, the URL is provided, the
phone survey can be opened by pressing the *Phone Survey* button at the bottom
of the *Data* tab.

Most online survey providers allow you to pre-fill fields. We recommend to 
pre-fill the information for the participant ID and experiment ID. 


## How to create a pre-filled Google Forms survey
1. Create a new survey using Google Forms. We recommend asking for the
experiment ID and participant ID in the first two questions. Once, your survey 
is complete, navigate to the menu with the three dots.
  ![Image](/img/phone_survey/google_form_example.png)


2. In that menu, select *Get pre-filled link*
  ![Image](/img/phone_survey/google_form_three_dot.png)


3. Fill out the values for the experiment ID and participant id. In this example, 
`alpha` is the experiment ID and `alpha01` is the participant ID. Then press the 
button labelled *Get link*.
  ![Image](/img/phone_survey/google_form_pre_fill.png)


4. You should now have a link similar to this one `https://docs.google.com/forms
/d/e/1FAIpQLScEuqlYHOQyM0duWX96auVxqEwSYlRmx3ymAN_leyGcz6idlQ/viewform?usp=pp_url
&entry.1137805192=alpha&entry.1075788715=alpha01`.

### How to create a pre-filled link for all participants
From the example link above, the important part is at the end: 
`&entry.1137805192=alpha&entry.1075788715=alpha01`.
You can see that the URL parameter `entry.1137805192` is for the experiment ID 
and the URL parameter `entry.1075788715` is for the participant ID. 

So, you can manually create a phone survey link for all other participants. For 
example the phone survey link for participant ID `alpha02` would be `https://
docs.google.com/forms/d/e/1FAIpQLScEuqlYHOQyM0duWX96auVxqEwSYlRmx3ymAN_leyGcz6idlQ/
viewform?usp=pp_url&entry.1137805192=alpha&entry.1075788715=`**`alpha02`**

## How to create a pre-filled Qualtrics survey
There are two ways to create a pre-filled link using Qualtrics. Firstly, fields with the experiment ID and participant ID. Alternatively, the experiment ID and participant ID can be embedded without a field in survey. The former allows to share the survey outside of the app the the IDs can be adjusted in the survey. The latter doesn't allow to IDs in the surveys.

### Embed IDs with fields

1. Create a new survey using Qualtrics. We recommend asking for the
experiment ID and participant ID in the first two questions. Once, your survey 
is complete, click into the text field of the the experiment ID question, followed by a click on 'Default choices' in the left hand side menu.

  ![Image](/img/phone_survey/qualtrics_example.png)

  
2. In the pop-up menu, press on the drop down menu, select 'Embedded Data Field' and enter 'id_experiment'. Press 'Insert'. Then press 'Save'. 
You should now see that the text '$\{e://Field/id_experiment\}' was entered into the text field of the experiment ID question.
Repeat this step for the participant ID.
  ![Image](/img/phone_survey/qualtrics_embedded_data_field.png)

3. You can now publish the survey.

  ![Image](/img/phone_survey/qualtrics_publish.png)

4. You should now have a link similar to this one `https://nus.syd1.qualtrics.com/jfe/form/SV_3vG17UqIi70Why6`.
You can now add the participant ID and experiment ID as URL parameters to the URL by adding `?id_experiment=alpha&id_participant=alpha01` to the URL: https://nus.syd1.qualtrics.com/jfe/form/SV_3vG17UqIi70Why6?id_experiment=alpha&id_participant=alpha03. This example will prefill the experiment ID field with `alpha` and the participant ID with `alpha01`.

### Embed IDs without fields
1. Create a new survey using Qualtrics. Once, your survey is complete, click on the 'Survey flow' icon on the left-hand side

  ![Image](/img/phone_survey/qualtrics_survey_flow.png)

2. Click on 'Add a New Element Here'
  ![Image](/img/phone_survey/qualtrics_survey_flow_add_new_element.png)

3. Click on 'Embedded Data'
  ![Image](/img/phone_survey/qualtrics_survey_flow_embedded_data.png)

4. Click on 'Create New Field or Choose From Dropdown...'
  ![Image](/img/phone_survey/qualtrics_survey_flow_embedded_data_create_field.png)

5. Enter `id_experiment` into the field. <br/>
   Press 'Add a New Field' and repeat for `id_participant`. <br/>
   Then press 'Apply'.
  ![Image](/img/phone_survey/qualtrics_survey_flow_embedded_data_apply.png)
  
6. You can now go back to the 'Builder' and press 'Publish'
  ![Image](/img/phone_survey/qualtrics_survey_flow_embedded_data_publish.png)

7. You should now have a link similar to this one `https://nus.syd1.qualtrics.com/jfe/form/SV_3yYS4EmC3Y6HrQa`. 
You can now add the participant ID and experiment ID as URL parameters to the URL by adding `?id_experiment=alpha&id_participant=alpha01` to the URL: https://nus.syd1.qualtrics.com/jfe/form/SV_3yYS4EmC3Y6HrQa?id_experiment=alpha&id_participant=alpha03. This example will embed the experiment ID `alpha` and the participant ID `alpha01` in the survey response.


## How to load the phone survey into the Cozie app
1. Open the Cozie app and go to the *Backend* tab.
2. Add the URL to the phone survey in the input field labelled *Phone Survey Link*.
<img alt="Screenshot backend phone survey configuration" src={useBaseUrl('img/backend_phone_survey.png')}width="30%" />  &nbsp;

3. Go to the *Data* tab and press the *Phone survey* button to verify that the 
phone survey works as expected.
<img alt="Screenshot backend phone survey configuration" src={useBaseUrl('img/cozie_tab_data_phone_survey.png')}width="30%" />  &nbsp;
<img alt="Screenshot phone survey example" src={useBaseUrl('img/cozie_phone_survey_example.png')}width="30%" />  &nbsp;

## Remarks
We recommend to automate the above process by taking advantage of the [onboarding with a QR code](/docs/deployment/qr_code). This allows you to automatically adapt the participant ID and experiment ID in the URL of the phone survey.