let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Ingredients = models.ingredeients;


router.get('/vegetables', (req,res) => {
    Ingredients.findAll({
        where: {
            type: "vegetables"
        }
    })
      .then(data => {
          res.status(200).json({"Success": true, "vegetables": data});
          res.send(200).send("We have the vegetables");
      }).catch(err => {
          res.status(404).send("We couldn't find any of your food");
      })
});

router.post('/vegetables', (req,res) => {
    Ingredients.create({
        ingredient: req.body.ingredient,
        quantity: req.body.quantity,
        daysTilExpiration: req.body.daysTilExpiration,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(data => {
        res.status(200).send({"Success": true, "data":data})
    }).catch(err => {
        res.status(404).json({"Success": false, "Message": "Error 404!"})
    })
});

module.exports = router;