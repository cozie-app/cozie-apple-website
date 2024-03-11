---
id: design_decisions
title: Design Decisions
sidebar_label: Design Decisions
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page we list some of decisions we made during the development of Cozie. It should help inform further development and document how Cozie came to work how it works today.

- InfluxDB
    - The main reason for using InfluxDB is that you can add new columns (fields) to tables (measurements) on the fly. Logging additional HealthKit data or adding new watch surveys works without any modifications to the database.
    - Similarly retrieving of data can be done with one simple `SELECT` query no joining and merging of data is necessary. Further, in our experience researchers want to download all the data for a participant or and group of participants at once. There is very little need for filtering when retrieving data from the database. A little bit of filtering can be helpful for monitoring the inflow of data. In this case, only the most recent (~week) of data is relevant and retrieving a bit less data can speed up the query.
    - We are using a cloud subscription from Influx. Hence, the database is managed by Influx. In case of any issues, there are daily snapshots available
    - It has proven to be good practice to group data by experiment. Hence, we create a new table (measurement) for each experiment ID. This contains any potential data type issue to one experiment and data can also easily be deleted by dropping a table (measurement). 

- AWS
    - AWS was chosen because it was the service that offered the most opens at the time. However, now, the whole backend could also be implemented other services, e.g., Azure, Google Cloud. Alternatively, it could also be run on dedicated hardware.
    - AWS takes care of all hardware management. 
    - Using serverless approach, with AWS Lambda functions keeps issues isolated to individual lambda functions and doesn't crash the entire backend. It is reasonably easy to debug and maintain.

- Python
    - Python is popular in research. For the sake of simplicity, all code that could be written was written in Python. The Cozie Apple app is written in Swift was there is no alternative.

- Phone survey
    - The phone survey allows for longer questions and answers but is more intrusive. There are many online survey services available, e.g., Qualtrix, Google Forms, Survey Monkey. These services work well on phones and offer a plethora of answer options, e.g., single choice, multiple choice, sliders, point scales, free text, etc.. 
    These various answers options were also requested by various collaborators.
    Instead of replicating these services, we decided to use them in the app and focus on the watch survey and retrieval of HealthKit data.

- Backup file
    - The backup has two main purposes. Firstly, it serves as a backup for the data sent to the backend. Secondly, it allows for the Cozie app to work without the backend in cases where we stop operate the backend or researchers cannot use our backend, e.g., for local data privacy regulation. Nevertheless, we recommend using the log file as backup in addition to sending data to the backend.

- In app data visualization
    - Version 2 of the Cozie app had a data page with some data visualization. For the sake of simplicity, the data insight was reduced to three text fields on the data page.

- User management
    - 

- ResearchKit
    - 

- Limitations and design issues
    - Currently, the datatype of fields needs to be enforced in the backend to avoid issues. Ideally, the field type should be included in the payload.
    - Retrieval of data by researchers requires the creation of an API Key. This creates a bit of work and also housekeeping. Ideally, researchers could retrieve the data without interaction with the Cozie team. A potential solution is to use the `id_password` field as password for data retrieval.
