const { Schema, model } = require('../config/db-connection');

const orderSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
        { 
            type: Schema.Types.ObjectId,
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

module.exports = model('order', userSchema);
