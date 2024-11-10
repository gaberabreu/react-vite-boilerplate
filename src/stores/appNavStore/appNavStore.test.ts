import { renderHook, act } from "@testing-library/react";

import { useAppNavStore } from "./appNavStore";

describe("useAppNavStore", () => {
  it("should initialize with open as false", () => {
    const { result } = renderHook(() => useAppNavStore());

    expect(result.current.open).toBe(false);
  });

  it("should toggle open state", () => {
    const { result } = renderHook(() => useAppNavStore());

    expect(result.current.open).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.open).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.open).toBe(false);
  });
});
