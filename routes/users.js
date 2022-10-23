var express = require('express');
var userController = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.getAll);
/* GET user by id. */
router.get('/:id', userController.getById);
/* create user. */
router.post('/', userController.create);
/* update user by id. */
router.put('/:id', userController.update);
/* delete user by id. */
router.delete('/:id', userController.delete);


module.exports = router;
