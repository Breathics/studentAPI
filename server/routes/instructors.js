let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Instructors = models.instructors;


router.get('/', (req,res) => {
    res.status(200).send("Instructor endpoints begins here");
});


module.exports = router;