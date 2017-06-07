// Importing our dependencies and any additional 
// modules used in our express webserver
const express     = require('express');

const app     = express();
const routes  = require('./routes');
const PORT    = 3000;


app.use('/api', routes);





app.listen(PORT, () => {
  console.log("Check it out, we're cooking somethin' hot on PORT", PORT);
});