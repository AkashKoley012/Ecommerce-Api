const express = require("express");
const { create, getAll, deleteProduct, update } = require("../controllers/product");
const router = express.Router();

//! create product
router.post("/create", create);
//! update quantity of product
router.post("/:id/update_quantity", update);
//! delete a product
router.delete("/:id", deleteProduct);
//! get all products
router.get("/", getAll);

module.exports = router;
