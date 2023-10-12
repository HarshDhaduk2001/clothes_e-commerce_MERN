const orderSerive = require("../services/orderService");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderSerive.getAllOrders();
    return res.status(200).send({ orders: orders });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const confirmOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderSerive.confirmedOrder(orderId);
    return res.status(200).send({ orders: orders });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const shipOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderSerive.shipOrder(orderId);
    return res.status(200).send({ orders: orders });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderSerive.deliverOrder(orderId);
    return res.status(200).send({ orders: orders });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const cancelledOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderSerive.cancelOrder(orderId);
    return res.status(200).send({ orders: orders });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderSerive.deleteOrders(orderId);
    return res.status(200).send({ orders: orders });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  confirmOrders,
  shipOrders,
  deliverOrders,
  cancelledOrders,
  deleteOrders,
};
