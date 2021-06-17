import { render } from "@testing-library/react";
import { Logo } from "components/Logo/Logo";

describe("Logo", () => {
  it("should match snpashot", () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });
});
