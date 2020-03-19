// REQUIRE 
const express = require("express");
const loginRoutes = require("./routes/loginRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Create instance
const app = express();

// settin up route
app.use('/',loginRoutes);    
app.use('/order',orderRoutes);
app.set('view engine','pug');

// set up the listner
app.listen(6100, ()=>{
    console.log("listenning on port 6100");
    
} );
