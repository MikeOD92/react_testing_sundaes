import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";

test("update scoop subtotal when scoop changes", async () => {
  render(<Options optionType="scoops" />, {
    wrapper: OrderDetailsProvider,
  });

  // make sure total starts at 0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });

  expect(scoopsSubtotal).toHaveTextContent("0.00");
  // update vanilla scoops to 1 and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocalate scoops to 2 check substoal
  const ChocoInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  userEvent.clear(ChocoInput);
  userEvent.type(ChocoInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});
