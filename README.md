## How I worked on this project

My goal was to build an expense tracker for my school alumni association. To ensure transparency, members needed access to a dashboard that reports where the Executive Team is spending their money.

- I used React, Victory, Material-UI libraries for the frontend. This is work-in-progress as with time I intend to build a fully responsive frontend using styled components.
- And I used Node.js, Express.js and MongoDB for the backend

## How to navigate this project

### Frontend

- Some stateful logic: [link to stateful logic]
- UI components: [link]
  The application fetches data from a backend API that I built as part of the project.
- Requests to API for authentication: [link]
- Requests to API for video content: [link]
- Victory module to display aggregated expenses
- Integration tests using React Testing Library [link to example test]

### Backend

- Node.js as runtime environment for server-side javascript
- Express.js middleware: [link]
- API entry routes: [link to routes]
- Example of Database model with Mongoose: [link]
- Application logic to retrieve data from the MongoDB database: [link]
- MongoDB aggregation pipelines:
- I tested this API's CRUD operations using Postman

## Why I built the project this way

### Frontend

- I used React as the major frontend library because its virtual DOM feature provides a smooth user experience whereby only necessary parts of each component are updated when state changes.
- I didn't use a state management library like Redux on purpose. For this app simple `useState` hook is sufficient. In fact, for now there's no complex logic that needs to be shared among many different components.
- Victory is a lightweight module, popular in React community for data visualization.
- Material-UI library provided ready-made components I used as building blocks for my application components. With time I'll develop my own custom components using styled-components.

### Backend

- I choose Node.js due to it does a great job at handling concurrent requests due to its asynchronous event-driven IO. A backend that is fast at processing requests and providing responses without blocking incoming requests was critical to ensure users can access the dashboard anytime to get updated information.
- I also used Express.js due to its popularity at managing middleware needed to manipulate the request and response objects during a request-response cycle. With express, I was able to build a fast RESTful API with all CRUD operations linking to the database.
- MongoDB was used because of its robust aggregation framework that enabled me to aggregate data into useful information at the level of the database.

Testing is an essential part of production applications. Testing Library is the go-to library in the React community. I covered the essential features of the app with tests.

## During my extra time, I intend to improve the following:

- Complete the frontend to have a fully-responsive UI based on some cool Figma designs
- Set up continuous integration to run the tests
- Add end-to-end tests with Cypress

## Available Scripts

### Frontend

- `npm start` to run the application
- `npm test` to run tests

### Backend

- `npm run dev` to run the application, as it's still in dev stage
- Ensure MongoDB is up and running on port 27017
