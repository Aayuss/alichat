// app/alichat/page.tsx (Renamed/Moved from app/page.tsx)
"use client"

import { chats } from "@/lib/chat-data"
import { ChevronLeft, Hexagon } from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Import Link
import { useRouter } from "next/navigation"

function getAvatarColor(id: string): string {
  const colors = [
    "bg-green-300",
    "bg-pink-200",
    "bg-yellow-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-blue-300",
    "bg-orange-200",
    "bg-purple-200",
    "bg-blue-300",
  ]
  return colors[parseInt(id) % colors.length]
}

export default function MessagesPage() {
  const router = useRouter()

  const handleChatClick = (chatId: string) => {
    // 💡 Router path changed to be relative to the sub-app root /alichat
    router.push(`/alichat/chat/${chatId}`)
  }

  return (
    <div className="flex flex-col h-screen bg-white md:bg-gray-50">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-200 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* 🚀 Changed to Link/button to go back to the main app launcher */}
            <Link
              href="/"
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
            <h1 className="text-xl font-bold md:text-2xl">
              Messages (AliChat)
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-brush-cleaning-icon lucide-brush-cleaning"
            >
              <path d="m16 22-1-4" />
              <path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1" />
              <path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z" />
              <path d="m8 22 1-4" />
            </svg>
            <Hexagon className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
            className="px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors md:px-6"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0 mt-1">
                {chat.storeIcon === "👩" ? (
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl overflow-hidden">
                    <Image
                      src="/diverse-person-avatars.png"
                      alt={chat.storeName}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl ${getAvatarColor(
                      chat.id
                    )}`}
                  >
                    {chat.storeIcon}
                  </div>
                )}
              </div>

              {/* Chat Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                    {chat.storeName}
                  </h3>
                  <span className="text-xs md:text-sm text-gray-500 ml-2 flex-shrink-0">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm truncate">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
