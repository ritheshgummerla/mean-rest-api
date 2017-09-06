var User = require('../models/user').User

exports.addUser=function(user, next){
    var newUser = new User({
        firstName : user.name,
        lastName : user.lastName,
        mobile:user.mobile,
    });

    newUser.save(function(err){
        if(err){
            return next(err);
        }
        next(null)
    });
}