import { describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";

import DynamicSideBar from "./DynamicSideBar";

describe("DynamicSideBar", () => {
  it("should render menuSubHeader element properly", () => {
    const { getByText } = render(
      <DynamicSideBar
        elements={[
          {
            key: "menuSubHeader-2",
            kind: "menuSubHeader",
            text: "Analytics",
          },
        ]}
      />
    );

    const element = getByText("Analytics");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("MuiListSubheader-root");
  });

  it("should render subMenu element and its subElements properly", () => {
    const { getByText } = render(
      <DynamicSideBar
        elements={[
          {
            key: "subMenu-1",
            kind: "subMenu",
            text: "Reports",
            icon: <DashboardIcon />,
            subElements: [
              {
                key: "menuLink-1",
                kind: "menuLink",
                icon: <DescriptionIcon />,
                text: "Sales",
                to: "/reports/sales",
              },
            ],
          },
        ]}
      />
    );

    const element = getByText("Reports");
    expect(element).toBeInTheDocument();
    expect(element.parentElement).toHaveClass("MuiListItemText-root");
    fireEvent.click(element);

    const subElement = getByText("Sales").parentElement;
    expect(subElement).toBeInTheDocument();
    expect(subElement).toHaveClass("MuiListItemText-root");
  });

  it("should render menuLink element properly", () => {
    const { getByText } = render(
      <DynamicSideBar
        elements={[
          {
            key: "menuLink-1",
            kind: "menuLink",
            icon: <DescriptionIcon />,
            text: "Sales",
            to: "/reports/sales",
          },
        ]}
      />
    );

    const element = getByText("Sales").parentElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("MuiListItemText-root");
  });

  it("should render divider element properly", () => {
    const { container } = render(
      <DynamicSideBar
        elements={[
          {
            key: "divider-1",
            kind: "divider",
          },
        ]}
      />
    );

    const element = container.querySelector("hr");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("MuiDivider-root");
  });
});
