import React from "react";
import AddressCard from "./AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2 space-y-10 mt-10">
            {[1, 1, 1].map((i) => (
              <CartItem />
            ))}
          </div>
          <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-5">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
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
