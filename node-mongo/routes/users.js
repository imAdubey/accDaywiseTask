var express = require('express');
var router = express.Router();

// ------------------------------------------------------------------------- controller here -------------------------------------------------------------------------
const controller = require('../controller/users');

// ------------------------------------------------------------------------- all routes here -------------------------------------------------------------------------

// fetch user
router.get('/', controller.fetchUser);

// add user
router.post('/', controller.addUser);

// update user
router.put('/:id', controller.updateUser);

// delete user
router.delete('/:id', controller.deleteUser);

module.exports = router;
