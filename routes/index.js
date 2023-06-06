const express = require("express");
const router = express.Router();

router.use("/products", require("./product"));
router.use("/", (req, res) => {
    return res.redirect("/products");
});

module.exports = router;
