# Tech Talks

Tech Talks is a tech blog website that follows the MVC (Model-View-Controller) architectural pattern. It provides a platform for users to read and publish articles, tutorials, and discussions on various tech-related topics.

## Features

- User Registration and Authentication: Users can create accounts, log in, and log out to access personalized features.
- Article Management: Users can create, edit, and delete their own articles.
- Article Categories: Articles are organized into different categories for easy navigation and discovery.
- Commenting System: Users can comment on articles and participate in discussions.
- Search Functionality: Users can search for articles using keywords, tags, or categories.
- User Profiles: Each user has a profile page that showcases their published articles and information.
- Responsive Design: The website is designed to be responsive and accessible on various devices.

## Technologies Used

- Front-end:
  - HTML
  - CSS
  - JavaScript
- Back-end:
  - Node.js
  - Express.js 
  - SQL Server 
- MVC Framework: 
  - Model: Data models and database interactions
  - View: UI templates and rendering
  - Controller: Route handling and business logic
- Authentication and Authorization:
  - Json Web Tokens
  

## Installation

1. Clone the repository: `git clone https://github.com/your-username/tech-talks.git`
2. Navigate to the project directory: `cd tech-talks`
3. Install the dependencies: `npm install`
4. Create a `.env` file and provide the necessary environment variables (e.g., SQL Server connection details, session secret).
5. Start the server: `npm start`

## Usage

- Access the application in your web browser at: `http://localhost:3000` (or the appropriate URL).
- Explore the articles and categories available on the homepage.
- Sign up for a new account or log in to an existing account to access personalized features.
- Create, edit, or delete your own articles.
- Comment on articles and engage in discussions.
- Use the search function to find articles based on keywords, tags, or categories.

## Folder Structure

The project follows a typical MVC folder structure:

- `controllers/`: Contains the controller logic for handling routes and business logic.
- `models/`: Contains the data models and database interactions.
- `views/`: Contains the UI templates for rendering the views.
- `public/`: Contains static assets such as CSS, JavaScript, and images.
- `routes/`: Defines the routes and maps them to the appropriate controller methods.
- `config/`: Contains configuration files and setup (e.g., database connection, authentication).

## Database Setup

To set up the SQL Server database, follow these steps:

1. Install SQL Server on your machine if you haven't already.
2. Create a new database for the project.
3. Update the `.env` file with the necessary database connection details.

## Deployment

- Deploy the application to your chosen hosting platform.
- Set up the necessary environment variables on the hosting platform.
- Configure your domain name (if applicable).
- Start the server and ensure the application is running correctly in the production environment.

## License

This project is licensed under the [MIT License](LICENSE).

