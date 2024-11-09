import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render App", () => {
    const { getByText } = render(<App />);

    const buttonElement = getByText(/App.tsx/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
