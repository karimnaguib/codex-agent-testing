export default function CorporatePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Corporate AI Workshops</h1>
      <p>Contact us for on-site training.</p>
      <form className="flex flex-col gap-2 max-w-sm">
        <input className="border p-2" placeholder="Company" />
        <input className="border p-2" placeholder="Email" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </main>
  )
}
