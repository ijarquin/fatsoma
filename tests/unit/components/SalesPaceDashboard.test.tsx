import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import SalesPaceDashboard from '@/app/dashboard/sales-pace/SalesPaceDashboard'

vi.mock('@/hooks/useEventsSaleData', () => ({
  useEventsSaleData: () => ({
    events: [{ eventId: 'evt_1', name: 'Warehouse Club Night', totalTickets: 100, dailySales: [] }],
    isLoading: false,
    isError: false,
  }),
}))

vi.mock('@/components/sales-pace/SalesPaceCard', () => ({ default: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }))
vi.mock('@/components/sales-pace/SalesPaceCardHeader', () => ({ default: () => null }))

describe('SalesPaceDashboard', () => {
  it('renders the h1 title', () => {
    render(<SalesPaceDashboard />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sales Pace')
  })

  it('renders the description', () => {
    render(<SalesPaceDashboard />)
    expect(screen.getByText('When do tickets sell — early on or close to the event?')).toBeInTheDocument()
  })
})
