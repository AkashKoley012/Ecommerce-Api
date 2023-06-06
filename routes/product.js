const express = require("express");
const { create, getAll, deleteProduct, update } = require("../controllers/product");
const router = express.Router();

//! create product
router.post("/create", create);
//! get all products
router.get("/", getAll);
//! delete a product
router.delete("/:id", deleteProduct);
//! update quantity of product
router.post("/:id/update_quantity", update);

module.exports = router;
