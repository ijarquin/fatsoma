import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, cleanup } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { useEventsSaleData } from "@/hooks/useEventsSaleData";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
  useMemo: vi.fn(),
}));

afterEach(cleanup);

function mockQuery(overrides: object) {
  vi.mocked(useQuery).mockReturnValue({
    data: undefined,
    isLoading: false,
    isError: false,
    ...overrides,
  } as any);
}

describe("useSalesPaceData", () => {
  it("returns isLoading true and empty events while fetching", () => {
    mockQuery({ isLoading: true });

    const { result } = renderHook(() => useEventsSaleData());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.events).toEqual([]);
  });

  it("returns isError true and empty events when the fetch fails", () => {
    mockQuery({ isError: true });

    const { result } = renderHook(() => useEventsSaleData());

    expect(result.current.isError).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.events).toEqual([]);
  });

  it("returns processed events when data is available", () => {
    mockQuery({
      data: {
        events: [{ id: "evt_1", name: "Warehouse Club Night" }],
        sales: [{ eventId: "evt_1", date: "2026-03-27", ticketsSold: 100 }],
      },
    });

    const { result } = renderHook(() => useEventsSaleData());

    expect(result.current.events).toHaveLength(1);
    expect(result.current.events[0].eventId).toBe("evt_1");
    expect(result.current.events[0].name).toBe("Warehouse Club Night");
  });

  it("computes the total tickets sold per event", () => {
    mockQuery({
      data: {
        events: [{ id: "evt_1", name: "Warehouse Club Night" }],
        sales: [
          { eventId: "evt_1", date: "2026-03-27", ticketsSold: 80 },
          { eventId: "evt_1", date: "2026-03-28", ticketsSold: 120 },
        ],
      },
    });

    const { result } = renderHook(() => useEventsSaleData());

    expect(result.current.events[0].totalTickets).toBe(200);
  });

  it("sorts daily sales by date ascending", () => {
    mockQuery({
      data: {
        events: [{ id: "evt_1", name: "Warehouse Club Night" }],
        sales: [
          { eventId: "evt_1", date: "2026-03-29", ticketsSold: 30 },
          { eventId: "evt_1", date: "2026-03-27", ticketsSold: 10 },
          { eventId: "evt_1", date: "2026-03-28", ticketsSold: 20 },
        ],
      },
    });

    const { result } = renderHook(() => useEventsSaleData());
    const labels = result.current.events[0].dailySales.map(
      (d) => d.ticketsSold,
    );

    expect(labels).toEqual([10, 20, 30]);
  });
});
