const ratingService = require("../services/ratingService");

const createRating = async (req, res) => {
  try {
    const rating = await ratingService.createRating(req.body, req.user);
    return res.status(200).send({
      rating: rating,
      message: "Rating given successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllRating = async (req, res) => {
  try {
    const ratings = await ratingService.getAllRating(req.params.productId);
    return res.status(200).send({
      ratings: ratings,
      message: "Ratings found successfully.",
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { createRating, getAllRating };
