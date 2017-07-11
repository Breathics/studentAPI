let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let StudentGrade    = models.studentGrades;


router.get('/', (req,res) => {
    res.status(200).send("Students endpoints begin here!");
});


module.exports = router;