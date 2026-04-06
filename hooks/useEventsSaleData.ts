import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

interface RawEvent {
  id: string;
  name: string;
}

interface RawSale {
  eventId: string;
  date: string;
  ticketsSold: number;
}

export interface EventSales {
  eventId: string;
  name: string;
  totalTickets: number;
  dailySales: { label: string; ticketsSold: number; isWeekend: boolean }[];
}

function processEvents(events: RawEvent[], sales: RawSale[]): EventSales[] {
  return events.map((event) => {
    const dailySales = sales
      .filter((s) => s.eventId === event.id)
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((s) => {
        const date = new Date(s.date);
        return {
          label: date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          }),
          ticketsSold: s.ticketsSold,
          isWeekend: date.getUTCDay() === 0 || date.getUTCDay() === 6,
        };
      });

    return {
      eventId: event.id,
      name: event.name,
      totalTickets: dailySales.reduce((sum, d) => sum + d.ticketsSold, 0),
      dailySales,
    };
  });
}

export function useEventsSaleData() {
  const { data, isLoading, isError } = useQuery<{
    events: RawEvent[];
    sales: RawSale[];
  }>({
    queryKey: ["tickets-data"],
    queryFn: () => fetch("/api/data").then((r) => r.json()),
  });

  const events = useMemo(
    () => processEvents(data?.events ?? [], data?.sales ?? []),
    [data],
  );

  return { events, isLoading, isError };
}
