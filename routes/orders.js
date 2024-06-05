const { Router } = require('express');
const ordersCtrl = require('../controllers/orders.js');

const router = Router();

router.get('/', ordersCtrl.getAllOrders)
router.post('/', ordersCtrl.createOrder);
router.get('/:id', ordersCtrl.getOrderById);
router.patch('/:id', ordersCtrl.updateOrderById);
router.delete('/:id', ordersCtrl.deleteOrderById)

module.exports = router;