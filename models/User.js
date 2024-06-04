const { Schema, model } = require('../config/db-connection');

const userSchema = new Schema({
  name: { 
    type: String,
    required: true, 
    index: true },
  email: { 
    type: String, 
    required: true, 
    unique: true }
});

module.exports = model('user', userSchema);
