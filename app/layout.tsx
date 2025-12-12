import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"
import RootClientLayout from "./RootClientLayout"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Test Your Knowledge - Interactive Quiz App",
  description: "Test your knowledge with our interactive quiz application. Answer questions and see your results!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootClientLayout geist={geist} playfair={playfair}>
      {children}
    </RootClientLayout>
  )
}
