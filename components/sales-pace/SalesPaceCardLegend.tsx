export default function SalesPaceCardLegend() {
  return (
    <div className="flex gap-4 px-4 pb-2 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <span
          className="inline-block w-3 h-3 rounded-sm"
          style={{ background: "var(--chart-1)" }}
        />
        Weekday
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="inline-block w-3 h-3 rounded-sm"
          style={{ background: "var(--chart-2)" }}
        />
        Weekend
      </span>
    </div>
  );
}
