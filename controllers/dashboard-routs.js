// Import the necessary modules and dependencies
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route for the homepage/dashboard
router.get('/', withAuth, (req, res) => {
    // Find all posts by the logged-in user
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        // Include associated comments and user data
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(dbPostData => {
        // Convert the post data to plain objects
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // Render the dashboard template with the post data
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route for editing a post
router.get('/edit/:id', withAuth, (req, res) => {
    // Find a post by the provided ID
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        // Include associated user and comment data
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
        ]
    })
    .then(dbPostData => {
        // If no post is found, return a 404 status and error message
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        // Convert the post data to a plain object
        const post = dbPostData.get({ plain: true });
        // Render the edit-post template with the post data
        res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route for creating a new post
router.get('/new', (req, res) => {
    // Render the new-post template
    res.render('new-post');
});

// Export the router
module.exports = router;
