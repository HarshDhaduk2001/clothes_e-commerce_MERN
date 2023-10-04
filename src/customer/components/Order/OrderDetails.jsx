import React from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 mt-8 space-y-16">
      <div className="shadow-lg p-5">
        <h1 className="font-semibold text-lg pb-4">Delivery Address</h1>
        <AddressCard />
      </div>
      <OrderTracker activeStep={3} />
      <Grid container className="space-y-8">
        {[1, 1, 1].map((i) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex cursor-pointer item-center">
                <img
                  className="w-[7rem] h-[7rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2 font-semibold">
                  <p>title</p>
                  <p className="space-x-2 opacity-50 text-xs">
                    <span>Size: M</span> <span>Color: Black</span>
                  </p>
                  <p className="opacity-50 text-xs">Seller: linaria</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{ color: deepPurple[500] }}
                className="flex items-center justify-center"
              >
                <StarBorderIcon
                  sx={{ fontSize: "3rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
