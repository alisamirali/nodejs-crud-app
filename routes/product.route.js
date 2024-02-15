const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// get all products
router.get("/", getProducts);

// create a product
router.post("/", createProduct);

// get a single product
router.get("/:id", getProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
