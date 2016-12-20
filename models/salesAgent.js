var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var salesAgentSchema = new Schema({  
  name: {type: String },
  type: {type: Number }
});

module.exports = mongoose.model('salesAgent', salesAgentSchema); 