# MERN Stack Blogging Platform

A modern blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete blog posts.

## Features

- User Authentication (Signup/Login)
- Create, Read, Update, and Delete (CRUD) blog posts
- Rich text editor for blog content
- Responsive design
- User profiles
- Comments on blog posts
- Search functionality

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- Material-UI for components
- React Router for navigation
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing

## Project Structure

```
blog-platform/
├── client/             # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── features/
│       ├── services/
│       └── utils/
└── server/             # Backend Node.js/Express application
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── utils/
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd client
   npm start
   ```

5. Open http://localhost:3000 in your browser

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Blog Posts
- GET /api/posts - Get all blog posts
- GET /api/posts/:id - Get single blog post
- POST /api/posts - Create new blog post
- PUT /api/posts/:id - Update blog post
- DELETE /api/posts/:id - Delete blog post

### Comments
- GET /api/posts/:id/comments - Get comments for a post
- POST /api/posts/:id/comments - Add comment to a post
- DELETE /api/posts/:id/comments/:commentId - Delete a comment 