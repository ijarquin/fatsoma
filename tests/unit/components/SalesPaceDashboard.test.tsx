import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SalesPaceDashboard from "@/app/dashboard/sales-pace/SalesPaceDashboard";

vi.mock("@/hooks/useEventsSaleData", () => ({
  useEventsSaleData: () => ({
    events: [
      {
        eventId: "evt_1",
        name: "Warehouse Club Night",
        totalTickets: 100,
        dailySales: [],
      },
      {
        eventId: "evt_2",
        name: "Jazz Festival",
        totalTickets: 250,
        dailySales: [],
      },
    ],
    isLoading: false,
    isError: false,
  }),
}));

vi.mock("@/components/sales-pace/SalesPaceCard", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("@/components/sales-pace/SalesPaceCardChart", () => ({
  default: () => null,
}));

vi.mock("@/components/sales-pace/SalesPaceCardLegend", () => ({
  default: () => null,
}));

vi.mock("@/components/sales-pace/SalesPaceCardHeader", () => ({
  default: ({ selected, onEventChange }: any) => (
    <div>
      <span data-testid="selected-name">{selected.name}</span>
      <span data-testid="selected-tickets">{selected.totalTickets}</span>
      <button onClick={() => onEventChange("evt_2")}>
        Select Jazz Festival
      </button>
    </div>
  ),
}));

afterEach(cleanup);

describe("SalesPaceDashboard", () => {
  it("renders the h1 title", () => {
    render(<SalesPaceDashboard />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Sales Pace",
    );
  });

  it("renders the description", () => {
    render(<SalesPaceDashboard />);
    expect(
      screen.getByText(
        "When do tickets sell — early on or close to the event?",
      ),
    ).toBeInTheDocument();
  });

  describe("event selection", () => {
    it("displays the first event by default", () => {
      render(<SalesPaceDashboard />);
      expect(screen.getByTestId("selected-name")).toHaveTextContent(
        "Warehouse Club Night",
      );
      expect(screen.getByTestId("selected-tickets")).toHaveTextContent("100");
    });

    it("updates the card header when a different event is selected", async () => {
      render(<SalesPaceDashboard />);
      await userEvent.click(
        screen.getByRole("button", { name: "Select Jazz Festival" }),
      );
      expect(screen.getByTestId("selected-name")).toHaveTextContent(
        "Jazz Festival",
      );
      expect(screen.getByTestId("selected-tickets")).toHaveTextContent("250");
    });
  });
});
