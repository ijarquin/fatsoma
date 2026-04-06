"use client";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { EventSales } from "@/hooks/useEventsSaleData";

import { WEEKDAY_COLOR, WEEKEND_COLOR } from "./chartColors";

const chartConfig = {
  weekday: { label: "Weekday", color: WEEKDAY_COLOR },
  weekend: { label: "Weekend", color: WEEKEND_COLOR },
};

export default function SalesPaceCardChart({
  selected,
}: {
  selected: EventSales;
}) {
  return (
    <CardContent>
      <ChartContainer config={chartConfig} className="h-72 w-full">
        <BarChart data={selected.dailySales}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            vertical={false}
          />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="ticketsSold" radius={[2, 2, 0, 0]}>
            {selected.dailySales.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.isWeekend ? WEEKEND_COLOR : WEEKDAY_COLOR}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
}
