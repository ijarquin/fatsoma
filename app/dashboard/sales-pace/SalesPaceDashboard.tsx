"use client";

import { useState } from "react";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import SalesPaceCard from "@/components/sales-pace/SalesPaceCard";
import SalesPaceCardHeader from "@/components/sales-pace/SalesPaceCardHeader";
import SalesPaceCardChart from "@/components/sales-pace/SalesPaceCardChart";
import SalesPaceCardLegend from "@/components/sales-pace/SalesPaceCardLegend";
import { useEventsSaleData } from "@/hooks/useEventsSaleData";

export default function SalesPaceDashboard() {
  const { events, isLoading, isError } = useEventsSaleData();
  const [selectedEventId, setSelectedEventId] = useState<string>("");

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  const selected =
    events.find((e) => e.eventId === selectedEventId) ?? events[0];

  if (!selected) return null;

  return (
    <main className="w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <h1 className="text-2xl font-bold mb-1">Sales Pace</h1>
        <p className="text-muted-foreground text-sm mb-8">
          When do tickets sell — early on or close to the event?
        </p>
        <SalesPaceCard>
          <SalesPaceCardHeader
            events={events}
            selected={selected}
            selectedEventId={selectedEventId}
            onEventChange={setSelectedEventId}
          />
          <SalesPaceCardLegend />
          <SalesPaceCardChart selected={selected} />
        </SalesPaceCard>
      </div>
    </main>
  );
}
