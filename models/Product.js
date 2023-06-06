const mongoose = require("mongoose");

//? Schema for Product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, require: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
