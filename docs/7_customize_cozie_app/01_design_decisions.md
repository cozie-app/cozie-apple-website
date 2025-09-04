---
id: design_decisions
title: Design Decisions
sidebar_label: Design Decisions
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before we explain in detail how to customize Cozie, we want to document some of the design decisions that we made during the development of Cozie.
It should help inform further development and document how Cozie came to work and how it works today.

# Backend

There are currently two main backend options for Cozie:

## Cozie Original Backend

### Database: InfluxDB

- The main reason for using InfluxDB is that you can add new columns (fields) to tables (measurements) on the fly. Logging additional HealthKit data or adding new watch surveys works without any modifications to the database.
- Similarly, retrieving data can be done with one simple `SELECT` query; no joining or merging of data is necessary. Further, in our experience, researchers want to download all the data for a participant or a group of participants at once. There is very little need for filtering when retrieving data from the database. A little bit of filtering can help monitor the inflow of data. In this case, only the most recent (~week) of data is relevant, and retrieving less data can speed up the query.
- We are using a cloud subscription from Influx. Hence, the database is managed by Influx. In case of any issues, there are daily snapshots available
It has proven to be good practice to group data by experiment. Hence, we create a new table (measurement) for each experiment ID. This table constrains any potential data type issue to one experiment, and data can also be easily deleted by dropping a table (measurement). 

### Backend: AWS

- AWS was chosen because it was the service that offered the most opens at the time. However, now, the whole backend could also be implemented other services, e.g., Azure, Google Cloud. Alternatively, it could also be run on dedicated hardware.
- AWS takes care of all hardware management. 
Using a serverless approach with AWS Lambda functions keeps issues isolated to individual lambda functions and doesn't crash the entire backend. It is reasonably easy to debug and maintain.
- Python is popular in research. For the sake of simplicity, all code that could be written was written in Python. The Cozie Apple app is written in Swift, as there is no alternative.

## Cozie Simplified Backend

The simplified backend uses only Google Cloud Functions and BigQuery.
We have documented the setup of the [simplified backend](https://github.com/cozie-app/cozie-apple-google-backend).

It is:
- easier to set up and maintain, to deploy, and to scale.
- it is cheaper to operate. 
- It easily allows you to select a region where the data is stored.

## Watch survey
- The submit button at the end of the watch survey is required to allow the user to go back and revise the answer to the last watch survey question.
- The Cozie watch app cannot automatically close after pressing the watch survey. The [Apple iOS Human Interface Guidelines](https://stackoverflow.com/questions/8739178/does-apple-disallow-the-use-of-a-close-button-on-ios-ipad) require that all watch apps be closed by pressing the watch crown.

## Phone survey
- The phone survey allows for longer questions and answers but is more intrusive. Many online survey services, e.g., Qualtrix, Google Forms, and Survey Monkey, are available. These services work well on phones and offer a plethora of answer options, e.g., single choice, multiple choice, sliders, point scales, free text, etc... 
    Various collaborators also requested some of these various answer options.
    Instead of replicating these services, we decided to use them in the app and focus on the watch survey and retrieval of HealthKit data.

- Backup file
    - The backup has two main purposes. Firstly, it serves as a backup for the data sent to the backend. Secondly, it allows the Cozie app to work without the backend in cases where we stop operating the backend, or researchers cannot use our backend, e.g., for local data privacy regulation. Nevertheless, we recommend using the log file as a backup in addition to sending data to the backend.

- In-app data visualization
    - Version 2 of the Cozie app had a data page with some data visualization. For the sake of simplicity, the data insight was reduced to three text fields on the data page.

- User management
    - Cozie v1 used [Firebase Authentication](https://firebase.google.com/docs/auth) for user management. This was removed to reduce dependencies and reduce friction from the onboarding process. 

- ResearchKit
    - Cozie v1 used [ResearchKit](https://developer.apple.com/researchkit/). ResearchKit would allow us to roll out experiments using Cozie globally. However, ResearchKit caused problems during development before we were ready to benefit from it. Hence, it was removed to reduce dependencies and remove friction from the onboarding process. ResearchKit could/should be integrated again once Cozie is more refined, i.e., ready to be used in a country-level experiment.

- Limitations and design issues
    - Currently, the data type of fields needs to be enforced on the backend to avoid issues. Ideally, the field type should be included in the payload.
    - Retrieval of data by researchers requires the creation of an API Key. This creates a bit of work and also housekeeping. Ideally, researchers could retrieve the data without interaction with the Cozie team. A potential solution is to use the `id_password` field as a password for data retrieval.
