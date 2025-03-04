# Web Development Portfolio Project

This project is a full-stack web application developed as part of my web development course at Oregon State University. It demonstrates the knowledge and skills I gained in web development, including working with JavaScript, React, Node.js, Express, and MongoDB.

## Project Overview

This single-page application follows the Model-View-Controller (MVC) architecture pattern. It allows users to interact with an art collection, supporting CRUD (Create, Read, Update, Delete) operations on the backend, while providing a user-friendly interface on the frontend.

### Key Technologies Used:
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, HTML, CSS
- **Database**: MongoDB (using Mongoose ORM)
- **Deployment**: Render

### Features:
- View, create, edit, and delete art pieces.
- Manage orders and staff.
- Fully functional user interface with responsive design.

---

## Project Structure

### Backend
- **arts-controller.mjs**: Contains the controller logic for handling requests related to arts.
- **arts-model.mjs**: Mongoose model to represent art data in MongoDB.
- **package.json** & **package-lock.json**: Dependencies and package management for the backend.

### Frontend
- **src**: Source files for React components, pages, and data.
  - **components**: React components for various parts of the app.
  - **data**: JavaScript data files for managing product-related data.
  - **pages**: React pages for different sections of the app.
  - **App.js**: The root component that ties everything together.
  - **App.css**: Global styling for the app.
  - **index.js**: The entry point for the React app.

### Deployment
- **Frontend**: Hosted on Render, accessible at [https://sandeenk-webdev-portfolio.onrender.com](https://sandeenk-webdev-portfolio.onrender.com).
- **Backend**: Also deployed on Render, providing the RESTful API for handling art data.
