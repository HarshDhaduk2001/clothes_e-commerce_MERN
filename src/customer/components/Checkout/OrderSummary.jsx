import React, { useEffect } from "react";
import AddressCard from "./AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../Redux/Order/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  console.log(order);

  return (
    <div>
      {/*<div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={order.order} />
  </div>*/}
      <div>
        <div className="lg:grid grid-cols-3 gap-8 relative">
          <div className="col-span-2 space-y-10">
            {order.order?.order?.orderItems?.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="sticky top-0 h-[100vh]">
            <div className="border p-5">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order.order?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order.order.order?.totalDiscountedPrice}
                  </span>
                </div>
                <Button
                  variant="contained"
                  className="w-full"
                  sx={{ px: "2.5rem", py: ".7rem", mt: 3 }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
