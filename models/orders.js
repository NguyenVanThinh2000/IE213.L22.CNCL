const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orders = new Schema({
    name: String,
    email_order: String,
    address: String,
    phone: String,
    notes: String,
    email: String,
    list_order: Array,
});

module.exports = mongoose.model('orders', orders);
