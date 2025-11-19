import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Update metadata to reflect the main PWA wrapper app name
export const metadata: Metadata = {
  title: "Crafted WebApps",
  description: "It is a wrapper for other apps I created",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  generator: "com.aayuss.apps",
  // PWA manifest and icons for the main portal app
  manifest: "/manifest.json",
  themeColor: "#ec4899",
  icons: {
    icon: "/logo.png", // Main Portal Icon
    apple: "/logo.png", // Apple touch icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
