var mongoose = require('mongoose');

var Schema = mongoose.Schema
var userService = require('../services/userService');

var userSchema = new Schema({
    firstName : {type:String},
    lastName : {type:String},
    mobile : {type:Number},
});

var User = mongoose.model('user', userSchema);

module.exports={
    User : User
};