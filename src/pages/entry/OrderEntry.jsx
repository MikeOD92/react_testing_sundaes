import React from "react";
import Options from "./Options";
import { useOrderDetails } from "../../context/OrderDetails";

export default function OrderEntry() {
  const [orderDetails, updateItemCount] = useOrderDetails();

  return (
    <div>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <h2>grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
}
