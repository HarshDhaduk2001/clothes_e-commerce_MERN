const Rating = require("../models/ratingModel");
const productService = require("./productService");

const createRating = async (reqData, user) => {
  try {
    const product = await productService.findProductById(reqData.productId);

    const rating = new Review({
      user: user._id,
      product: product._id,
      rating: reqData.rating,
      createdAt: new Data(),
    });

    return await rating.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductRating = async (productId) => {
  try {
    const product = await productService.findProductById(productId);
    if (product) {
      return await Rating.find({ product: product._id });
    }
    return "Product not found.";
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createRating, getProductRating };
