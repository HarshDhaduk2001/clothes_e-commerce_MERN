const reviewService = require("../services/reviewService");

const createReview = async (req, res) => {
  try {
    const review = await reviewService.createReview(req.body, req.user);
    return res.status(200).send({
      review: review,
      message: "Review added successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllReview = async (req, res) => {
  try {
    const reviews = await reviewService.getAllReview(req.params.productId);
    return res.status(200).send({
      reviews: reviews,
      message: "Reviews found successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { createReview, getAllReview };
