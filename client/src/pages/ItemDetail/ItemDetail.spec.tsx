import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASE_URL } from "utils/constants";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, waitFor } from "@testing-library/react";
import ItemDetail from "pages/ItemDetail/ItemDetail";
import { cache } from "swr";

const response = {
  author: { name: "Iago", lastname: "Laguna" },
  item: {
    id: "MLA901421848",
    title: "Apple iPhone 11 (64 Gb) - Negro",
    price: { currency: "ARS", amount: 154999, decimals: 0 },
    picture: "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
    free_shipping: true,
    sold_quantity: 5,
    condition: "new",
    description: "Fake description",
  },
};

const server = setupServer(
  rest.get(`${BASE_URL}/items/:id`, (req, res, ctx) => res(ctx.json(response)))
);

describe("ItemDetail", () => {
  beforeAll(() => server.listen());

  afterEach(() => {
    cache.clear();
    server.resetHandlers();
  });

  afterAll(() => server.close());

  it("should render request data correctly into component", async () => {
    const history = createMemoryHistory();
    history.push(`/items/${response.item.id}`);

    const { getByText } = render(
      <Router history={history}>
        <ItemDetail />
      </Router>
    );
    await waitFor(() => {
      expect(getByText(response.item.title)).toBeDefined();
      expect(getByText(response.item.description)).toBeDefined();
    });
  });
});
