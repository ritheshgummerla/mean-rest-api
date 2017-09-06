var express = require('express');
var path = require('path');
var router = express.Router();
var userService = require('../services/userService');
var User = require('../models/user').User
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.post('/regi', function(req, res, next) {
    var user = req.body;
    console.log('got hte data from client'+JSON.stringify(user));
    userService.addUser(user, function(err){
        if(err){
            console.log('error inserting')
        }
        console.log('data stored in database '+JSON.stringify(user))
        
    });
    
});

router.get('/regi', function(req, res, next) {
    // get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
  res.json(users)
});
    
});


router.get('/edit/:id', function(req, res, next) {
    var user = req.params.id;
    console.log('got id from client'+JSON.stringify(user));
        // get  user by id
User.findById({_id:user}, function(err, users) {
  if (err) throw err;

  // object of user id
  console.log(JSON.stringify(users));
  res.json(users)
});
    
});

router.put('/put', function(req, res, next) {
    var user = req.body;
    var query = { _id: user._id };
    console.log('got data from client'+JSON.stringify(user));
    console.log('got data from client'+JSON.stringify(query));
        // get  user by id
User.findByIdAndUpdate(query, { firstName: user.firstName, lastName: user.lastName, mobile: user.mobile }, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
   // return res.send("succesfully saved");
    console.log('saved' +doc)
});
    
});

module.exports = router;
