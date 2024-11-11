import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import MenuLink from "./MenuLink";

describe("MenuLink", () => {
  it("should render as an anchor", () => {
    const { container } = render(<MenuLink to="https://example.com" />);

    const linkElement = container.firstChild?.firstChild;
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });
});
