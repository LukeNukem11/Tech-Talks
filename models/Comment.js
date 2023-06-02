// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Comment model by extending the Sequelize Model class
class Comment extends Model {}

// Initialize the Comment model and define its attributes
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      validate: {
        len: [3] // Comment text must have a minimum length of 3 characters
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // References the 'user' model/table
        key: 'id' // References the primary key 'id' in the 'user' model
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post', // References the 'post' model/table
        key: 'id' // References the primary key 'id' in the 'post' model
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment' // Sets the model name to 'comment'
  }
);

// Export the Comment model
module.exports = Comment;
