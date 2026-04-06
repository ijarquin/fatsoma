export default function Home() {
  return (
    <main className="container">
      <h1>Analytics Dashboard Task</h1>
      <p>
        Build a small analytics dashboard using Next.js and the sample data from
        the API route.
      </p>

      <h2>Task focus</h2>
      <ul>
        <li>Fetch and display data clearly.</li>
        <li>Show at least two meaningful insights or visualizations.</li>
        <li>Add basic filtering by event and/or date range.</li>
        <li>Handle loading, error, and empty states.</li>
      </ul>

      <p>
        API endpoint: <a href="/api/data">/api/data</a>
      </p>
    </main>
  );
}
