const express = require('express'); // express app
const router = express.Router(); // router logic

// this is where we import the controlers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
    .route('trips')
    .get(tripsController.tripsList); // GET method routes tripList

router
    .route('./trips/:tripCode')
    .get(tripsController.tripsFindByCode); // GET method routes tripList

module.exports = router;
