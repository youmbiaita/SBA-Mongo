const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [{ type: Schema.Types.ObjectId, ref: 'Menu', required: true }],
  total: { type: Number, required: true },
  status: { type: String, required: true }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
