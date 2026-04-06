'use client'

import { useQuery } from '@tanstack/react-query'
import type { AnalyticsData } from '@/types'

async function fetchAnalytics(): Promise<AnalyticsData> {
  const res = await fetch('/api/data')
  if (!res.ok) throw new Error('Failed to fetch analytics data')
  return res.json()
}

export default function SalesPaceDashboard() {
  const { data } = useQuery({
    queryKey: ['analytics'],
    queryFn: fetchAnalytics,
  })

  return (
    <main className="w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <h1 className="text-2xl font-bold mb-1">Sales Pace</h1>
        <p className="text-muted-foreground text-sm mb-8">
          When do tickets sell — early on or close to the event?
        </p>
      </div>
    </main>
  )
}
