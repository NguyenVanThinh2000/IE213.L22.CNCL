const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accounts = new Schema({
    fullname: String,
    email: String,
    phone: String,
    password: String,
    is_admin: Boolean,
});

module.exports = mongoose.model('accounts', accounts);
