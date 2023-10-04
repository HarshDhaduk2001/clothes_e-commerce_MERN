import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">hello</p>
          <p className="opacity-70">size</p>
          <p className="opacity-70 mt-2">seller</p>
          <div className="flex space-x-3 items-center text-gray-900 mt-10">
            <p className="font-semibold">199</p>
            <p className="line-through opacity-50">399</p>
            <p className="text-green-600">5% off</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:hidden">
        <IconButton>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <span className="py-1 px-7 border rounded-sm">3</span>
        <IconButton sx={{ color: "RGB(145 85 253)" }}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      <div className="lg:hidden">
        <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
