import { WEEKDAY_COLOR, WEEKEND_COLOR } from "./chartColors";

export default function SalesPaceCardLegend() {
  return (
    <div className="flex gap-4 px-4 pb-2 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <span
          className="inline-block w-3 h-3 rounded-sm"
          style={{ background: WEEKDAY_COLOR }}
        />
        Weekday
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="inline-block w-3 h-3 rounded-sm"
          style={{ background: WEEKEND_COLOR }}
        />
        Weekend
      </span>
    </div>
  );
}
