import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NIC ASIA MoBank",
  description: "NIC ASIA MoBank Mobile Banking Application",
  generator: "com.aayuss.apps",
  icons: {
    icon: "/nic-asia-logo.jpg",
    apple: "/nic-asia-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
