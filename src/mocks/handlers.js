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
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imagePath: "/img/cherries.png" },
        { name: "M&M's", imagePath: "/img/m-and-ms.png" },
        { name: "hot fudge", imagePath: "/img/hot-fudge.png" },
      ])
    );
  }),
];
