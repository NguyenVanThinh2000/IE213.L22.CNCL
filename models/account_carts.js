const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account_carts = new Schema({
    email: String,
    id: String,
    price: String,
    image: String,
    name: String,
});

module.exports = mongoose.model('account_carts', account_carts);
