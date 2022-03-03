import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function ScoopOptions({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    updateItemCount(name, e.target.value);
  };
  return (
    <Col>
      ScoopOptions
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
      <Form.Group controlId={`${name}-count`} as={Row} className="mt-5">
        <Form.Label>{name}</Form.Label>
        <Form.Control type="number" defaultValue={0} onChange={handleChange} />
      </Form.Group>
    </Col>
  );
}
