# Humble Superhero Frontend

This is the frontend of the **Humble Superhero API**. It provides a user interface to interact with the backend API to create and list superheroes based on their humility score.

## 🚀 Technologies Used
- React
- TypeScript
- Axios (HTTP Requests)

## 📌 Features
- Create a new superhero with a name, superpower, and humility score (1-10).
- Retrieve a list of all superheroes, sorted by humility score.

## 🔧 How to Run the Project

1. Install dependencies:
   ```sh
   npm install
   ```
### ⚠️ Make sure to set the `REACT_APP_API_PORT` variable in the `.env` file If not set, the application will run on port `3001` by default.


2. Start the development server:
    ```sh
    npm start
    
3. The application will be available at http://localhost:3000 or on the defined port.


## 📡 API Integration
This project communicates with the backend API (Humble Superhero API). The default backend URL is http://localhost:3000, but you can configure the URL in the .env file if needed.

Backtend Repository: https://github.com/Khevinn/humble-superhero-api

## 📱 How to Consume the API

The API can be consumed by any client (like the React frontend). Make sure to configure the frontend to point to the correct URL for the API.

## 📝 Notes:
This API is set up with an in-memory database for testing purposes.
If you want to change to a persistent database, modify the database configuration in the backend code.

Endpoints used:
 - GET /superheroes: Fetches the list of superheroes.
 - POST /superheroes: Creates a new superhero with name, superpower, and humility score.
