// Importing our dependencies and any additional 
// modules used in our express webserver
const express     = require('express');

// Starting off our Express application
const app     = express();
const env     = require('dotenv').load();
const PORT    = 3000;

// Loading in our models and routes to be
// used in the main express application
const routes  = require('./routes');
const models  = require('./models');
const Ingredient =  models.ingredients;

// Syncing models to generate tables in
// MySQL database if not already defined
Ingredient.sequelize.sync({force: true}).then(() => {
  console.log("Database looks good!");
}).catch((err) => {
  console.log("Nope try again");
})

// Consuming our express.Router middleware
// that will handle our API endpoints
app.use('/api', routes);




// Listens for a successful connection that 
// will be bound to a specified PORT 
app.listen(PORT, () => {
  console.log("Check it out, we're cooking somethin' hot on PORT", PORT);
});