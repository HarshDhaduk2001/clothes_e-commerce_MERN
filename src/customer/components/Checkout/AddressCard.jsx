import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AddressCard = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {},[])
  
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">Harsh Patel</p>
        <p>Bapunagar, Ahmedabad-382350</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>7373747585</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
