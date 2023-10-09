const Cart = require("../models/cartModel");

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    return await cart.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createCart };
