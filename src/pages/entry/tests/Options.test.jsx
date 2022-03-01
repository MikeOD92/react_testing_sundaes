import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays img for each scoop from server", async () => {
  render(<Options optionType={"scoops"} />);

  // find img
  const scoopImg = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImg).toHaveLength(3);

  // confirm alt text of images

  const altText = scoopImg.map((element) => element.alt);
  expect(altText).toEqual([
    "Chocolate scoop",
    "Vanilla scoop",
    "Mint chip scoop",
  ]);
});
