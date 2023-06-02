// Import the necessary modules and dependencies
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Mount the user routes
router.use('/users', userRoutes);

// Mount the post routes
router.use('/posts', postRoutes);

// Mount the comment routes
router.use('/comments', commentRoutes);

// Export the router
module.exports = router;
