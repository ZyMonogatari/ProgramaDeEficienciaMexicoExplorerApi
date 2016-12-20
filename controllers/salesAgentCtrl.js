var mongoose = require('mongoose');  
var salesAgent = require('../models/salesAgent');

exports.findAllSalesAgents = function(req, res) {  
    salesAgent.find({'type': 1},function(err, salesAgents) {
    if(err) res.send(500, err.message);

    console.log('GET /salesAgent/findAllSalesAgents')
        res.status(200).jsonp(salesAgents);
    });
};

exports.findAllClosers = function(req, res) {  
    salesAgent.find({'type': 0},function(err, salesAgent) {
    if(err) res.send(500, err.message);

    console.log('GET /salesAgent/findAllClosers')
        res.status(200).jsonp(salesAgent);
    });
};

exports.findSalesAgentById = function(req, res) {  
    salesAgent.findById(req.params.id, function(err, salesagent) {
    if(err) return res.status(500).send(err.message);

    console.log('GET /salesAgent/salesAgentById/' + req.params.id);
        res.status(200).jsonp(salesagent);
    });
};


exports.addSalesAgent = function(req, res) {  
    console.log('POST /salesAgent/addSalesAgent');
    console.log(req.body);

    var salesagent = new salesAgent({
        name: req.body.name,
        type: req.body.type
    });

    salesagent.save(function(err, salesagent) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(salesagent);
    });
};

exports.updateSalesAgent = function(req, res) { 
	console.log('PUT /salesAgent/updateSalesAgent/'+req.params.id) 
    salesAgent.findById(req.params.id, function(err, salesagent) {
        salesagent.name = req.body.name,
        salesagent.type = req.body.type

        salesagent.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(salesagent);
        });
    });
};

exports.deleteSalesAgent = function(req, res) { 
	console.log('DELETE /salesAgent/deteleSalesAgent/'+req.params.id)
    salesAgent.findById(req.params.id, function(err, salesagent) {
        salesagent.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};