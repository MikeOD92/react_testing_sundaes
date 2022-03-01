import React from "react";

export default function ScoopOptions({ name, imagePath }) {
  return (
    <div>
      ScoopOptions
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </div>
  );
}
