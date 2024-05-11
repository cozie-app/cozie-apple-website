---
id: setup
title: Setup
sidebar_label: Setup
sidebar_position: 3
slug: /setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Make sure that you have completed the [installation guide](installation) before you continue setting up Cozie. In Cozie, you can change settings in the iPhone app and then you need the sync the settings with the Cozie app on the Apple Watch. 

You can either choose keep the default settings and sync them with the Apple Watch. Jump to [step 4 (Synchronization)](#synchronization) for that. Alternatively, you may modify the settings first as shown below:


1. #### Experiment ID and Participant ID
   The experiment ID and participant ID are used to identify participants. You are free to choose any ID. We usually pick an arbitrary name for the experiment ID. For the participant ID, we take the experiment ID and add a sequential identifier to the experiment ID. For privacy reasons, we strongly advise against using any identifiable information for these IDs, e.g., names, email addresses, phone numbers, birthdates, addresses, etc.<br/>
   - Example:<br/>
   - `Participant ID`: alpha001
   - `Experiment ID`: alpha <br/> 

   To set the IDs, open Cozie on the iPhone and go to the Settings tab of Cozie (second icon on the bottom). <br/>
   Input the participant ID and experiment ID accordingly. <br/>

   <img alt="Screenshot of settings tab" src={useBaseUrl('img/cozie_settings_tab_ids.png')}width="30%" /> &nbsp;
   <img alt="Screenshot of pop-up menu for experiment ID" src={useBaseUrl('img/cozie_settings_tab_experiment_id.png')}width="30%" /> &nbsp;
   <img alt="Screenshot of pop-up menu for participant ID" src={useBaseUrl('img/cozie_settings_tab_participant_id.png')}width="30%" />
   <br/> 

2. #### Watch Survey and Reminders
   In the *Watch Survey* section of the Settings tab, you can select a watch survey, set the response goal, and setup reminders for the watch survey. Watch survey reminders look like push notifications and ask the participant to take a watch survey. 
   <table>    
      <tr valign="top">
         <td width="30%">
         <img alt="Screenshot of watch survey and reminders settings" src={useBaseUrl('img/cozie_settings_tab_watch_survey.png')} width="300px" />
         </td>
         <td>
            <ul>
               <li><strong>Watch Survey: </strong>
               Select one of the built-in watch surveys. I can add your own watch survey. A guide for custom watch surveys is available [here](custom_surveys/custom_watch_survey).</li>
               <li><strong>Watch Survey Response Goal: </strong>
               This the the number of watch survey responses that are expected for completion. The value set here will be shown in the Data tab under Valid Survey Count after the slash.</li>
               <li><strong>Enable Reminders: </strong>
               Reminders for watch surveys can be turned on or off.</li>
               <li><strong>Particpation Days: </strong>
               These are the days on which the watch survey reminders will be active. </li>
               <li><strong>Participation Time Start: </strong>
               This is the first time of the day at which a watch survey reminder will be shown.</li>
               <li><strong>Participation Time End: </strong>
               This is the last time of the day at which a watch survey reminder will be shown.</li>
               <li><strong>Reminder Interval: </strong>
               This is the time between two watch survey reminders.</li>
            </ul>
         </td>
      </tr>
   </table>

3. #### Phone Survey and Reminders
   In the *Phone Survey* section of the Settings tab, you can set up reminders for the phone survey. Just like watch survey reminders, phone survey reminders look like push notifications and ask the participant to take a phone survey. 
   <table>
      <tr valign="top">
         <td width="30%">
         <img alt="Screenshot of phone survey reminder settings" src={useBaseUrl('img/cozie_settings_tab_phone_survey.png')} width="300px" />
         </td>
         <td>
            <ul>
               <li><strong>Enable Reminders: </strong>
               Reminders for phone surveys can be turned on or off.</li>
               <li><strong>Reminder Time: </strong>
               This is the time of the day at which the phone reminder will be shown. Phone survey reminders are shown only once per day.</li>
               <li><strong>Reminder Days: </strong>
               These are the days on which the phone survey reminders will be shown. </li>
            </ul>
         </td>
      </tr>
   </table>

4. #### Synchronization:
   While keeping the Cozie application open on your iPhone, open the Cozie app on your Apple Watch. In the *Settings* tab, press the sync icon (&#x1f5d8;). If the sync is successful, the first question of the watch survey will be shown on the Apple watch and the watch icons in the settings app change their color from grey to orange. You might see a different first question depending on what watch survey you have selected above.

   <img alt="Screenshot of first screen on watch app" src={useBaseUrl('img/cozie_watch_app_first_screen.png')}width="24%" /> &nbsp;
   <img alt="Screenshot of sync icon in settings tab" src={useBaseUrl('img/cozie_settings_tab_sync.png')}width="37%" /> &nbsp;
   <img alt="Screenshot of first watch survey question" src={useBaseUrl('img/cozie_watch_app_thermal_first_question.png')}width="24%" /> &nbsp;

   You can proceed to complete the watch survey on the Apple Watch. Submit the watch survey by pressing 'Submit survey' after the last question.

   <img alt="Watch survey, first question" src={useBaseUrl('img/cozie_watch_app_thermal_first_question.png')}width="24%" />&nbsp;
   <img alt="Watch survey, submit screen" src={useBaseUrl('img/cozie_watch_app_submit_screen.png')}width="24%" />&nbsp;
   <img alt="Watch survey, after submission screen" src={useBaseUrl('img/cozie_watch_app_after_submission_screen.png')}width="24%" />

   If the Watch icons in the *Settings* tab remain grey, close and open again the Cozie app on the Apple Watch and try step 4 again. 
   
   The Cozie app is now ready to collect data. To download the data follow our guide [here](download_data/download).