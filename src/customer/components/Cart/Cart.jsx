import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="lg:grid grid-cols-3 relative gap-5 px-10 lg:px-16">
        <div className="col-span-2 space-y-10 mt-10">
          {[1, 1, 1].map((i) => (
            <CartItem />
          ))}
        </div>
        <div className="sticky top-0 h-[100vh] mt-10">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹1433</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-₹33</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3">
                <span>Total Amount</span>
                <span className="text-green-600">₹1400</span>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: ".7rem", mt: 3 }}
                onClick={() => navigate("/checkout/?step=2")}
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
