// Import the Sequelize library
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

let sequelize;

// Check if BLOGDB environment variable is present
if (process.env.BLOGDB) {
  // If BLOGDB is present, create a new Sequelize instance with the provided URL
  sequelize = new Sequelize(process.env.BLOGDB);
} else {
  // If BLOGDB is not present, create a new Sequelize instance with local database credentials
  sequelize = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Database username
    process.env.DB_PASSWORD, // Database password
    {
      host: 'localhost',      // Database host (localhost)
      dialect: 'mysql',       // Database dialect (MySQL)
      port: 3306              // Database port (default: 3306)
    }
  );
}

// Export the sequelize instance
module.exports = sequelize;
