# Analytics Dashboard Task

This is a minimal Next.js starter project for a coding task.

This repo intentionally includes only:

- TypeScript + Next.js App Router
- One API route at /api/data with mock analytics data
- A simple landing page at /
- Small shared types for the data model

No charting libraries, UI frameworks, auth, database, or state libraries are included.

---

## Task Brief

Build a small analytics dashboard using Next.js.

The dataset includes:

- Events
- Ticket sales over time
- Page views / engagement data

### Your task

- Fetch and display the data in a clear, usable way
- Present at least **two meaningful insights or visualisations**
- Implement **basic filtering** (for example: by event or date range)
- Handle **loading, error, and empty states**
- Consider how your approach would scale to larger datasets and frequent updates
- You may choose to use server components, client components, or a mix, depending on what you think is appropriate.

You are free to structure the application however you think is appropriate.

---

## How to Use This Repo

Please use this repository as a starting point:

- Click **“Use this template”** on GitHub to create your own copy of this repository (this creates a new repo, not a fork)
- Complete the task in your own repository
- Push your changes and share the repository link with us before your interview

---

## Quick Start

Node.js 20+ is recommended.

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

4. Test the API:

```bash
curl http://localhost:3000/api/data
```

## Expectations

We are not looking for pixel-perfect UI. We are interested in:

- How you structure a React / Next.js application
- How you handle asynchronous data and state
- How you make data understandable and useful
- Your approach to performance and future scalability
- Your ability to make sensible tradeoffs in limited time

Assume this dashboard may need to scale over time.

---

## README

Please include a short README in your submission covering:

- Your approach and key decisions
- Any assumptions you made
- Any tradeoffs you made
- What you would improve with more time

---

## Libraries

You are free to use any libraries you think are appropriate.

We recommend keeping dependencies minimal and choosing tools that help you move quickly without adding unnecessary complexity.

You may use UI/component libraries if they help you focus on data work rather than UI plumbing.
You do not need to build chart primitives from scratch.
Prefer simple, readable implementations over heavy setup.

If you are unsure where to start, you may optionally use:

- [Tailwind CSS](https://tailwindcss.com/) (for styling)
- [shadcn/ui](https://ui.shadcn.com/) (for simple UI components)

---

## Expected Time

We expect this task to take around **2–3 hours**.

Please don’t spend significantly longer than this. We understand you may not complete everything in this time, and we can discuss further improvements during the interview.

---

## Submission

### Approach and key decisions

The dashboard is built around a single page — **Sales Pace** — which answers the question: when do tickets sell relative to the event date?

The data flow follows a server-first pattern. `page.tsx` is a React Server Component that prefetches the analytics data using TanStack Query’s `prefetchQuery`, dehydrates the cache, and passes it to a `HydrationBoundary`. The client component (`SalesPaceDashboard`) then rehydrates that cache with `useQuery`, meaning data is available on first render with no loading flash.

Data transformation is kept out of the component layer. `useEventsSaleData` is a dedicated hook that maps raw API events and sales into a derived `EventSales[]` shape — grouping daily sales per event, computing totals, and flagging weekends. This keeps the components purely presentational and makes the transformation logic independently testable.

For the UI, shadcn/ui components (Card, Select) handle the structure and Recharts handles the bar chart. Tailwind v4 is used for layout and spacing.

### Assumptions

The routing and component structure is designed so additional dashboard pages could be added under `/dashboard/` without rework.

- Server-side prefetching is the right default for this kind of read-heavy dashboard — it avoids a loading spinner on every page visit and keeps the data fetch close to the source.

### Tradeoffs

- the main tradeoff was not adding a second visualisation dashboard, I thought that I would rather fully complete one rather than leave two half finish dashboards.

- I decided not to add Playwright for e2e testing due to the time constraint and also the fact that I didnt identify any critical part which is what I would usually write and end to end test.

- Error and Loading state are pretty simple, with more time I could have added sckeleton loading and perhaps use a proper error boundary component with retry logic.

- Better test coverage.

### What I would improve with more time

- **A second visualisation** — the dataset includes page view data which would pair well with sales as an engagement-to-conversion chart.
- **Error and loading states** — skeleton loaders for the card and a proper error boundary with a retry action.
- **Responsive website** the application currently is just designed for desktop and would benefit from mobile-first responsive breakpoints and touch-friendly interactions.
- **Accessibility** — the chart currently has no ARIA labels or keyboard navigation for the event selector beyond what the browser provides natively.
- **Broader test coverage** — unit tests cover the hook transformation logic and the dashboard component, but there are no tests for `SalesPaceCardChart` or `SalesPaceCardHeader` and no integration tests covering the full server prefetch → hydration flow and also the adition to e2e test suite using Playwright.
