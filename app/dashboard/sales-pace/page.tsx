import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { AnalyticsData } from '@/types'
import SalesPaceDashboard from './SalesPaceDashboard'

async function fetchAnalytics(): Promise<AnalyticsData> {
  const res = await fetch('http://localhost:3000/api/data')
  if (!res.ok) throw new Error('Failed to fetch analytics data')
  return res.json()
}

export default async function SalesPacePage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['analytics'],
    queryFn: fetchAnalytics,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SalesPaceDashboard />
    </HydrationBoundary>
  )
}
