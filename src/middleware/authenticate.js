const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/userService");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).send({ error: "Token not found." });
    }
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = userService.getUserById(userId);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { authenticate };
