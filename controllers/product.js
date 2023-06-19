const Product = require("../models/Product");

//! controller for product create
module.exports.create = async (req, res) => {
    try {
        let product = await Product.findOne({ name: req.body.product.name });
        if (!product) product = await Product.create(req.body.product);
        return res.status(200).json({ data: { product: product } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//! controller for get all product
module.exports.getAll = async (req, res) => {
    try {
        let products = await Product.find();
        return res.status(200).json({ data: { products: products } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//! controller for delete product
module.exports.deleteProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        await Product.findByIdAndDelete(productId);
        return res.status(200).json({ data: { message: "product deleted" } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//! controller for update quantity
module.exports.update = async (req, res) => {
    try {
        let inc = req.query.number;
        let productId = req.params.id;
        let product = await Product.findById(productId);
        if (product) {
            let count = product.quantity + Number(inc);
            count = count > 0 ? count : 0;
            product = await Product.findByIdAndUpdate(productId, { quantity: count }, { new: true });
        }
        console.log(product);
        return res.status(200).json({ data: { product: product }, message: "update successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
