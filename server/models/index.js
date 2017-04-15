var db = require('../db');

module.exports = {
  //we resive messages from the controller to send to the database
  messages: {
    get: function (callback) {
      var queryString = 'select messages.id, messages.message, rooms.name, users.name \
        from messages left outer join users on (messages.user_id = users.id) left outer join rooms on (messages.rooms_id = rooms.id) \
        order by messages.id desc';
      db.query(queryString, params, function(err, results) {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var roomQuery = 'insert into rooms (name) values (' + params[2] + ');';
      db.query(roomQuery, params, function(err, results) {
        var queryString = 'insert into messages (message, users_id, rooms_id) VALUES (' + params[0] + ', (SELECT id FROM users WHERE name = ' + params[1] + '), (SELECT id FROM rooms WHERE name = ' + params[2] + ');';
        db.query(queryString, params, function(err, results) {
          callback(results);
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'select * from users';
      db.query(queryString, params, function(err, results) {
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryString = 'insert into users (name) values (' + params[0] + ')';
      db.query(queryString, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

