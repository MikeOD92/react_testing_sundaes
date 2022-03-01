import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [accept, setAccept] = useState(false);

  const popOver = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkBoxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popOver}>
        <span style={{ color: "blue " }}> Terms and Conditions </span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={accept}
          onChange={(e) => setAccept(e.target.checked)}
          label={checkBoxLabel}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accept}>
        accept
      </Button>
    </Form>
  );
}
