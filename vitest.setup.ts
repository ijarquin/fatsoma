import '@testing-library/jest-dom'

vi.stubGlobal('fetch', vi.fn())

vi.stubGlobal(
  'ResizeObserver',
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
)
