const cartService = require("./cartService");
const Address = require("../models/addressModel");
const Order = require("../models/orderModel");
const OrderItem = require("../models/orderItems");

const createOrder = async (user, shippAddress) => {
  try {
    let address;
    if (shippAddress._id) {
      let existAddress = await Address.findById(shippAddress._id);
      address = existAddress;
    } else {
      address = new Address(shippAddress);
      address.user = user;
      await address.save();

      user.address.push(JSON.stringify(address));
      await user.save();
    }
    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    for (const item of cart.cartItems) {
      const orderItem = new OrderItem({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        user: item.user,
        discountedPrice: item.discountedPrice,
      });

      const createdOrderItem = await orderItem.save();
      orderItems.push(createdOrderItem);
    }
    const createdOrder = new Order({
      user,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount,
      totalItem: cart.totalItem,
      shippAddress: address,
    });
    const savedOrder = await createdOrder.save();
    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

const placeOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";
    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const confirmedOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const shipOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "SHIPPED";
    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deliverOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const cancelOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const findOrderById = async (orderId) => {
  try {
    return await Order.findById(orderId)
      .populate("user")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .populate("shippingAddress");
  } catch (error) {
    throw new Error(error.message);
  }
};

const userOrderHistory = async (userId) => {
  try {
    return await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrders = async () => {
  try {
    return await Order.find()
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteOrders = async (orderId) => {
  try {
    const order = await Order.findOrderById(orderId);
    return await Order.findByIdAndDelete(order._id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelOrder,
  findOrderById,
  userOrderHistory,
  getAllOrders,
  deleteOrders,
};
