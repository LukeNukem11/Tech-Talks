// Import the necessary modules and dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Mount the API routes
router.use('/api', apiRoutes);

// Mount the home routes
router.use('/', homeRoutes);

// Mount the dashboard routes
router.use('/dashboard', dashboardRoutes);

// Catch-all route for handling undefined routes
router.use((req, res) => {
    res.status(404).end();
});

// Export the router
module.exports = router;
