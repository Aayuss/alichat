// app/page.tsx (Updated to make icons fill the square container)
"use client"

import { Hexagon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Define your sub-applications here
const apps = [
  {
    name: "AliChat",
    description: "AliExpress Chat Helper",
    iconPath: "/alichat-logo.png", // Example path for AliChat icon
    href: "/alichat",
    bgColor: "bg-pink-300",
  },
  {
    name: "NIC ASIA MoBank",
    description: "NIC ASIA Mobile Banking App",
    iconPath: "/nic-asia-logo.jpg", // Example path for AliChat icon
    href: "/nic-asia",
    bgColor: "bg-red-300",
  },
]

export default function AppLauncher() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Centered Main Wrapper Area */}
      <div className="mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Header - "Apps" Title */}
        <header className="mb-8 md:mb-12 pt-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
              Apps
            </h1>
            <Hexagon className="w-8 h-8 text-gray-700" />
          </div>
        </header>

        <hr className="mb-10 border-gray-200" />

        {/* App Grid (App Drawer Style) */}
        <main className="flex-1">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4">
            {apps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="flex flex-col items-center justify-start text-center group"
              >
                {/* 1. Square Icon Area (Relative, Overflow Hidden) */}
                <div
                  className={`
                    w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
                    rounded-2xl shadow-md 
                    relative overflow-hidden 
                    transition-transform group-hover:scale-105
                    ${app.bgColor}
                `}
                >
                  {/* Icon - Uses 'fill' to cover the parent div */}
                  <Image
                    src={app.iconPath}
                    alt={`${app.name} Icon`}
                    fill
                    sizes="(max-width: 768px) 64px, (max-width: 1200px) 80px, 96px"
                    // 🚨 key change: object-cover makes the image fill and clip, object-contain would shrink it
                    className="object-cover"
                  />
                </div>

                {/* 2. App Name */}
                <p className="mt-2 text-sm md:text-base font-medium text-gray-800 truncate max-w-full">
                  {app.name}
                </p>

                {/* Optional: App Description (Hidden on small screen for cleaner look) */}
                <p className="hidden text-xs text-gray-500 sm:block">
                  {app.description.split(" ")[0]}
                </p>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
