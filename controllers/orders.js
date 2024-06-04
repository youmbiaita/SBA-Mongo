const Order = require('../models/order');

module.exports = {
    validateOrder,
    getAllOrders,
    createOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
  };

const validateOrder = (req, res, next) => {
  const { userId, orderItems, total, status } = req.body;
  let message = "";
  if (!userId) message += 'userId, ';
  if (!orderItems) message += 'orderItems, ';
  if (!total) message += 'total, ';
  if (!status) message += 'status.';

  if (message) {
    return res.status(400).send("Missing field(s) required: " + message);
  }
  next();
};

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find().populate('userId orderItems');
    res.json(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

async function  createOrder(req, res) {
  const { userId, orderItems, total, status } = req.body;
  const order = new Order({ userId, orderItems, total, status });

  try {
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id).populate('userId orderItems');
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

async function updateOrderById(req, res) {
  const { userId, orderItems, total, status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { userId, orderItems, total, status }, { new: true });
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

async function deleteOrderById(req, res) {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


