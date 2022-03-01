import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertBanner({ message, variant }) {
  const alertMsg =
    message || "an unepected error occured, please try again later";
  const alertVariant = variant || "danger";

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMsg}
    </Alert>
  );
}
