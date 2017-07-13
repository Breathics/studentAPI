// Load route modules
let students  = require('./students');

// Future route modules to be imported
// let students    = require('./students');
// let instructors = require('./instructors');
// let grades      = require('./grades');
// let courses     = require('./courses');

// We'll be using express.Router to handle
// our multiple API endpoints
let express     = require('express');
let router      = express.Router();


// Similar to app.use() in Express, however
// the purpose will be used to consume 
// modules exported from our API endpoints
router.use('/students', students);

// Future router middlerware to be used
// router.use('/students', students);
// router.use('/instructors', instructors)
// router.use('/grades', grades);
// router.use('/courses', courses);

// Export router object containing all API
// modules to be consumed by express application
module.exports = router;