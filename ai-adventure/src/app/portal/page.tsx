import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'

export default async function PortalPage() {
  const session = await auth()
  if (!session) redirect('/')

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Member Portal</h1>
      <p>Gated content placeholder.</p>
    </main>
  )
}
