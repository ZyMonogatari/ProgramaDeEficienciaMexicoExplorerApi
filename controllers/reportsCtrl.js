var mongoose = require('mongoose');  
var Report = require('../models/report');

exports.findAllReports = function(req, res) {  
    Report.find(function(err, reports) {
    if(err) res.send(500, err.message);

    console.log('GET /reports/findAllReports')
        res.status(200).jsonp(reports);
    });
};

exports.findReportByDay = function(req, res) { 
    Report.find({    
        'day':req.params.day,
        'month':req.params.month,
        'year':req.params.year,
        'name':req.params.name}, function(err, reports){
            if(err) return res.status(500).send(err.message);
            console.log('GET /reports/:name/findReportByDay/:year/:month/:day')
            res.status(200).jsonp(reports);
        });
};

exports.findReportByMonth= function(req, res) { 
    Report.find({'month':req.params.month,'year':req.params.year,'name':req.params.name}, function(err, reports){
            if(err) return res.status(500).send(err.message);
            console.log('GET /reports/:name/findReportByMonth/:year/:month')
            res.status(200).jsonp(reports);
        });
};

exports.findReportByYear = function(req, res) { 
    Report.find({
        'year':req.params.year, 
        'name': req.params.name}, function(err, reports){
            if(err) return res.status(500).send(err.message);
            console.log('GET /reports/:name/findReportByYear/:year')
            res.status(200).jsonp(reports);
        });
};

exports.findReportByPerson = function(req, res) { 
    Report.findOne({
        'name':req.params.id}, function(err, reports){
            if(err) return res.status(500).send(err.message);
            console.log('GET /reports/findReportByPerson/'+req.params.id)
            res.status(200).jsonp(reports);
        });
};

exports.addReport = function(req, res) {  
    console.log('POST /reports/addReport');
    console.log(req.body);
    
    var report = new Report ({
        name: req.body.name,
        numberOfSells: req.body.numberOfSells,
        amount : req.body.amount,
        collect : req.body.collect,
        answeredCalls : req.body.answeredCalls,
        day :  req.body.day,
        month :  req.body.month,
        year : req.body.year
    });


    report.save(function(err, report) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(report);
    });
};

exports.updateReport = function(req, res) { 
	console.log('PUT /reports/updateReport/'+req.params.id) 
    console.log(req.body);
    Report.findById(req.params.id, function(err, report) {
        report.name = req.body.name,
        report.numberOfSells = req.body.numberOfSells,
        report.amount = req.body.amount,
        report.collect = req.body.collect,
        report.answeredCalls = req.body.answeredCalls,
        report.day =  req.body.day,
        report.month =  req.body.month,
        report.year = req.body.year

        report.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(report);
        });
    });
};

exports.deleteReport = function(req, res) { 
	console.log('DELETE /reports/deleteReport/'+req.params.id)
    Report.findById(req.params.id, function(err, report) {
        report.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};