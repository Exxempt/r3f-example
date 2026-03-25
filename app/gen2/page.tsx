'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [value, setValue] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    router.push(`/gen2/${value}`)
  }

  return (
    <section className="flex flex-col items-center justify-center h-[60vh] gap-4">
      <h1 className="font-bold text-2xl tracking-tighter">Enter monke #</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="number"
          min="0"
          inputMode="numeric"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. 123"
          className="border px-3 py-2 rounded [appearance:textfield]"
          style={{ MozAppearance: 'textfield' }}
          onWheel={(e) => (e.target as HTMLInputElement).blur()}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Go
        </button>
      </form>
    </section>
  )
}
