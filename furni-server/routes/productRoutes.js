const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", addProduct);

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.patch("/:id", updateProduct);

router.post("/:id", deleteProduct);
module.exports = router;
