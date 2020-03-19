//  require mongoose package in orderModel
const mongoose = require('mongoose');
// creating a schema
var orderSchema = new mongoose.Schema({
 food:String,
 sauce:String,
 drink:String
});
// creat a model and export it

module.exports = mongoose.model('Order',orderSchema);