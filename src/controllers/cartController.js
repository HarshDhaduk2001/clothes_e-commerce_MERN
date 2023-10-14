const cartService = require("../services/cartService");
const userService = require("../services/userService");

const findUserCart = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      return res.status(404).send({ error: "Token not found." });
    }

    const user = await userService.getUserProfileByToken(jwt);
    const cart = await cartService.findUserCart(user._id);
    return res
      .status(200)
      .send({ cart: cart, message: "User cart found successfully." });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      return res.status(404).send({ error: "Token not found." });
    }

    const user = await userService.getUserProfileByToken(jwt);
    const cartItem = await cartService.addItemToCart(user._id, req.body);
    return res
      .status(200)
      .send({ cartItem: cartItem, message: "Item added successfully." });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { findUserCart, addItemToCart };
