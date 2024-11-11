import { describe, expect, it } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

import DashboardIcon from "@mui/icons-material/Dashboard";

import SubMenu from "./SubMenu";
import { SideBarContext } from "../SideBarContext";

describe("SubMenu", () => {
  it("should render text and icon properly", () => {
    const { getByText, getByTestId } = render(
      <SideBarContext.Provider value={{ open: true }}>
        <SubMenu
          text="Test Item"
          icon={<DashboardIcon />}
        />
      </SideBarContext.Provider>
    );

    expect(getByText("Test Item")).toBeInTheDocument();
    expect(getByTestId("DashboardIcon")).toBeInTheDocument();
  });

  it("should render children when sidebar open and sub open", () => {
    const { getByText, queryByText, getByTestId } = render(
      <SideBarContext.Provider value={{ open: true }}>
        <SubMenu
          text="Test Item"
          icon={<DashboardIcon />}
        >
          SubMenu Content
        </SubMenu>
      </SideBarContext.Provider>
    );

    expect(queryByText("SubMenu Content")).not.toBeInTheDocument();
    expect(getByTestId("ExpandMoreIcon")).toBeInTheDocument();

    fireEvent.click(getByText("Test Item"));

    expect(getByText("SubMenu Content")).toBeInTheDocument();
    expect(getByTestId("ExpandLessIcon")).toBeInTheDocument();
  });

  it("should render children when sidebar collapsed and sub open", async () => {
    const { getByText, queryByText } = render(
      <SideBarContext.Provider value={{ open: false }}>
        <SubMenu
          text="Test Item"
          icon={<DashboardIcon />}
        >
          SubMenu Content
        </SubMenu>
      </SideBarContext.Provider>
    );

    expect(queryByText("SubMenu Content")).not.toBeInTheDocument();

    fireEvent.click(getByText("Test Item"));

    expect(getByText("SubMenu Content")).toBeInTheDocument();

    fireEvent.click(getByText("Test Item"));

    await waitFor(() => expect(queryByText("SubMenu Content")).not.toBeInTheDocument());
  });
});
