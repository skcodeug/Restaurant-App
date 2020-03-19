const express = require("express");
const router = express.Router();
const path = require('path');
// SET UP THE ROUTES

router.get('/', (req,res)=>{
    // console.log("hello world");
    res.sendFile( path.join(__dirname, '../views','login.html'))

});

module.exports = router;