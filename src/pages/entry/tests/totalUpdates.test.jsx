import { render, screen } from "../../../test-utils/testing-lib-test-utils";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

test("update scoop subtotal when scoop changes", async () => {
  render(
    <Options optionType="scoops" /> /*, {
    wrapper: OrderDetailsProvider,
  } we can prodive a one off wrapper this way. */
  );

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

test("check toppings update subtotal correctly", async () => {
  render(<Options optionType={"toppings"} />);

  const subtotal = screen.getByText("Toppings total: $", { exact: false });
  expect(subtotal).toHaveTextContent("0.00");

  const checkbox = await screen.findByRole("checkbox", { name: "Cherries" });

  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(subtotal).toHaveTextContent("1.50");

  const checkboxTwo = await screen.findByRole("checkbox", {
    name: "hot fudge",
  });
  userEvent.click(checkboxTwo);
  expect(checkboxTwo).toBeChecked();
  expect(subtotal).toHaveTextContent("3.00");

  userEvent.click(checkboxTwo);
  expect(checkboxTwo).not.toBeChecked();
  expect(subtotal).toHaveTextContent("1.50");
});
// grand total test
//////////////////////////////////////////////////////////

describe("grand total", () => {
  test("grand total starts at 0.00 updates properly if scoop is added first", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    //
    expect(grandTotal).toHaveTextContent("0.00");
    // const grandTotal = await screen.findByRole('header', {name: /grand total: \$/i})
    const scoopInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });
    const toppingCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.type(scoopInput, "2");
    expect(grandTotal).toHaveTextContent("4.00");
    userEvent.click(toppingCheckbox);
    expect(grandTotal).toHaveTextContent("5.50");
  });
  test("grand total updates properly if topping is added first", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    const scoopInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });
    const toppingCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.click(toppingCheckbox);
    expect(grandTotal).toHaveTextContent("1.50");
    userEvent.type(scoopInput, "1");
    expect(grandTotal).toHaveTextContent("3.50");
  });
  test("grand total updates properly if item is removed", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /^grand total: \$/i,
    });
    const scoopInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });
    const toppingCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.click(toppingCheckbox);
    userEvent.type(scoopInput, "1");
    expect(grandTotal).toHaveTextContent("3.50");
    userEvent.click(toppingCheckbox);
    expect(grandTotal).toHaveTextContent("2.00");
    userEvent.type(scoopInput, "0");
    expect(grandTotal).toHaveTextContent("0.00");
  });
});
