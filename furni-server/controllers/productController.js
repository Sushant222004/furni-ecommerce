const Product = require("../models/Product");
const { success, error } = require("../utils/responsehandler");

const addProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      stock,
    });
    return success(res, "Product added Successfully", product, 201);
  } catch (err) {
    return error(res, err.message, null, 400);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return success(res, "Products fetched Successfully", products, 200);
  } catch (err) {
    return error(res, err.message, null, 400);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return error(res, "Product not found", null, 400);
    }
    return success(res, "Product fetched Successfully", product, 200);
  } catch (err) {
    return error(res, err.message, null, 400);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, category, stock } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        image,
        category,
        stock,
      },
      { new: true },
    );
    if (!product) {
      return error(res, "Product not found", null, 400);
    }
    return success(res, "Product updated Successfully", product, 200);
  } catch (err) {
    return error(res, err.message, null, 400);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return error(res, "Product not found", null, 400);
    }
    return success(res, "Product deleted Successfully", product, 200);
  } catch (err) {
    return error(res, err.message, null, 400);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
