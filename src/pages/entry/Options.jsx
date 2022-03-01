import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingsOptions from "./ToppingsOptions";
import AlertBanner from "../common/AlertBanner";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }
  // replace 'null' w/ toppingOptions when availble.
  const ItemComponent =
    optionType === "scoops" ? ScoopOptions : ToppingsOptions;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
