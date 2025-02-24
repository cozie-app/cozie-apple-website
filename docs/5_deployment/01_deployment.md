---
id: deployment
title: Deployment Guide
sidebar_label: Deployment Guide
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section is about the practical part of deploying Cozie in the field. 

## Expectations and assumptions
Cozie Apple is [open-source](https://github.com/cozie-app/cozie-apple). Feel free to take the source code and adapt Cozie Apple to your needs in accordance with the [GNU GPLv3 license](https://github.com/cozie-app/cozie-apple/blob/master/LICENSE) under which Cozie Apple is published.

The app is provided as is. We currently allow free access to our backend infrastructure for data logging. However, we do not guarantee the availability, uptime, or service quality of the app or the database. Database downtimes for maintenance, technical issues, and changes to APIs are to be expected. For a better experience, we recommend two things:
1. Set up your own backend infrastructure that operates independently from ours. 
This does not require any changes to the app as all backend settings can be changed in the app.
2. [Contact us](mailto:cozie.app@gmail.com?subject=Cozie%20Apple) so that we can negotiate schedules and conditions.

We developed the app with the following conditions in mind:
* One iPhone and one Apple Watch per participant
* The iPhone has internet access.
* Location services are enabled.
* Permissions for HealthKit data, push notifications, and location services are granted.
* One participant uses Cozie for several days to up to 4 months.
* Onboarding and offboarding are supervised.
* Cozie is used to collect data for research.

The conditions above are in line with our testing and experience in the field. We recommend strongly that you test Cozie thoroughly if you choose to deviate from these conditions.

## Time management
| Task                                                | Time            |
|-----------------------------------------------------|-----------------|
| IRB approval                                        | >3 months       |
| Developing a custom watch survey                    | >1 months       | 
| Testing Cozie before development                    | >1 months       | 
| Monitoring during the deployment                    | >1 hour per day |
| Onboarding of one participant                       | ~40 minutes     |
| Offboarding of one participant                      | ~20 minutes     |


## Preparation
Good preparation is key to a successful deployment of Cozie. Depending on the experiment settings, the preparation might take more time than the actual deployment. 

### Creating a custom watch survey
Creating a new watch survey is an iterative process and requires testing in the field. It usually takes several weeks to arrive at a finalized version of a watch survey. 

We usually use [Miro](https://miro.com/) and start by adding all questions to the Miro board, adding response options, and deciding which response options lead to which follow-up question. 
At this point, you can also start sourcing the icons for the response options. Here are some sources for free icons:

* [Cozie icon library](../custom_surveys/watch_survey_icons)
* [SF Symbols](https://developer.apple.com/sf-symbols/)
* [Flaticon](https://www.flaticon.com/)
* [The Noun Project](https://thenounproject.com/)
* [Iconfinder](https://www.iconfinder.com/)
* [Freepik](https://www.freepik.com/icons)
* [SVG Repo](https://www.svgrepo.com/)
* [Online Web Fonts](https://www.onlinewebfonts.com/icon/svg_all)
* [Google Fonts](https://fonts.google.com/icons)
* [W3 Schools](https://www.w3schools.com/icons/icons_reference.asp)

With a complete visual draft of the watch survey, you can create the JSON file that can be loaded into the Cozie app. An example and guide for how to create a watch survey JSON file is available [here](../custom_surveys/custom_watch_survey).

Once, your custom watch survey is available, you can start using Cozie with the watch survey. While responding to watch surveys during your daily routine, you will likely notice that changes are needed. Common issues that we encounter in this phase are:
  * Missing or superfluous response options based on context
  * Questions and response options that are too long
  * Issue with the flow of follow-up questions
  * Questions that are surprisingly annoying, e.g., because they take a lot of effort to decide on the right response.
We recommend that while you are testing the watch survey, you do it under the same conditions as the future participants, i.e., with the same reminder settings.

Further, while you are already using Cozie to collect data you should also start testing your [data monitoring](#monitoring) setup. It is vital to monitor the quality of incoming data throughout the data collection, so that in case there is an issue you can take immediate measures instead of discovering issues after the fact. Analyzing the data already at this stage can help you to familiarize yourself with the data quality, e.g., sampling rate, logging rate, accuracy, etc. The sampling rate varies wildly, e.g., heart rate data is usually sampled at a 1-6-minute interval, while the wrist temperature data is only sampled at a 24-hour interval. Have a good look at the data that is important for your research to avoid any disappointment further down the line. More details about the data monitoring are discussed [below](#monitoring).

### Creating a phone survey
The phone survey needs to be created with a third-party service such as Google Forms, Qualtrics, or similar. A guide on how to add a phone survey to the Cozie app is available [here](../custom_surveys/custom_phone_survey). The phone survey turns out to be less dependent on the context. Further, it is less frequently used than the watch survey. Overall, less testing is required compared with the watch survey. 

### Test deployment
As a final testing step before the actual deployment, we strongly recommend that you do a dry run of your deployment, i.e., deploy Cozie exactly as you would later, with at least five people who were not involved in any of the preparations. This will help to identify issues that need an outside perspective. e.g., phrasing, terms, or icons in the watch survey might not be known by people outside of your team or domain. People not intimately familiar with your project will not pay attention to details that are important for your research and might generally behave unexpectedly.

Having a small cohort with participants that are somewhat outside of your inner circle is very valuable to finding unexpected issues and generating a small dataset that allows you to refine your data monitoring setup and also allows you to prepare the data analysis. In case of any issues with the Cozie app, make sure to check out our [troubleshooting guide](../troubleshooting).

### IRB
If you are doing research at a University, you will likely need to get approval from an institutional review board (IRB) that reviews the ethics and safety aspects of your Cozie deployment. Please check with the regulations of your country and institution about the details. 
At our institution, it takes about three months from the submission until final approval. Make sure to account for this process in your planning.

### Advertising and screening survey
It is almost showtime. It is now time to recruit participants for your Cozie deployment. We usually include a link to a screening survey in the advertising for the upcoming experiment. In the screening survey, ask for contact information as well as participant characteristics that are set by the experiment design and IRB requirement. Further, we also ask if and what model of iPhone and Apple Watch the potential participants have. This allows us to prioritize people who can use Cozie on their own devices. Another valuable question to include is whether participants intend to travel. Depending on your research focus, a positive response might render a participant ineligible for your experiment.

### Participant scheduling
Scheduling and coordination with participants can be surprisingly time-intensive. Reasons are no-shows, no responses, postponed appointments, and similar issues. There is not much that can be done about that aside from being mentally prepared for some delays.

To accommodate any unforeseen eventualities, we recommend a soft start of the deployment and slowly increasing the number of simultaneously enrolled participants over time. 

### Device readiness
All devices needed during the onboarding should be ready to be used at least one day before onboarding. All software should be up to date and already setup as needed. Ideally, the devices are still connected to the charger before the onboarding session starts
- iPhone
  - Charged
  - iOS up to date
  - Cozie installed
  - Cozie setup (experiment ID, participant ID, watch survey, permissions granted, etc.)
- Apple Watch
  - Paired with iPhone
  - WatchOS up to date
  - Cozie installed
  - Cozie setup (watch survey showing, permissions granted)

## Onboarding
Onboarding is the process of enrolling a participant into your experiment. This can include the following:
* Explaining the purpose of your experiment
* Explaining the course of your experiment
* Taking consent
* Providing an iPhone and/or an Apple Watch
* Setting up the Cozie app

We usually provide a *participant information sheet* where we provide a concise summary of the experiment.

Once the participant has a clear understanding of all aspects of the experiment, they can sign the consent form.

The participant is now part of the experiment. We usually start the experiment with an *onboarding survey*. This survey includes questions that only need to be asked once during the experiment, e.g., age, height, weight, personality, etc.

After the onboarding survey, Cozie can be installed. If the participant doesn't have an iPhone and/or an Apple Watch, we provide the devices to them. We have the participant sign an equipment receipt where we note the devices and their serial numbers.
For a quick installation process, we prepare a QR code that leads to Cozie on the app store.
Once, Cozie is installed, the settings can be changed for the participant. This can also be accelerated with a [QR code](qr_code). 

With everything set up, we ask the participant to take one watch survey. This serves two purposes: Firstly, you can check if the data arrives in the database as expected. Secondly, the participant gets to use the watch survey and can ask for clarification if needed.

The onboarding is almost complete. This is a good time to provide another opportunity for the participant to ask questions about the research and Cozie.

We assembled a short onboarding checklist for your convenience.

**Onboarding checklist**
* Participant information sheet
* Sign consent form
* Onboarding interview or survey
* QR code for Cozie on the App Store
* Personalized QR code to setup Cozie
* Test watch survey response
* Sign equipment receipt
* Q&A

## Offboarding
Offboarding is the process at the end of the enrollment of a participant into an experiment. This can include returning of devices, uninstalling Cozie, offboarding interview, and disbursement of incentives.

We ask participants to uninstall Cozie to ensure that they are no longer sharing their data with us. If an iPhone and/or Apple Watch was provided, make sure to properly remove accounts and properly unpair the devices. Then the equipment receipt is signed again indicating that the iPhone and/or Apple Watch were returned in good condition. 

Now is a good time, to do an exit interview if needed. We often ask for the participant's feedback, issues, suggestions for improvement, etc.

If incentives, e.g., a cash reward, vouchers, or similar, were promised they can be handed out now. We provide a form that needs to be signed to indicate the receipt of the reward.

We assembled a short offboarding checklist for your convenience.

**Checklist**
* Uninstall Cozie
* Unpair Apple Watch
* Remove Apple Watch from *Find My* app  
  This step only applies to cases where you provided an Apple Watch to the participant for the experiment. It is very important to do this step; otherwise, the Apple Watch will be locked and cannot be used anymore.
* Sign equipment receipt
* Exit interview
* Sign receipt for participant incentive 

## Monitoring
Monitoring of the data quality is one of the most crucial aspects during a Cozie deployment. There are many reasons why the collected data can be compromised, e.g., participants revoke permissions on the devices, participants enable flight mode, participants disable location services, technical issues on the backend, etc. If an issue is detected early, it can be addressed, and the amount of data lost can be minimized. Without monitoring, you risk to having no valid data at the end of the Cozie deployment. Below are a few points for what to look out for:
  * **Data availability and quality**
    * Is the data that you expect there?<br/>
      Reasons for missing data could be technical issues with the database, 
      flight mode enabled, participant is not wearing the Apple Watch, participant is not taking watch surveys, participant has disabled data services, participant has disabled location services

    * Are there any gaps in the data?<br/>
      The reasons for gaps in the data are the same as above.

    * Is the logging delay acceptable, e.g., `ts_heart_rate_lambda`-`time`?<br/>
      The logging rate is influenced by many factors, e.g., battery charge state, frequency of unlocking the iPhone, internet access, etc.

  * **Data characteristics**
    * Does the range of values for the data make sense?<br/>
      For example, we expect the heart rate to be a positive number between approximately 40 and 200 beats per minute. It would be a strong indicator of a technical issue if the heart rate data were to include negative numbers. 

    * Is the sampling interval for all modalities as expected?<br/>
      The different modalities, e.g., heart rate, HRV, step count, etc., have different sampling intervals. The sampling interval for one modality can also vary throughout the day, and might even be entirely irregular. You want to make sure that the sampling intervals as within your expectations.

    * Is the number of watch survey responses as expected?<br/>
      Do participants respond to the watch survey at an expected rate? Is the time between watch survey responses appropriate? Sometimes, participants want to complete the experiment as quickly as possible and submit many watch survey responses within a short period of time.

    * Are there missing watch survey responses?<br/>
      The column `ws_survey_count` allows you to check if any watch survey responses were lost. The number should increase by one for each watch survey response from a participant. The number resets, if the participant ID is changed or if the app is uninstalled.
    
    * Is there location data for all responses?<br/>
      Sometimes, the location data is missing. Reasons for this can be a lack of internet connectivity, disabled location service, or a technical issue. If there is no location data, the `ws_latitude` and `ws_longitude` will be zero.

The list is not exhaustive. Make sure you know what data quality aspects matter for your research and critically analyze the data from the test run.


## Conclusion
The deployment of Cozie is a labor-intensive endeavor. For good results and a good experience ensure the following:
* Budget enough time for the preparation of the experiment.
* Mentally prepare for inconveniences during onboarding and offboarding due to scheduling challenges.
* Continuously monitor the data flow during the experiment.