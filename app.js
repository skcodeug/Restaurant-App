// REQUIRE 
const express = require("express");
const loginRoutes = require("./routes/loginRoutes");
const orderRoutes = require("./routes/orderRoutes");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create instance
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/hackathon', {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

// settin up route
app.use('/login',loginRoutes);    
app.use('/order',orderRoutes);
app.set('view engine','pug');

// set up the listner
app.listen(6100, ()=>{
    console.log("listenning on port 6100");
    
} );
