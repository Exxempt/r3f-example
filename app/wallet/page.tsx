'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function WalletPage() {
  const [value, setValue] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedValue = value.trim()
    if (!trimmedValue) return
    router.push(`/wallet/${trimmedValue}`)
  }

  return (
    <section className="flex flex-col items-center justify-center h-[60vh] gap-4">
      <h1 className="font-bold text-2xl tracking-tighter text-center">
        Enter wallet address
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-2xl px-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Paste Solana wallet address"
          className="flex-1 border px-3 py-2 rounded"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          autoFocus
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