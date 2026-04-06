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