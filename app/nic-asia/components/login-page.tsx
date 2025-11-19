"use client"

import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface LoginPageProps {
  onLogin: () => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isRemembered, setIsRemembered] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="w-full max-w-sm">
        {/* Main Content */}
        <div className="bg-gradient-to-b from-orange-50 to-white rounded-b-3xl px-6 py-8 min-h-screen">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <div
                className={`
                    w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
                    rounded-2xl shadow-md 
                    relative overflow-hidden 
                    transition-transform group-hover:scale-105
                `}
              >
                {/* Icon - Uses 'fill' to cover the parent div */}
                <Image
                  src="/nic-asia-logo.jpg"
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 64px, (max-width: 1200px) 80px, 96px"
                  // 🚨 key change: object-cover makes the image fill and clip, object-contain would shrink it
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">NIC ASIA</h1>
            <h2 className="text-2xl font-bold text-gray-800">MoBank</h2>
            <p className="text-xs text-gray-600 mt-1">साइको पैसा नी ।</p>
          </div>

          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Welcome</h3>
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <div className="flex items-center bg-white border-2 border-gray-300 rounded-2xl px-4 py-3">
              <span className="text-red-600 text-lg mr-2">🇳🇵</span>
              <input
                type="tel"
                defaultValue="+977 9866629691"
                className="flex-1 bg-transparent outline-none text-gray-800 font-medium placeholder-gray-400"
                disabled
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <div className="flex items-center bg-white border-2 border-gray-300 rounded-2xl px-4 py-3">
              <span className="text-lg mr-2">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="123456789"
                className="flex-1 bg-transparent outline-none text-gray-800 font-medium placeholder-gray-400"
                disabled
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              id="remember"
              checked={isRemembered}
              onChange={(e) => setIsRemembered(e.target.checked)}
              className="w-5 h-5 accent-red-600 cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <Button
            onClick={onLogin}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-3xl text-lg mb-6 transition-colors"
          >
            Login
          </Button>

          {/* Additional Options */}
          <div className="space-y-3 text-center">
            <button className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors flex items-center justify-center gap-2">
              👆 Tap to Login with Biometric
            </button>
            <button className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors flex items-center justify-center gap-2">
              ❓ Unable To Login?
            </button>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-gray-800 font-bold text-center mb-4">
              Start Your Journey with NIC ASIA MoBank
            </h4>

            <div className="space-y-3">
              <div className="bg-gray-50 rounded-2xl p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <h5 className="font-bold text-gray-800 mb-1">
                  Open a Lite Account
                </h5>
                <p className="text-xs text-gray-600">
                  Access our services in few steps
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <h5 className="font-bold text-gray-800 mb-1">Security Tips</h5>
                <p className="text-xs text-gray-600">
                  Enhance your digital security with our
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
