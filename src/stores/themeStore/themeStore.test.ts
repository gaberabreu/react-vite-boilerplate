import { renderHook, act } from "@testing-library/react";

import { useThemeStore } from "./themeStore";

describe("useThemeStore", () => {
  it("should initialize with isDarkMode as false", () => {
    const { result } = renderHook(() => useThemeStore());

    expect(result.current.isDarkMode).toBe(false);
  });

  it("should toggle isDarkMode state", () => {
    const { result } = renderHook(() => useThemeStore());

    expect(result.current.isDarkMode).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isDarkMode).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isDarkMode).toBe(false);
  });
});
