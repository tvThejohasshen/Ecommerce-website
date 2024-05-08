// setup express

const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
require('dotenv').config();

const app = express();

//use hbs for the view engine
app.set('view engine', 'hbs');

// enable the static folder
app.use(express.static('public'));

// enable wax-on for template inheritance
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// enable forms
app.use(express.urlencoded({ extended: false })); 

// Define your routes here

// Testing route
app.get('/', (req, res) => {
  res.send("It's alive!!!"); 
});

app.listen(3000, () => {
  console.log("Server has started");
});
