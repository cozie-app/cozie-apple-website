---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
sidebar_position: 10
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers general Cozie AppStore questions. For backend, API, database, and push notification questions, see the [Backend FAQ](/docs/customize_cozie_app/custom_backend/backend_faq). For source-code customization and custom app development questions, see the [App Developer FAQ](/docs/customize_cozie_app/app_developer_faq).

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

### Performance

* #### How long does it take for a watch survey to be stored in the online database?
    Provided there is an internet connection, it usually takes less than ten seconds between pressing the 'Submit survey' button and the response being logged in the database.

* #### What is the minimum and maximum reminder frequency?
    The minimum time between two reminders is 30 minutes.<br/>
    The maximum time between two reminders is 24 hours.<br/>
    The maximum of total reminders per week is 64, e.g., if reminders are set every hour from 9 am to 6 pm and Monday through Friday, that adds up to 10 reminders per day times 5 days, totalling 50 reminders. Phone survey reminders also count towards the maximum of 64 reminders per week.

### Other questions

* #### What is the minimal requirement for the Apple Watch and iPhone to run Cozie?
    Please ensure that your iPhone and Apple Watch are running at least iOS 16 and watchOS 9.
    Further, make sure to have an Apple Watch Series 6 or newer and an iPhone 11 or newer. ([Source](https://en.wikipedia.org/wiki/WatchOS))

* #### The location data is 0.0 for longitude and latitude. What is wrong?
    Longitude=0 and latitude=0 is a point in the Atlantic west of Africa. We generally don't expect Cozie users to be there. Usually, (0, 0) coordinates are invalid. This can be the case when there is no location data available, e.g., 
    when location services are turned off on the iPhone, the iPhone is in flight mode, or if there is another issue with acquiring location data.

* #### Is Cozie available on Android devices?
    Cozie Apple is only available for iPhones and Apple Watches. However, there is a sister project called [Cozie Fitbit](https://cozie-fitbit.app/) that we used to work on. Cozie Fitbit is available for select Fitbit wearables and works on iPhones and Android smartphones. The development for Cozie Fitbit is paused for now, and we will focus on the development of Cozie Apple.

* #### Can Cozie be used with only one iPhone and multiple Apple Watches?
    Cozie Apple was developed for the use of one iPhone and one Apple Watch per user. It is also our recommendation to use Cozie-Apple in this way.

* #### What is the cost of using Cozie?
    To use Cozie, you need the app, an iPhone, and an Apple Watch. The Cozie application is free to use. We currently provide free access to our logging infrastructure until further notice.

    The [Apple Watch SE](https://www.apple.com/shop/buy-watch/apple-watch-se) is the most inexpensive watch option and is available for approximately 250 USD. The Apple Watch SE has a reduced feature set compared to the most recent Apple Watch models. 

    The [iPhone SE](https://www.apple.com/shop/buy-iphone/iphone-se) is the most inexpensive iPhone option and is available for approximately 430 USD.

* #### What is the accuracy of the physiological data measured with the Apple Watch?
    Please refer to the publications below:
    * [**Accuracy of Apple Watch Measurements for heart rate and energy expenditure in patients with cardiovascular disease: Cross-Sectional Study.**, Falter, Maarten, et al., JMIR mHealth and uHealth 7.3 (2019): e11889.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6444219/)
    * [**Assessment of accuracy of overall energy expenditure measurements for the Fitbit Charge HR 2 and Apple Watch.**, Nuss, Kayla J., et al., American journal of health behavior 43.3 (2019): 498-505.](https://www.ingentaconnect.com/content/png/ajhb/2019/00000043/00000003/art00005)
    * [**Tracking steps on Apple Watch at different walking speeds.**, Veerabhadrappa, Praveen, et al., Journal of general internal medicine 33 (2018): 795-796.](https://link.springer.com/article/10.1007/s11606-018-4332-y)
    * [**Validity and reliability of the Apple Watch for measuring heart rate during exercise.**, Khushhal, Alaa, et al., Sports medicine international open 1.6 (2017): E206.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6226089/)
