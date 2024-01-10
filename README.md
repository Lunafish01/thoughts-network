# thoughts-network

## Description
Thoughts Network is a API for a web application designed for a social network. Users on this platform can share their thoughts, react to the thoughts of friends, and manage a friend list. The technology stack for this project includes Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Usage](#usage)
* [Sources](#sources)
* [Links](#links)

## User Story

As the creator of a new social media platform, I need an API with a NoSQL database so that my website can smoothly handle a lot of different kinds of information. This will make sure my platform is capable of managing a large amount of data without any hiccups.

## Acceptance Criteria

- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

***Technologies Used:***

- Express.js for efficient routing.
- MongoDB as the database for data storage.
- Mongoose as the Object Data Modeling tool for MongoDB.

***Date Formatting:***

- Utilize either a JavaScript date library of your preference or the native JavaScript Date object to format timestamps.

***Data Creation:***

- Since no seed data is supplied, I used Insomnia to create my own data for testing and demonstration.

***Deployment:***

- As the application won't be deployed, I have provided a walkthrough video showcasing its functionality.

***Submission:***

- I provided a link to the walkthrough video.

## Usage

Becasue no seed data was provided I used Insomnia to create my own data. Insomnia was also used to test routes and make sure they worked appropriately. MongoDB and Comapss were used for database storage.

## Sources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express.js Documentation](https://expressjs.com/en/5x/api.html)

## Links

- [Link to Video Demo ](https://drive.google.com/drive/home)
- [Link to GitHub Repo](https://github.com/Lunafish01/thoughts-network)

