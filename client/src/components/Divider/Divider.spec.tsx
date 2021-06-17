import { render } from "@testing-library/react";
import Divider from "components/Divider/Divider";

describe("<Divider/>", () => {
  it("should match snapshot", () => {
    const { container } = render(<Divider />);
    expect(container).toMatchSnapshot();
  });
});
