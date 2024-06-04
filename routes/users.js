const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

router.get('/', usersCtrl.getAllUsers);
router.post('/', usersCtrl.createUser);
router.get('/:id', usersCtrl.getUserById);
router.put('/:id', usersCtrl.updateUserById);
router.delete('/:id', usersCtrl.deleteUserById);

module.exports = router;
