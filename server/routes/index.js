// Load route modules
let students    = require('../models/students');


// We'll be using express.Router to handle
// our multiple API endpoints
let express     = require('express');
let router      = express.Router();


// Similar to app.use() in Express, however
// the purpose will be used to consume 
// modules exported from our API endpoints
router.use('/students', students);

// Export router object containing all API
// modules to be consumed by express application
module.exports = router;