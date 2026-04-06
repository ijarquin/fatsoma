export type Event = {
  id: string;
  name: string;
  city: string;
  startsAt: string;
};

export type SalePoint = {
  eventId: string;
  date: string;
  ticketsSold: number;
};

export type ViewPoint = {
  eventId: string;
  date: string;
  views: number;
};

export type AnalyticsData = {
  events: Event[];
  sales: SalePoint[];
  views: ViewPoint[];
};
