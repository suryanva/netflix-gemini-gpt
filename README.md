````markdown
# Netflix GPT

## Description

A movie browsing and recommendation application that integrates with TMDB and Gemini APIs. Features include user authentication, movie suggestions, and a responsive design.

## Technologies Used

- **Vite**: For building and serving the application.
- **React**: For the UI components.
- **TailwindCSS**: Configured for styling.
- **Firebase**: For authentication and database.
- **TMDB API**: For movie data.
- **Gemini API**: For movie recommendations.

## Features

- **Login/Sign Up**
  - Sign In / Sign up Form
  - Redirect to Browse Page upon authentication
- **Browse (after authentication)**
  - Header
  - Main Movie section with trailer, title, and description
  - Movie Suggestions
- **NetflixGPT**
  - Search Bar
  - Movie Suggestions

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/suryanva/netflix-gemini-gpt.git
   cd netflix-gemini-gpt
   ```
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   In the root of your project, create a file named `.env` and add the following content:

   ```plaintext
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id

   # TMDB Configuration
   VITE_TMDB_API_KEY=your-tmdb-api-key

   # Gemini API Configuration
   VITE_GEMINI_API_KEY=your-gemini-api-key
   ```

   **Explanation**:

   - **Firebase Configuration**: Required for Firebase services. Obtain these values from your Firebase project settings.
   - **TMDB Configuration**: Required to access TMDB's movie data.
   - **Gemini API Configuration**: Required for GPT-based movie recommendations.

4. **Start the development server**

   ```bash
   npm run dev
   ```

## Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy**

   Follow the deployment instructions for your preferred hosting service.

## Usage

- **Login**: Use the login form to access the application.
- **Browse Movies**: After logging in, you can browse movies and get recommendations.
- **Search**: Use the search bar to find specific movies and view suggestions.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

Feel free to adjust any sections to better match your project's specific needs or to add any additional information as necessary.
