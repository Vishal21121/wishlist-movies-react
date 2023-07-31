# Wishlist Movies React App
The Wishlist Movies React App is a web application built using React and Tailwind CSS for the frontend and Appwrite for the backend. The app allows users to create a wishlist of their favorite movies. The movie data is fetched using the TMDB (The Movie Database) API.

## Features
1. User authentication: Users can sign up, log in, and log out to access and manage their wishlist.
2. Wishlist management: Once logged in, users can add movies to their wishlist and view their entire wishlist.
3. Movie search: Users can search for movies using the TMDB API and add their favorite ones to their wishlist.
4. Movie details: The app displays detailed information about each movie, such as title, release date, popularity and poster.

## Technologies Used

1. **React**: The frontend of the app is built using React, a popular JavaScript library for building user interfaces.
2. **Tailwind CSS**: Tailwind CSS is used for styling the app, providing a utility-first approach for creating responsive and visually appealing designs.
3. **Appwrite**: Appwrite is utilized as the backend service, handling user authentication and storing the movie wishlist data securely.
4. **TMDB API**: The TMDB API is used to fetch movie details and search for movies based on user queries.

## Getting Started
To run the Wishlist Movies React App locally, follow these steps:

1. **clone the repository**: Start by cloning this repository to your local machine.

2. **Install dependencies**: Navigate to the project directory and install the required dependencies using npm.

```bash
npm install
```

3. Get TMDB API Key: You need to obtain an API key from the TMDB website (https://www.themoviedb.org/) to access the movie data. Create an account and get your API key.

4. Configure Appwrite: Visit the Appwrite website (https://appwrite.io/) to create an account and set up a new project. Take note of your Appwrite endpoint and project ID.

5. Environment Variables: Create a .env file in the project root and add the requied fields as it is done in **.env.example** file.

6. Run the app: Now you can start the development server and run the app.
```bash
npm start
```
The app will be accessible at `http://localhost:3000`.


## License
This project is licensed under the [MIT License](LICENSE).



