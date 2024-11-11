import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import SideBar from "./SideBar";

describe("SideBar", () => {
  it("should render children properly", () => {
    const { getByText } = render(<SideBar>Test Content</SideBar>);

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("should render children properly when opened", () => {
    const { getByText } = render(<SideBar open>Test Content</SideBar>);

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("should render children properly when mobile", () => {
    const { getByText } = render(<SideBar>Test Content</SideBar>);

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("should render children properly when mobile and opened", () => {
    const { getByText } = render(
      <SideBar
        open
        mobile
      >
        Test Content
      </SideBar>
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
