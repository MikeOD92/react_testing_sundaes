import "./App.css";
import react, { useState } from "react";
import { Container } from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./context/OrderDetails";
function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
      {/* confirm pages does not */}
    </Container>
  );
}

export default App;
