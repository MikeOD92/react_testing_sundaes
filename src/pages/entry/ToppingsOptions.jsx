import React from "react";
import { Form, Col } from "react-bootstrap";

export default function ToppingsOptions({ name, imagePath, updateItemCount }) {
  return (
    <Col>
      ToppingsOptions
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            updateItemCount(name, e.target.checked ? 1 : 0);
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}
