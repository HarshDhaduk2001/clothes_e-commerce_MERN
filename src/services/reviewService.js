const Review = require("../models/reviewModel");
const productService = require("./productService");

const createReview = async (reqData, user) => {
  try {
    const product = await productService.findProductById(reqData.productId);

    const review = new Review({
      user: user._id,
      product: product._id,
      review: reqData.review,
      createdAt: new Data(),
    });

    await product.save();
    return await review.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllReview = async (productId) => {
  try {
    const product = await productService.findProductById(productId);
    if (product) {
      return await Review.find({ product: product._id }).populate("user");
    }
    return "Product not found.";
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createReview, getAllReview };
