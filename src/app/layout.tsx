import type { Metadata } from 'next'

import '@/shared/globals.scss'

export const metadata: Metadata = {
  title: 'GCS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
