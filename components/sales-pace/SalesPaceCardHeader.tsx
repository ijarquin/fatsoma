import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { EventSales } from "@/hooks/useEventsSaleData";

interface Props {
  events: EventSales[];
  selected: EventSales;
  selectedEventId: string;
  onEventChange: (id: string) => void;
}

export default function SalesPaceCardHeader({
  events,
  selected,
  selectedEventId,
  onEventChange,
}: Props) {
  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle className="text-base">{selected.name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-0.5">
          {selected.totalTickets.toLocaleString()} tickets sold
        </p>
      </div>
      <Select
        value={selectedEventId || selected.eventId}
        onValueChange={(v) => v && onEventChange(v)}
      >
        <SelectTrigger className="w-48 h-8 text-sm">
          <SelectValue>
            {
              events.find(
                (e) => e.eventId === (selectedEventId || selected.eventId),
              )?.name
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {events.map((e) => (
            <SelectItem key={e.eventId} value={e.eventId}>
              {e.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </CardHeader>
  );
}
