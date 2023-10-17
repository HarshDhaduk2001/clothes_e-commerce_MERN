const cartItemService = require("../services/cartItemService");

const updateCartItem = async (req, res) => {
  const user = await req.user;
  try {
    const updateCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res
      .status(200)
      .send({
        updateCartItem: updateCartItem,
        message: "Cart Item updated successfully.",
      });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const removeItemToCart = async (req, res) => {
  const user = await req.user;
  try {
    const cartItem = await cartItemService.removeCartItem(
      user._id,
      req.params.id
    );
    return res.status(200).send({ message: "Cart Item removed successfully." });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { updateCartItem, removeItemToCart };
