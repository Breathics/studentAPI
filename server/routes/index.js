// Load route modules
const shiba       = require('./shiba');

// We'll be using express.Router to handle
// our multiple API endpoints
const express     = require('express');
const router      = express.Router();

// Similar to app.use() in Express, however
// the purpose will be used to consume 
// modules exported from our API endpoints
router.use('/shiba', shiba);





// Export router object containing all API
// modules to be consumed by express application
module.exports = router;