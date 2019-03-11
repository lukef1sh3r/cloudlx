var express = require('express');
var request = require('request');

function doLogin() {
  var options = {
    method: 'POST',
    url: 'http://demo.infiny.cloud/api/oauth2/access-token',
    headers: {
      'content-type': 'application/json'
    },
    body: {
      grant_type: 'client_credentials',
      client_id: 'yhEwzOMVrAuF3UvEzoqX0Hx25JI4Z8dHoqzyOCKU',
      client_secret: 'BhjxN7tsGcOTDRplum9F9pCmcoLVJFGq6bz7bw2n'
    },
    json: true
  };
  
  return request(options, function(error, response, body) {
    if (error) throw new Error(error);
  });
};

module.exports = doLogin();
