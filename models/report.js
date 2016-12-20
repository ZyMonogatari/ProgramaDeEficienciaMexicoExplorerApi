var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reportSchema = new Schema({  
  name:  {type: String},
  numberOfSells: {type: Number },
  amount : {type: Number},
  collect : {type : Number},
  answeredCalls : {type: Number},
  day : {type: Number},
  month : {type: Number},
  year : {type: Number}
});

module.exports = mongoose.model('report', reportSchema); 