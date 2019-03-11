var express = require('express');
var router = express.Router();
var request = require('request');
var doLogin = require('../authentication');

router.get('/', function(req, res, next) {
  request('http://demo.infiny.cloud/api/services', { headers: { 'authorization': 'Bearer ' + doLogin.response.body.access_token }, json: true }, function(error, response, body) {
    res.render('index', { title: 'CloudLX', services: body.services });
  });
});

module.exports = router;
