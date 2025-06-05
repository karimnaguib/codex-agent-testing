export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold">AI Adventure Retreat</h1>
      <p>Join our journey to master AI tools.</p>
      <nav className="flex gap-4">
        <a href="/webinar" className="underline text-blue-600">
          Free Webinar
        </a>
        <a href="/camp" className="underline text-blue-600">
          Two-Day Camp
        </a>
        <a href="/retreat" className="underline text-blue-600">
          Four-Day Retreat
        </a>
        <a href="/membership" className="underline text-blue-600">
          Membership
        </a>
      </nav>
    </main>
  )
}
