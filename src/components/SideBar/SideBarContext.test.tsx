import { describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";

import { SideBarContext, useSideBarContext } from "./SideBarContext";

describe("useSideBarContext", () => {
  it("should return context value when inside provider", () => {
    const { result } = renderHook(() => useSideBarContext(), {
      wrapper: ({ children }) => (
        <SideBarContext.Provider value={{ open: true }}>{children}</SideBarContext.Provider>
      ),
    });

    expect(result.current.open).toBe(true);
  });

  it("should throw an error when used without a provider", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useSideBarContext())).toThrowError(
      "useSideBarContext must be used within an SideBarContext.Provider"
    );
    consoleErrorSpy.mockRestore();
  });
});
