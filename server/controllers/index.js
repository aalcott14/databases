var models = require('../models');
var express = require('express');
var connection = require('../db');
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, result) {
        console.log(err);
        if (err) {
          throw err;
        }
        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      var params = [ req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, result) {
        console.log(err);
        if (err) {
          throw err;
        }
        res.json(result);
      });
    },
    post: function (req, res) {
      var params = [ req.body.username ];
      models.users.post(params, function(err, results) {
        res.sendStatus(201);
      });
    }
  }
};

