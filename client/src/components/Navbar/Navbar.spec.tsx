import { fireEvent, render } from "@testing-library/react";
import { Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import Navbar from "components/Navbar/Navbar";

describe("<Navbar/>", () => {
  it("should search and when submit redirect to the correct url", () => {
    const history = createMemoryHistory();
    const search = "Iphone";
    const { getByPlaceholderText, getByRole } = render(
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" />
          <Route exact path="/items" />
          <Route exact path="/items/:id" />
        </Switch>
      </Router>
    );
    const searchInput = getByPlaceholderText(/Nunca dejes de buscar/i);
    fireEvent.input(searchInput, {
      target: {
        value: search,
      },
    });
    const submitButton = getByRole("button");
    fireEvent.submit(submitButton);
    expect(history.location.pathname).toBe("/items");
    expect(history.location.search).toBe(`?search=${search}`);
  });

  it("should keep the url if search is empty", () => {
    const history = createMemoryHistory();
    const search = "";
    history.push("/");
    const { getByPlaceholderText, getByRole } = render(
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" />
          <Route exact path="/items" />
          <Route exact path="/items/:id" />
        </Switch>
      </Router>
    );
    const searchInput = getByPlaceholderText(/Nunca dejes de buscar/i);
    fireEvent.input(searchInput, {
      target: {
        value: search,
      },
    });
    const submitButton = getByRole("button");
    fireEvent.submit(submitButton);
    expect(history.location.pathname).toBe("/");
  });
});
