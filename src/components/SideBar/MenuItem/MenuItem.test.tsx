import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import MenuItem from "./MenuItem";

describe("MenuItem", () => {
  it("should render text, icon and suffix properly", () => {
    const { getByText, getByTestId } = render(
      <MenuItem
        icon={<DashboardIcon />}
        text="Test Item"
        suffix={<ExpandLessIcon />}
      />
    );

    expect(getByText("Test Item")).toBeInTheDocument();
    expect(getByTestId("DashboardIcon")).toBeInTheDocument();
    expect(getByTestId("ExpandLessIcon")).toBeInTheDocument();
  });
});
