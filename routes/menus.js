const { Router } = require('express');
const menusCtrl = require('../controllers/menus.js');

const router = Router();

router.get('/', menusCtrl.getAllMenus)
router.post('/', menusCtrl.createMenu);
router.post('/addMenu', menusCtrl.addMenu);
router.get('/:id', menusCtrl.getMenById);
router.patch('/:id', menusCtrl.updateMenuById);
router.delete('/:id', menusCtrl.deleteMenuById)

module.exports = router;