var express     = require('express');
var Sequelize   = require('sequelize');
var app         = express();
var PORT        = 3000;


const sequelize = new Sequelize('groceryList', '', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Nice it works");
  })
  .catch((err) => {
    console.log("Here is our error", err);
  })

app.listen(PORT, () => {
  console.log("Check it out we're up and running");
})