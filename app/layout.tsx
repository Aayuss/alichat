import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AliChat",
  description: "AliExpress Chat Helper by AliBaba Company",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  generator: "com.alibaba.AliChat",
  manifest: "/manifest.json",
  themeColor: "#ec4899",
  icons: {
    icon: "/logo.png", // Default favicon
    apple: "/logo.png", // Apple touch icon (for iOS "Add to Home Screen")
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
