// Importing our dependencies and any additional 
// modules used in our express webserver
const express     = require('express');

// Starting off our Express application
const app     = express();
const routes  = require('./routes');
const PORT    = 3000;

// Consuming our express.Router middleware
// that will handle our API endpoints
app.use('/api', routes);




// Listens for a successful connection that 
// will be bound to a specified PORT 
app.listen(PORT, () => {
  console.log("Check it out, we're cooking somethin' hot on PORT", PORT);
});