const { Schema, model } = require('../config/db-connection');

const orderSchema = new Schema({
    userId: { 
        type:Number,
         ref: 'User',
        required: true },
    orderItems: [
        { 
            type: Array,
             ref: 'Menu', 
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
