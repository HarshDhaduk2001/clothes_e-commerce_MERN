const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminOrderController");
const { authenticate } = require("../middleware/authenticate");

router.get("/", authenticate, adminController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, adminController.confirmOrders);
router.put("/:orderId/ship", authenticate, adminController.shipOrders);
router.put("/:orderId/deliver", authenticate, adminController.deliverOrders);
router.put("/:orderId/cancel", authenticate, adminController.cancelledOrders);
router.put("/:orderId/delete", authenticate, adminController.deleteOrders);

module.exports = router;
