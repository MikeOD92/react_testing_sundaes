import React from "react";

export default function ToppingsOptions({ name, imagePath }) {
  return (
    <div>
      ToppingsOptions
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </div>
  );
}
