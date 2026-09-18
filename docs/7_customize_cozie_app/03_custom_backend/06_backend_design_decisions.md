---
id: backend_design_decisions
title: Backend Design Decisions
sidebar_label: Backend Design Decisions
---

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

## Limitations and design issues
- Currently, the data type of fields needs to be enforced on the backend to avoid issues. Ideally, the field type should be included in the payload.
- Retrieval of data by researchers requires the creation of an API Key. This creates a bit of work and also housekeeping. Ideally, researchers could retrieve the data without interaction with the Cozie team. A potential solution is to use the `id_password` field as a password for data retrieval.
