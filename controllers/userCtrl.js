var mongoose = require('mongoose');  
var user = require('../models/user');

exports.login = function(req, res) {  
    user.find({'user':req.params.user, 'password':req.params.password},function(err, user) {
    if(err) res.send(500, err.message);

    console.log('GET /login/'+req.params.user+"/"+req.params.password)
        res.status(200).jsonp(user);
    });
};