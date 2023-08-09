---
id: preparation_deployment
title: Preparation for a Cozie deployment
sidebar_label: Cozie Deployment
---

import useBaseUrl from '@docusaurus/useBaseUrl';


We have some tips for you in case that you want to use Cozie for own research. 

- We recommend that you fork the [Cozie Apple repository](https://github.com/cozie-app/cozie-apple) and make changes to the fork. Then you can test your changes using the Simulator in XCode and [TestFlight](https://developer.apple.com/testflight/). In the past, we have even used TestFlight to onboard participants of research experiments.
- Changes to Cozie might include:
    - Create your own watch survey
    - Create your own weekly survey
    - Re-route the data to your own backend
    - Connect Cozie to your OneSignal account for push notifications
    - Add new features to Cozie
- After you have tested the modified Cozie app for yourself, we recommend that you test your Cozie version with testers that are not familiar with Cozie. We recommend to employ at least five testers. During the the test, you want to mirror experiment conditions as realistic as possible:
    - Onboarding (consent form, information sheet, onboarding survey, etc.)
    - Duration and goal of the deployment is the same for testers and future participants.
    - Offboarding (unpair Apple Watch from participants iPhone, if Apple Watch was loaned. Offboarding questionnaire, etc.)
- During test deployment you want to analyze the collected data as thoroughly as if it was for the actual experiment: 
    - Does the range of values for the data make sense?
    - Is the sampling interval for all modalities as expected?
    - Is the number of responses as expected?
    - Are there missing samples or responses?
    - Is there location data for all responses?
    - The list is not exhaustive. Make sure you know what data quality aspects matter for your research and critically analyze the data from the test run.
- We recommend that you setup your own backend. However, if you want to use our backend for your experiment, please [contact us](mailto:cozie.app@gmail.com) to make sure the backend remains operational during the experiment.