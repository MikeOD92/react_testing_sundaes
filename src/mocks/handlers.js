import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/img/choclate.png" },
        { name: "Vanilla", imagePath: "/img/vanilla.png" },
        { name: "Mint chip", imagePath: "/img/mintChip.png" },
      ])
    );
  }),
];
