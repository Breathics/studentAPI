let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Courses     = models.courses;


router.get('/', (req,res) => {
    res.status(200).send("Course endpoints begin here");
});


module.exports = router;