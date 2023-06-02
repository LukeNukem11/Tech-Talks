// Import the necessary modules and dependencies
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

// Route for the homepage
router.get('/', (req, res) => {
    // Find all posts and include associated comments and user data
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
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
        // Render the homepage template with the post data
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route for the login page
router.get('/login', (req, res) => {
    // If user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Render the login template
    res.render('login');
});

// Route for the signup page
router.get('/signup', (req, res) => {
    // Render the signup template
    res.render('signup');
});

// Route for a single post
router.get('/post/:id', (req, res) => {
    // Find a post by the provided ID and include associated comments and user data
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'content', 'title', 'created_at'],
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
        // If no post is found, return a 404 status and error message
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // Convert the post data to a plain object
        const post = dbPostData.get({ plain: true });
        console.log(post);
        // Render the single-post template with the post data
        res.render('single-post', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route for posts and their comments
router.get('/posts-comments', (req, res) => {
    // Find a post by the provided ID and include associated comments and user data
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'content', 'title', 'created_at'],
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
        // If no post is found, return a 404 status and error message
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // Convert the post data to a plain object
        const post = dbPostData.get({ plain: true });
        // Render the posts-comments template with the post data
        res.render('posts-comments', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Export the router
module.exports = router;
