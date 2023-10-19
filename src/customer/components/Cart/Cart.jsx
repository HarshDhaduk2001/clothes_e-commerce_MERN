import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 relative gap-5 px-10 lg:px-16">
        <div className="col-span-2 space-y-10 mt-10">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="sticky top-0 h-[100vh] mt-10">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart.cart?.totalDiscountedPrice}
                </span>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: ".7rem", mt: 3 }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
