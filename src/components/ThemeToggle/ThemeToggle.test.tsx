import { render, fireEvent } from "@testing-library/react";

import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("should call toggle function when button is clicked", () => {
    const { getByLabelText, getByTestId } = render(<ThemeToggle />);

    const button = getByLabelText("toggle theme");
    expect(getByTestId("DarkModeIcon")).toBeInTheDocument();

    fireEvent.click(button);
    expect(getByTestId("LightModeIcon")).toBeInTheDocument();

    fireEvent.click(button);
    expect(getByTestId("DarkModeIcon")).toBeInTheDocument();
  });
});
