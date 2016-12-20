'use strict';
var express = require('express');
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');
var salesAgentCtrl = require('./controllers/salesAgentCtrl');
var reportsCtrl = require('./controllers/reportsCtrl');
var userCtrl = require('./controllers/userCtrl');
var port = (8080);
var router = express.Router();



app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/salesAgent/findAllSalesAgents/', salesAgentCtrl.findAllSalesAgents);
app.get('/salesAgent/findAllClosers/', salesAgentCtrl.findAllClosers);
app.get('/salesAgent/salesAgentById/:id', salesAgentCtrl.findSalesAgentById);
app.post('/salesAgent/addSalesAgent/', salesAgentCtrl.addSalesAgent);
app.put('/salesAgent/updateSalesAgent/:id',salesAgentCtrl.updateSalesAgent);
app.get('/salesAgent/deleteSalesAgent/:id',salesAgentCtrl.deleteSalesAgent);

app.get('/reports/findAllReports', reportsCtrl.findAllReports);
app.get('/reports/:name/findReportByDay/:year/:month/:day', reportsCtrl.findReportByDay);
app.get('/reports/:name/findReportByMonth/:year/:month', reportsCtrl.findReportByMonth);
app.get('/reports/:name/findReportByYear/:year', reportsCtrl.findReportByYear);
app.get('/reports/findReportByPerson/:id', reportsCtrl.findReportByPerson);
app.post('/reports/addReport', reportsCtrl.addReport);
app.post('/reports/updateReport/:id',reportsCtrl.updateReport);
app.delete('/reports/deleteReport/:id',reportsCtrl.deleteReport);

app.get('/login/:user/:password', userCtrl.login);




mongoose.connect('mongodb://zymonogatari:bk2011shinigami@ds131878.mlab.com:31878/mexicoexplorereficiencia', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  else{
  	console.log('Connected');
  }
  app.listen(port, function() {
    console.log("Node server running on http://localhost:"+port);
  });
});
