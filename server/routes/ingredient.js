let Ingredient = require('../models');
let express    = require('express');

let router     = express.Router();


router.get('/', (req,res) => {
    res.status(200).send("Hey, keep track of your ingredients here!");
});

module.exports = router;