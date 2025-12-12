"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import type { Geist, Playfair_Display } from "next/font/google"

export default function RootClientLayout({
  children,
  geist,
  playfair,
}: Readonly<{
  children: React.ReactNode
  geist: ReturnType<typeof Geist>
  playfair: ReturnType<typeof Playfair_Display>
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        <style jsx global>{`
          .font-serif {
            font-family: var(--font-serif), serif;
          }
        `}</style>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
