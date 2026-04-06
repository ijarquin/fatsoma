import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SalesPaceDashboard from '@/app/dashboard/sales-pace/SalesPaceDashboard'

function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  )
}

describe('SalesPaceDashboard', () => {
  it('renders the h1 title', () => {
    render(<SalesPaceDashboard />, { wrapper })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sales Pace')
  })

  it('renders the description', () => {
    render(<SalesPaceDashboard />, { wrapper })
    expect(screen.getByText('When do tickets sell — early on or close to the event?')).toBeInTheDocument()
  })
})
