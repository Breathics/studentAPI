// Importing our dependencies and any additional 
// modules used in our express webserver
const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const cors        = require('cors');

// Starting off our Express application
const app     = express();
const env     = require('dotenv').load();
const PORT    = 3000;

// Loading in routes to be used
// in the main express application
const routes  = require('./routes');


//Consuming middleware
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost'}));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(cors());
=======
>>>>>>> 2e8257c5ebf747dded23154d4a6642086932c207


// Consuming our express.Router middleware
// that will handle our API endpoints
app.use('/sgt', routes);


// Listens for a successful connection that 
// will be bound to a specified PORT 
app.listen(PORT, () => {
  console.log("Check it out, we're cooking somethin' hot on PORT", PORT);
});