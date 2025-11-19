"use client"

import { Eye, EyeOff, Home, Send } from "lucide-react"
import { useState } from "react"

interface DashboardPageProps {
  amount: string
  onNavigateToAccounts: () => void
}

export default function DashboardPage({
  amount,
  onNavigateToAccounts,
}: DashboardPageProps) {
  const [isVisible, setIsVisible] = useState(true)

  const formatAmount = (amt: string) => {
    if (!isVisible) {
      return "••••••"
    }
    return amt
  }

  const formatAccountNumber = (num: string) => {
    if (!isVisible) {
      return "XXXXXXXXXXXXXXXX"
    }
    return num
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="w-full max-w-sm">
        {/* Main Content */}
        <div className="bg-linear-to-b from-orange-50 to-white rounded-b-3xl px-4 py-6 min-h-screen pb-32">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex items-center bg-white border-2 border-gray-300 rounded-2xl px-4 py-3">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Account Card */}
          <div className="bg-red-600 rounded-3xl p-6 text-white mb-6 relative overflow-hidden">
            {/* Mountain background decoration */}
            <div className="absolute bottom-0 right-0 opacity-20 text-red-700">
              <svg width="200" height="120" viewBox="0 0 200 120">
                <polygon
                  points="0,100 50,20 100,80 150,10 200,100"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between mb-4">
                <div>
                  {/* Greeting */}
                  <p className="text-sm font-semibold ">Good Evening!</p>

                  {/* Name */}
                  <h2 className="text-xl font-bold ">Aayush Paudel</h2>
                </div>

                {/* Bell Icon */}
                <div className="text-right ">
                  <span className="text-2xl">🔔</span>
                </div>
              </div>

              {/* Account Description */}
              <p className="text-xs font-semibold ">
                New Premium Super Chamatkari Sahaj Bachat Khata
              </p>

              {/* Account Number (Masked) */}
              <p className="text-md ">
                {formatAccountNumber("6145000012340001")}
              </p>

              {/* Amount with Eye Icon */}
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">
                  {formatAmount(amount)}
                </span>
                <button
                  onClick={() => setIsVisible(!isVisible)}
                  className="hover:opacity-80 transition-opacity"
                >
                  {isVisible ? <Eye size={24} /> : <EyeOff size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Promotional Card */}
          <div className="bg-red-600 rounded-3xl p-6 text-white mb-6">
            <div className="text-center">
              <p className="font-bold text-sm mb-1">MoBank Hub Payment</p>
              <p className="text-xs font-semibold mb-2">
                🛫 Flight Tickets सरिद् गर्दा
              </p>
              <p className="font-bold">Cashback पत्काए 💰</p>
            </div>
          </div>

          {/* For You Section */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-bold text-lg mb-4">For You</h3>

            <div className="grid grid-cols-4 gap-3">
              {/* Accounts */}
              <button
                onClick={onNavigateToAccounts}
                className="bg-white border-2 border-red-200 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-red-50 transition-colors"
              >
                <div className="text-red-600 text-2xl">👤</div>
                <span className="text-xs text-gray-700 font-semibold text-center">
                  Accounts
                </span>
              </button>

              {/* Cards */}
              <button className="bg-white border-2 border-red-200 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-red-50 transition-colors">
                <div className="text-red-600 text-2xl">💳</div>
                <span className="text-xs text-gray-700 font-semibold text-center">
                  Cards
                </span>
              </button>

              {/* Mobile Topup */}
              <button className="bg-white border-2 border-red-200 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-red-50 transition-colors">
                <div className="text-red-600 text-2xl">📱</div>
                <span className="text-xs text-gray-700 font-semibold text-center">
                  Mobile
                  <br />
                  Topup
                </span>
              </button>

              {/* Cardless Withdraw */}
              <button className="bg-white border-2 border-red-200 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-red-50 transition-colors">
                <div className="text-red-600 text-2xl">🏧</div>
                <span className="text-xs text-gray-700 font-semibold text-center">
                  Cardless
                  <br />
                  Withdraw
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gray-100 rounded-b-3xl px-6 py-4 flex justify-around items-center border-t border-gray-200 fixed bottom-0 left-0 right-0 max-w-sm mx-auto">
          <button className="flex flex-col items-center gap-1 text-red-600 font-semibold hover:text-red-700 transition-colors">
            <Home size={24} />
            <span className="text-xs">Home</span>
          </button>

          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:bg-red-700 transition-colors">
            ⚡
          </div>

          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-700 transition-colors">
            <Send size={24} />
            <span className="text-xs">Get in Touch</span>
          </button>
        </div>
      </div>
    </div>
  )
}
