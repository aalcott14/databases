var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
//from here we need to talk to the controller
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

