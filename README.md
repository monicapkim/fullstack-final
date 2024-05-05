# Full-Stack Final Project
This is a full-stack web application for managing notes, including authentication with Firebase and data storage with MongoDB. The backend server is built with Node.js, Express, and Mongoose, while the frontend is implemented in React.

## Features
- Create, view, and delete notes
- User authentication with Google via Firebase
- Backend API built with Express and MongoDB
- Frontend built with React

## Project Structure
```
fullstack_final
│
├── backend
│   ├── models
│   │   └── Note.js        # Mongoose model for notes
│   ├── node_modules       # Node.js dependencies
│   ├── index.js           # Backend server setup
│   ├── package-lock.json  # Backend dependency lock file
│   └── package.json       # Backend package configuration
│
├── frontend
│   ├── node_modules       # Node.js dependencies
│   ├── public
│   │   ├── index.html     # Main HTML file
│   │   └── styles.css     # Global styles
│   └── src
│       ├── index.js       # React root file
│       ├── notes.js       # Predefined sample notes
│       ├── components     # React components
│       │   ├── App.jsx    # Main App component
│       │   ├── Footer.jsx # Footer component
│       │   ├── Header.jsx # Header component
│       │   └── NewNote.jsx # Form for creating new notes
│       │   └── Note.jsx   # Single note component
│       └── services
│           └── firebase.js # Firebase authentication setup
│   ├── package-lock.json  # Frontend dependency lock file
│   └── package.json       # Frontend package configuration
│
├── .gitignore              # Files to ignore in version control
├── package-lock.json       # Root dependency lock file
├── package.json            # Root package configuration
└── README.md               # This file

```

## Setup Instructions

### Backend Setup
1. **Install Dependencies**:  
   Navigate to the `backend` directory and install the dependencies.
   ```bash
   cd backend
   npm install
   ```

2. **Run the Server**:  
   Start the backend server using the following command:
   ```bash
   npm start
   ```
   The server will be available at `http://localhost:5002`.

### Frontend Setup
1. **Install Dependencies**:  
   From the root directory, install the frontend dependencies.
   ```bash
   npm install
   ```

2. **Start the Frontend**:  
   Start the frontend application.
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

### Firebase Setup
1. **Firebase Project**:  
   Ensure that you have a Firebase project configured. Replace the Firebase configuration in `firebase.js` with your own project's credentials.

### Database Configuration

The application uses MongoDB to store notes. Make sure your MongoDB database is set up and reachable with the provided connection string in the backend `index.js` file.

### API Endpoints
- `GET /notes`: Retrieve all notes.
- `POST /notes`: Create a new note.
- `DELETE /notes/:id`: Delete a note by ID.

## Acknowledgements
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Firebase](https://firebase.google.com/)