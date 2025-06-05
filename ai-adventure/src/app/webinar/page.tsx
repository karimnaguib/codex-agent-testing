'use client'

import { useState } from 'react'
import { trpc } from '@/utils/trpc'

export default function WebinarPage() {
  const [email, setEmail] = useState('')
  const utils = trpc.useContext()
  const register = trpc.lead.registerWebinar.useMutation({
    onSuccess: () => setEmail(''),
  })

  return (
    <main className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Free AI Tool Mastery Webinar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          register.mutate({ email })
        }}
        className="flex gap-2"
      >
        <input
          type="email"
          required
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {register.isLoading ? 'Sending...' : 'Register'}
        </button>
      </form>
      {register.isSuccess && <p>Check your inbox for details!</p>}
    </main>
  )
}
