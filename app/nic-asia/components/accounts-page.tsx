"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

interface AccountsPageProps {
  amount: string
  onAmountChange: (amount: string) => void
  onNavigateToDashboard: () => void
}

export default function AccountsPage({
  amount,
  onAmountChange,
  onNavigateToDashboard,
}: AccountsPageProps) {
  const [inputAmount, setInputAmount] = useState(
    amount.replace("NPR ", "").trim()
  )

  const handleSave = () => {
    const formattedAmount = inputAmount.trim()
      ? `NPR ${inputAmount}`
      : "NPR 1,287.06"
    onAmountChange(formattedAmount)
    onNavigateToDashboard()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="w-full max-w-sm">
        {/* Status Bar */}
        <div className="bg-gray-100 rounded-t-3xl px-6 py-2 flex justify-between items-center text-xs text-gray-600">
          <span>9:23</span>
          <div className="flex gap-1">
            <span>📡</span>
            <span>📊</span>
            <span>🔋 100</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-b from-orange-50 to-white rounded-b-3xl px-6 py-6 min-h-screen">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={onNavigateToDashboard}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Accounts</h1>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                Set Amount
              </label>
              <div className="flex items-center bg-gray-50 border-2 border-gray-300 rounded-xl px-4 py-3">
                <span className="text-gray-600 font-bold mr-2">NPR</span>
                <input
                  type="text"
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 bg-transparent outline-none text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Default: NPR 1,287.06
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-3">
                Current Amount:{" "}
                <span className="font-bold text-gray-800">{amount}</span>
              </p>
            </div>

            {/* Save Button */}
            <Button
              onClick={handleSave}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Save Amount
            </Button>

            {/* Reset to Default */}
            <button
              onClick={() => setInputAmount("1287.06")}
              className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-colors"
            >
              Reset to Default
            </button>
          </div>

          {/* Info Section */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-xs text-blue-800">
              <span className="font-bold">ℹ️ Note:</span> The amount you set
              here will be displayed on your dashboard. Leave empty to use the
              default amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
