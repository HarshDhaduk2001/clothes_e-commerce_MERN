const userService = require("./userService");
const CartItem = require("../models/cartItemModel");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Cart item not fount :", cartItemId);
    }

    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error("User not fount :", userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You can't update this cart item.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

    if (user._id.toString() === cartItem.user.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("You can't remove another user's item.");
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCartItemById = async (cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    if (cartItem) {
      return cartItem;
    }
    throw new Error("Cart item not found with id :", cartItemId);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateCartItem, removeCartItem, findCartItemById };
