var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({  
  user: {type: String },
  passwort: {type: String }
});

module.exports = mongoose.model('user', userSchema); 