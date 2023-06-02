// Import the User, Post, and Comment models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define the associations

// A User can have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id', // Sets the foreign key in the Post model to associate with the User model's primary key
});

// A Post belongs to a User
Post.belongsTo(User, {
  foreignKey: 'user_id', // Sets the foreign key in the Post model to associate with the User model's primary key
  onDelete: "cascade" // Specifies that if a User is deleted, all associated Posts should be deleted as well
});

// A Comment belongs to a User
Comment.belongsTo(User, {
  foreignKey: 'user_id', // Sets the foreign key in the Comment model to associate with the User model's primary key
  onDelete: "cascade" // Specifies that if a User is deleted, all associated Comments should be deleted as well
});

// A Comment belongs to a Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id', // Sets the foreign key in the Comment model to associate with the Post model's primary key
  onDelete: "cascade" // Specifies that if a Post is deleted, all associated Comments should be deleted as well
});

// A User can have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id', // Sets the foreign key in the Comment model to associate with the User model's primary key
  onDelete: "cascade" // Specifies that if a User is deleted, all associated Comments should be deleted as well
});

// A Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id', // Sets the foreign key in the Comment model to associate with the Post model's primary key
  onDelete: "cascade" // Specifies that if a Post is deleted, all associated Comments should be deleted as well
});

// Export the User, Post, and Comment models
module.exports = { User, Post, Comment };
