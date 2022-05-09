import { renderHook, waitFor } from "@testing-library/react";
import { useCalendar } from "./useCalendar";

describe("useCalendar", () => {

  beforeEach(async () => {
  });

  it("should get calendar", async () => {
    const { result } = renderHook(() => useCalendar());
    const { calendar } = result.current;
    await waitFor(() => expect(calendar).toBeUndefined());
  });
});
