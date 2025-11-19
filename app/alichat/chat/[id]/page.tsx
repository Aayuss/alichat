"use client"

import { chats, Message } from "@/lib/chat-data"
import {
  ChevronLeft,
  MoreVertical,
  Plus,
  Share2,
  Smile,
  Star,
} from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

// --- Helper Functions (Defined here for scope) ---
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

// Placeholder for date formatting
function formatDate(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

// Placeholder for time formatting
function formatTime(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
}
// ---------------------------------------------------

// --- StarRating Component ---
const StarRating: React.FC<{
  initialRating?: number
  onRate: (rating: number) => void
}> = ({ initialRating = 0, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0)
  const [confirmedRating, setConfirmedRating] = useState(initialRating)
  const [isLocked, setIsLocked] = useState(false)

  const handleClick = (rating: number) => {
    if (isLocked) return

    setConfirmedRating(rating)
    setIsLocked(true)
    onRate(rating)
  }

  const currentRating = hoverRating || confirmedRating

  return (
    <div className="flex items-center justify-center p-4">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <Star
          key={starValue}
          className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${
            !isLocked ? "cursor-pointer" : "cursor-default"
          } ${
            starValue <= currentRating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          }`}
          onMouseEnter={() => !isLocked && setHoverRating(starValue)}
          onMouseLeave={() => !isLocked && setHoverRating(0)}
          onClick={() => handleClick(starValue)}
        />
      ))}
    </div>
  )
}

// --- Main ChatPage Component ---
export default function ChatPage() {
  const params = useParams()
  const router = useRouter()
  const chatId = params.id as string
  const [confirmedRatingValue, setConfirmedRatingValue] = useState<
    number | null
  >(null)

  const initialChat = useMemo(
    () => chats.find((c) => c.id === chatId),
    [chatId]
  )

  const [chat, setChat] = useState(initialChat)
  const [messages, setMessages] = useState<Message[]>(
    initialChat?.messages || []
  )
  const [input, setInput] = useState("")

  const [showRatingPrompt, setShowRatingPrompt] = useState(false)
  const [hasRated, setHasRated] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender !== "user" &&
      !hasRated
    ) {
      setShowRatingPrompt(true)
    } else {
      setShowRatingPrompt(false)
    }
  }, [messages, hasRated])

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: `m${Date.now()}`,
        sender: "user",
        content: input,
        timestamp: new Date().toISOString(),
      }
      setMessages([...messages, newMessage])
      setInput("")
      setShowRatingPrompt(false)
    }
  }

  const handleRatingConfirmed = (rating: number) => {
    setConfirmedRatingValue(rating)
    setHasRated(true)
    setShowRatingPrompt(false)
    console.log(`Rating Confirmed: ${rating} stars.`)
  }

  if (!chat) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Chat not found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white border-x w-screen overflow-hidden">
      {/* Header (No change) */}
      <div className="px-4 py-3 border-b border-gray-200 bg-white md:px-6 w-screen">
        <div className="flex items-center justify-between gap-3 w-screen">
          <div className="flex items-center gap-3 w-screen">
            <button onClick={() => router.back()}>
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>
            <div>
              <h1 className="text-base md:text-lg font-bold">
                {chat.storeName}
              </h1>
              <p className="text-xs md:text-sm text-gray-500">
                {chat.status || "Active"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 mr-8">
            <Share2 className="w-5 h-5 md:w-6 md:h-6" />
            <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 md:px-6">
        {messages.map((message, index) => {
          const isUser = message.sender === "user"

          // Logic to determine if a date separator should be shown
          const previousMessage = messages[index - 1]
          const showDateSeparator =
            !previousMessage ||
            formatDate(message.timestamp) !==
              formatDate(previousMessage.timestamp)

          return (
            <div key={message.id}>
              {/* --- Date Separator --- */}
              {showDateSeparator && (
                <div className="flex justify-center my-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {formatDate(message.timestamp)}
                  </span>
                </div>
              )}

              {/* --- Individual Message Block --- */}
              <div
                className={`flex gap-3 ${
                  isUser ? "flex-col items-end" : "flex-col items-start"
                }`}
              >
                {/* --- Time Display (Above the bubble) --- */}
                <div
                  className={`text-xs text-gray-400 mb-1 ${
                    isUser ? "text-right mr-11" : "text-left ml-11"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </div>

                {/* --- Message Bubble and Avatar --- */}
                <div
                  className={`flex gap-3 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-lg md:text-xl ${getAvatarColor(
                        chat.id
                      )}`}
                    >
                      {chat.storeIcon}
                    </div>
                  )}
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg`}>
                    <div
                      className={`rounded-lg px-4 py-2 md:px-5 md:py-3 text-sm md:text-base ${
                        isUser
                          ? "bg-pink-100 text-gray-900 rounded-br-none"
                          : "bg-gray-100 text-gray-900 rounded-bl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                    </div>
                  </div>
                  {isUser && ( // Added conditional avatar rendering for user (optional, can be removed if user avatar isn't needed)
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-lg md:text-xl bg-blue-100`}
                    >
                      {/* You can use a static user icon or initial here */}A
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* --- Rating & Input Area (No Change) --- */}
      <div className="border-t border-gray-200 bg-white">
        {/* State 1: Show the "Rate seller" button (Initial Prompt) */}
        {showRatingPrompt && !hasRated && confirmedRatingValue === null && (
          <div className="px-4 py-3 md:px-6 w-full flex flex-col items-center">
            <div className="text-center mb-4">
              <p className="text-sm md:text-base text-gray-600">
                How would you rate this seller's service?
              </p>
            </div>
            <button
              onClick={() => setHasRated(true)}
              className="w-full max-w-sm px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-gray-700 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors"
            >
              Rate seller
            </button>
          </div>
        )}

        {/* State 2: Show the Star Rating component (Active Selection) */}
        {hasRated && confirmedRatingValue === null && (
          <div className="px-4 py-3 md:px-6 w-full flex flex-col items-center">
            <p className="text-sm md:text-base text-gray-600 mb-2">
              Tap a star to confirm your rating:
            </p>
            <StarRating onRate={handleRatingConfirmed} />
          </div>
        )}

        {/* State 3: Show the Confirmation Text (Rating Complete) */}
        {confirmedRatingValue !== null && (
          <div className="px-4 py-3 md:px-6 w-full text-center bg-green-50 border-t border-green-200">
            <p className="text-sm font-semibold text-green-700">
              ✅ Thank you! Your rating of {confirmedRatingValue} star(s) has
              been confirmed.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              No further changes can be made.
            </p>
          </div>
        )}

        {/* State 3: Show the Input Area (Default or when rating is hidden/done) */}
        {!showRatingPrompt || !hasRated ? (
          <div className="px-4 py-3 bg-white md:px-6">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message here"
                className="flex-1 px-4 py-2 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
              <button className="p-2 md:p-3 text-gray-400 hover:text-gray-600 transition-colors">
                <Smile className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={handleSendMessage}
                className="p-2 md:p-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Plus className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
