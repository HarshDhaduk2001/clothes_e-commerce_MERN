const productService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(200).send({
      product: product,
      message: "Product created successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    return res.status(200).send({
      product: product,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    return res.status(200).send({
      product: product,
      message: "Product updated successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  try {
    const product = await productService.findProductById(req.params.id);
    return res.status(200).send({
      product: product,
      message: "Product found successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts(req.query);
    return res.status(200).send({
      products: products,
      message: "Products found successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createMultipleProduct = async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body);
    return res.status(200).send({
      message: "Products created successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
