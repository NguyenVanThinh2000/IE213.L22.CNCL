const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products = new Schema({
  id: String,
  name: String,
  brand_: String,
  price: String,
  type: String,
  image: String,
  status: String,
  description: String,
});

module.exports = mongoose.model('products', products);
