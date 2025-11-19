"use client"

import DashboardPage from "@/app/nic-asia/components/dashboard-page"
import LoginPage from "@/app/nic-asia/components/login-page"
import { useState } from "react"
import AccountsPage from "./components/accounts-page"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState<"dashboard" | "accounts">(
    "dashboard"
  )
  const [amount, setAmount] = useState("NPR 1,287.06")

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleNavigateToAccounts = () => {
    setCurrentPage("accounts")
  }

  const handleNavigateToDashboard = () => {
    setCurrentPage("dashboard")
  }

  const handleAmountChange = (newAmount: string) => {
    setAmount(newAmount)
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  if (currentPage === "accounts") {
    return (
      <AccountsPage
        amount={amount}
        onAmountChange={handleAmountChange}
        onNavigateToDashboard={handleNavigateToDashboard}
      />
    )
  }

  return (
    <DashboardPage
      amount={amount}
      onNavigateToAccounts={handleNavigateToAccounts}
    />
  )
}
