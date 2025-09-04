---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
sidebar_position: 10
---

import useBaseUrl from '@docusaurus/useBaseUrl';

### Data and internet access

* #### Does Cozie work without an internet connection?
    No, Cozie needs at least internet access during the setup phase. After the initial setup, some features can be used without internet access.
    * These features work without an internet connection:
      * Watch surveys after initial setup
      * Offline logging to local file (watch survey & health data)
      * Watch survey reminders
      * Phone survey reminders
      <!-- HealthKit data collection-->
    * These features require an internet connection:
      * Watch surveys (during setup)
      * Logging to the online database (watch survey & health data)
      * Feedback information shown in the *Data* tab, e.g., *Valid Survey Count*, *Invalid Survey Count*, *Last Watch Survey*
      * Links shown in the *Data* tab, e.g., *Cozie Github Repository*, *Cozie Documentation*
      * Phone survey
      * Push notifications

* #### Do the reminders work without an internet connection?
    Yes, all reminders work without an internet connection. Please note that while the phone survey reminder works without an internet connection, the phone survey itself requires an internet connection.

* #### Does the Apple Watch have to be connected to the iPhone for Cozie to work?
    We have only tested Cozie Apple exclusively on Apple Watches without a modem. While the Apple Watch is not connected to the iPhone, the watch survey response will be saved on the Apple Watch. The response will be sent to the database once the Apple Watch connects again to the iPhone. The same applies to health data.
  
    Reminders won't be shown on the Apple Watch if the watch is not connected
    to the iPhone.
  <!--What if the Apple watch is connected to wifi?-->
  <!--Watch survey is sent later but location data might be off-->

* #### Where is Cozie data stored?
    Cozie offers two ways to store data:
    1. **Default** <br/>
    By default, Cozie-Apple data is stored on password-protected servers in Singapore and logged on the iPhone. The data can be downloaded from our [online API](/docs/download_data/download). Data data can also be retrieved from the [local backup file](/docs/download_data/data_download_offline).

    2. **Custom Database** <br/>
    Instead of using our database to store your data, you can also set up your own backend. Just replace the necessary information about the API and OneSignal in the *Backend* tab and you can operate the Cozie app independent of us. No changes to the source code are required.
      <img alt="Screenshot backend tab default API and OneSignal configuration" src={useBaseUrl('img/cozie_backend_tab_offline_1.png')}width="30%" />  &nbsp;

<!-- A trial has shown that syncing the watch will hang without API information in the backend tab. This needs to be fixed before the paragraph below can be published.
    3. **Offline only** <br/>
    Online logging can be turned off. Just go to the *Backend* tab and remove all API and OneSignal information. The Cozie app will then only store data locally on the Apple Watch and the iPhone.<br/>
    Please note that this configuration brings more risk, as any issues, e.g., with the data logging, become only apparent after the log file is retrieved from the iPhone. Hence, retrieval of the log file on the iPhone and data analysis of the data in regular intervals is recommended.
      <img alt="Screenshot backend tab default API and OneSignal configuration" src={useBaseUrl('img/cozie_backend_tab_offline_1.png')}width="30%" />  &nbsp;
      <img alt="Screenshot backend tab offline API and OneSignal configuration" src={useBaseUrl('img/cozie_backend_tab_offline_2.png')}width="30%" />  &nbsp;
-->

### Performance

* #### How long does it take for a push notification from OneSignal to arrive on the iPhone or Apple Watch?
    Provided there is an internet connection, it usually takes less than ten seconds between sending a push notification, and the push notification appearing on the iPhone and/or the Apple Watch.

* #### How frequently is the physiological data logged?
    It is important to distinguish two terms: logging rate and sampling rate. The sampling rate is defined by the time between to measurement samples. The logging rate is defined by the points in time when the measurement samples were sent to the database.

    Example:

    | `time`  | `ts_heart_rate` |`ts_heart_rate_lambda`|`ts_heart_rate_trigger`|
    |-----------------|---------|----------------------|-----------------------|
    |2023-10-10 12:49 | 76      | 2023-10-10 12:53     | background_task       |
    |2023-10-10 12:52 | 75      | 2023-10-10 12:53     | background_task       |
    |2023-10-10 12:55 | 77      | 2023-10-10 13:15     | application_appear    |

    The table above shows three samples of a heart rate measurement (`ts_heart_rate`). The `ts_heart_rate` column shows the value of the measurement in beats per minute (bpm).

    The `time` column shows when the measurement took place.

    The `ts_heart_rate_lambda` column shows the timestamp of when the sample was inserted into the database (logged).

    The `ts_heart_rate_trigger` column records what triggered the Cozie app to send the data.

    In this example, the timestamps in `time` are three minutes apart. Hence, the sampling rate is 1 sample per 3 minutes.

    The first two rows were logged at the same time (`tes_heart_rate_lambda`). The third row was logged 23 minutes later. Hence, the logging rate is 1 log per 23 minutes. The sampling rate cannot be influenced is given by the data provided by iOS. The logging rate can be influenced, e.g., by opening the app, using the iPhone, and taking watch surveys.

