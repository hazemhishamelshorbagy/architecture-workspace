'use client'
import { useEffect } from 'react'
type ErrorProps = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}
export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div role="alert">
      <p>Something went wrong.</p>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  )
}