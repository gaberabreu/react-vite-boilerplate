import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import AppBar from "./AppBar";

describe("AppBar", () => {
  it("should render children properly", () => {
    const { getByText } = render(<AppBar>Test Content</AppBar>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
