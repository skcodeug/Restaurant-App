const express = require("express");
const router = express.Router();
const path = require('path');
// SET UP THE ROUTES

router.get('/', (req,res)=>{
    // console.log("hello world");
    res.sendFile( path.join(__dirname, '../views','login.html'))
});

router.get('/register', (req,res)=>{
    // console.log("hello world");
    res.sendFile( path.join(__dirname, '../views','register.html'))
});

module.exports = router;