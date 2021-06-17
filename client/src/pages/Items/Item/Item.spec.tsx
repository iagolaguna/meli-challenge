import { fireEvent, render } from "@testing-library/react";
import { Condition } from "hooks/useItemDetail";
import { Item as SearchItem } from "hooks/useSearchItems";
import { Item } from "pages/Items/Item/Item";

const itemMock: SearchItem = {
  id: "MLA901421848",
  title: "Apple iPhone 11 (64 Gb) - Negro",
  price: {
    currency: "ARS",
    amount: 154999,
    decimals: 0,
  },
  picture: "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
  free_shipping: true,
  condition: Condition.NEW,
};

describe("<Item/>", () => {
  it("should render free shipping icon if flag free_shipping be true", () => {
    const handleClick = jest.fn();
    const { queryByAltText } = render(
      <Item {...itemMock} onClick={handleClick} />
    );
    expect(queryByAltText(/Envío gratis icon/i)).toBeDefined();
  });

  it("should not render free shipping icon if flag free_shipping be false", () => {
    const item: SearchItem = {
      ...itemMock,
      free_shipping: false,
    };
    const handleClick = jest.fn();
    const { queryByAltText } = render(<Item {...item} onClick={handleClick} />);
    expect(queryByAltText(/Envío gratis icon/i)).toBeNull();
  });

  it("should render <Divider/> component if flag hasDivider be true", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Item {...itemMock} hasDivider onClick={handleClick} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should not render <Divider/> component if flag hasDivider be false", () => {
    const handleClick = jest.fn();
    const { container } = render(<Item {...itemMock} onClick={handleClick} />);
    expect(container).toMatchSnapshot();
  });

  it("should call onClick when component be clicked", async () => {
    const handleClick = jest.fn();
    const { container } = render(<Item {...itemMock} onClick={handleClick} />);
    fireEvent.click(container.firstChild!);
    expect(handleClick).toHaveBeenCalled();
  });
});
