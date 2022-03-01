import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("inital conditions:", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /accept/i });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("checkbox enables button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /accept/i });

  userEvent.click(checkbox);
  expect(button).toBeEnabled();

  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover responseds to hover", async () => {
  // pop over starts out hidden
  render(<SummaryForm />);
  const nullPopOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();
  // popover appears upone mouse over of checkbox label
  const terms = screen.getByText(/terms and conditions/i);

  userEvent.hover(terms);

  const popOver = screen.getByText(/no ice cream will actually be delivered/i); // if this fails it throws so line 45 isnt really need for functionality but its good for readability
  expect(popOver).toBeInTheDocument();
  // popover disappears when we mouse out
  userEvent.unhover(terms);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
