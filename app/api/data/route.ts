import sampleData from "@/data/sample-data.json";
import type { AnalyticsData } from "@/types";

export function GET() {
  const data: AnalyticsData = sampleData;
  return Response.json(data);
}
