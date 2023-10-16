const Cart = require("../models/cartModel");
const CartItem = require("../models/cartItemModel");
const Product = require("../models/productModel");

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    return await cart.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserCart = async (userId) => {
  try {
    let cart = await Cart.findOne({ user: userId });
    let cartItems = await CartItem.find({ cart: cart._id }).populate(
      "product"
    );
    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscountedPrice;
    cart.totalItem = totalItem;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addItemToCart = async (userId, req) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      user: userId,
    });
    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        user: userId,
        size: req.size,
        price: product.price,
        discountedPrice: product.discountedPrice,
      });

      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createCart, findUserCart, addItemToCart };
