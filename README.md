# Web Development Portfolio Project

This single page application is my first web page and is the culmination of the information learned in my web development class at OSU. 

The functionality of the app is decomposed into a Model-View-Controller pattern. Node.js is the runtime environment for JavaScript on the front and back ends. MongoDB is the database management system chosen to handle the art collection of the app. Mongoose is utilized in the model layer to connect and manipulate the contents of the MongoDB database collection. Express.js, on the controller layer, implements the route handlers which relay requests from the view layer and dictates how the model will be updated in response to those requests. The program utilizes a RESTful API backend so that each HTTP request can happen in isolation, and all the information needed to process the request is sent within the request itself. React is used to create the frontend, or view layer, GUI which can be viewed and interacted with by the user to request creation, reading, updating, and deletion (CRUD) operations on the backend.  The results are a full MERN stack application.

The frontend and backend have been deployed via [Render](https://render.com/), and the frontend can be viewed/interacted with via this link: [https://sandeenk-webdev-portfolio.onrender.com/](https://sandeenk-webdev-portfolio.onrender.com/)
