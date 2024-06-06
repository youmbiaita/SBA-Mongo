const { Schema, model } = require('../config/db-connection');

const orderSchema = new Schema({
    userId: { 
        type: String,
         ref: 'user',
        required: true },
    orderItems: [
        { 
            type: Array,
             ref: 'menu', 
             required: true 
        }
    ],
    total: { 
        type: Number,
         required: true },
    status: {
         type: String,
          required: true 
    }
  });

module.exports = model('order', orderSchema);