* #### Is it possible to call the function that pulls the GPS location, heart rate data, etc in a set interval without the participant interacting with the survey?
    Well, having a live stream of all data is the dream. We've been hard working on that dream for a while. Here is the result:
    All HealthKit data is submitted twice: 
    1. When the watch survey is submitted. In that case, the prefix is `ws_`, e.g., `ws_heart_rate`.
    2. Then the HealthKit data is submitted a second time with the prefix `ts_`, e.g., `ts_heart_rate`. 
  
  `ts_` data has various triggers, e.g., when you open the app, when press the sync buttons in the app, sometimes it is sent in the background.

  You can check what triggered the transmission of the data and when it arrived in the database with the fields with the postfix `_trigger` and `_lambda`, e.g., `ts_heart_rate_trigger` and `ts_heart_rate_lambda` or `ws_heart_rate_trigger` and `ws_heart_rate_lambda`.

  You can increase the chances of the data being sent by using the iPhone. Because Cozie can only access HealthKit data when the phone is unlocked. But in our experience, the `ws_` data has the highest update frequency provided participants are reminded every hour and also provide a watch survey response accordingly.
  
  For the location, you already know about `ws_latitude` and `ws_longitude`. There is also `ts_latitude`, and `ts_longitude`. These location data are sent when the user changes their location.  

* #### How long does it take for a watch survey to be stored in the online database?
    Provided there is an internet connection, it usually takes less than ten seconds between pressing the 'Submit survey' button and the response being logged in the database.

* #### What is the minimum and maximum reminder frequency?
    The minimum time between two reminders is 30 minutes.<br/>
    The maximum time between two reminders is 24 hours.<br/>
    The maximum of total reminders per week is 64, e.g., if reminders are set every hour from 9 am to 6 pm and Monday through Friday that adds up to 10 reminders per day times 5 days, totalling 50 reminders. Phone survey reminders also count towards the maximum of 64 reminders per week.

### Other questions

* #### What is the minimal requirement for the Apple Watch and iPhone to run Cozie?
    Please ensure that your iPhone and Apple Watch are running at least iOS 16 and watchOS 9.
    Further, make sure to have an Apple Watch Series 4 or newer and iPhone 11 or newer. ([Source](https://en.wikipedia.org/wiki/WatchOS))

* #### The location data is 0.0 for longitude and latitude. What is wrong?
    Longitude=0 and latitude=0 is a point in the Atlantic west of Africa. We generally don't expect Cozie users to be there. Usually, (0, 0) coordinates are invalid. This can be the case when there is no location data available, e.g., 
    when location services are turned off on the iPhone, the iPhone is in flight mode, or if there is another issue with acquiring location data.

* #### Is Cozie available on Android devices?
    Cozie Apple is only available for iPhones and Apple Watches. However, there is a sister project called [Cozie Fitbit](https://cozie-fitbit.app/) that we used to work on. Cozie Fitbit is available for select Fitbit wearables and works on iPhones and Android smartphones. The development on Cozie Fitbit is paused for now and we will focus on the development of Cozie Apple.

* #### Can Cozie be used with only one iPhone and multiple Apple Watches?
    Cozie Apple was developed for the use of one iPhone and one Apple Watch per user. It is also our recommendation to use Cozie-Apple in this way.

* #### What is the cost of using Cozie?
    To use Cozie you need the app, an iPhone, and an Apple Watch. The Cozie application is free to use. We currently provide free access to our logging infrastructure until further notice.

    The [Apple Watch SE](https://www.apple.com/shop/buy-watch/apple-watch-se) is the most inexpensive watch option and is available for approximately 250 USD. The Apple Watch SE has a reduced feature set compared to the most recent Apple Watch models. 

    The [iPhone SE](https://www.apple.com/shop/buy-iphone/iphone-se) is the most inexpensive iPhone option and is available for approximately 430 USD.

    Modifying the source code of the app requires a [membership in the Apple Developer Program](https://developer.apple.com/support/compare-memberships/). There is a free tier available. The free tier includes access to XCode (IDE) and TestFlight (testing service). TestFlight allows you to create test versions of the app that are valid for 90 days. A paid membership is required to have your app on the App Store. The cost for the membership is approximately 100 USD per year.

* #### What is accuracy of the physiological data measured with the Apple Watch?
    Please refer to the publications below:
    * [**Accuracy of Apple Watch Measurements for heart rate and energy expenditure in patients with cardiovascular disease: Cross-Sectional Study.**, Falter, Maarten, et al., JMIR mHealth and uHealth 7.3 (2019): e11889.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6444219/)
    * [**Assessment of accuracy of overall energy expenditure measurements for the Fitbit Charge HR 2 and Apple Watch.**, Nuss, Kayla J., et al., American journal of health behavior 43.3 (2019): 498-505.](https://www.ingentaconnect.com/content/png/ajhb/2019/00000043/00000003/art00005)
    * [**Tracking steps on apple watch at different walking speeds.**, Veerabhadrappa, Praveen, et al., Journal of general internal medicine 33 (2018): 795-796.](https://link.springer.com/article/10.1007/s11606-018-4332-y)
    * [**Validity and reliability of the Apple Watch for measuring heart rate during exercise.**, Khushhal, Alaa, et al., Sports medicine international open 1.6 (2017): E206.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6226089/)

### Push notifications

* #### What is the maximal length of a push notification?
    There are no hard limits on the length of a push notification. OneSignal states the following ([Source](https://documentation.onesignal.com/docs/mobile-push-notifications-guide)):
    - Title: About 25-50 character limit
    - Message: About 150 characters limit

    In any case, you must draft push notifications and test them on an Apple Watch to see whether it works as expected.

* #### How many push notifications can be shown in a push notification?
    There are no hard limits on the number of action buttons. OneSignal states the following ([Source](https://documentation.onesignal.com/docs/action-buttons)):
    - iOS supports up to 4 buttons with Rich Notifications

    However, in our own testing, we have seen that the action button payload can be up to 255 bytes, and one action button requires at least 22 bytes (1 ID character, 1 text character). Hence, the maximum number of action buttons with only one text character is eleven. Longer texts or IDs will result in fewer number of action buttons.

    In any case, you must draft push notifications with action buttons and test them on an Apple Watch to see whether it works as expected.