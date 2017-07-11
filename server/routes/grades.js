let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Grades      = models.grades;


router.get('/', (req,res) => {
    res.status(200).send("Grades endpoints begin here");
});


module.exports = router;