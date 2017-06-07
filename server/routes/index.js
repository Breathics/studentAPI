// Load route modules
const shiba       = require('./shiba');

// We'll be using express.Router to handle
// our multiple API endpoints
const express     = require('express');
const router      = express.Router();

// Consume 
router.use('/shiba', shiba);


module.exports = router;