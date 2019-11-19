const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const exphbs = require('express-handlebars');
const db = require('./models');
const router = require('./controllers/api.js');
const PORT = process.env.PORT || process.argv[2] || 3000;

// Initialize Express
const app = express();

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(router);
// Connect to the Mongo DB
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/Headlines';

mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, function() {
  console.log(`This application is running on port: ${PORT}`);
});
