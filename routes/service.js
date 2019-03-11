var express = require('express');
var router = express.Router();
var request = require('request');
var doLogin = require('../authentication');

router.get('/:id', function(req, res, next) {
  request('http://demo.infiny.cloud/api/services/' + req.params.id + '/service', { headers: { 'authorization': 'Bearer ' + doLogin.response.body.access_token }, json: true }, function(error, response, body) {
    res.render('service', { title: body.name, service: body });
  });
});

module.exports = router;
