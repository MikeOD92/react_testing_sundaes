import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SummaryForm() {
  const [accept, setAccept] = useState(false);

  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: "blue " }}> Terms and Conditions </span>
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
