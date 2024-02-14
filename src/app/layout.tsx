import type { Metadata } from 'next'

import Header from '@/components/Header'

import '@/shared/globals.scss'

export const metadata: Metadata = {
  title: 'GCS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-[60px]">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  )
}
