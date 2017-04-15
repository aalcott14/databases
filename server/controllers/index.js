var models = require('../models');
var express = require('express');
var statusCode = 
module.exports = {
  messages: {
    get: function (req, res) {
      console.log('--------------req url ', req.url);
      //we to go the the models
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('--------------req url ', req.url);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

