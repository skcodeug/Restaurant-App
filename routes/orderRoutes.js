const express = require("express");
const router = express.Router();
const path = require('path');
const Order = require('../models/orderModel') 

// SET UP THE ROUTES

router.get('/', (req,res)=>{
    // console.log("hello world");
    res.sendFile( path.join(__dirname, '../views','orderFood.html'))
});

router.get('/orderReport', async (req,res)=>{
    // console.log("hello world");
    let entries = await Order.find();
    res.render('orderReport', { orders: entries });
    // res.render('userlist', { users: items })
});

router.post('/', (req,res)=>{
    console.log("hello world");
    res.render('orderReport');
});

router.post('/orderFood',async (req,res)=>{
  try {
      var order = new Order(req.body)
      await order.save()
      console.log(req.body);
      
      res.redirect('/order/orderReport')
  } catch (error) {
      res.status(400).send ('unable to take order')

  }
  });

module.exports = router;