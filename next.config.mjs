import withPWA from "next-pwa"

// Define the PWA configuration options
const pwaConfig = withPWA({
  dest: "public", // REQUIRED: Outputs the service worker to the public directory
  register: true, // Auto-registers the service worker on the client side
  skipWaiting: true, // Ensures a new service worker takes over immediately
  // Recommended: Disable PWA features during local development
  disable: process.env.NODE_ENV === "development",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// Export the wrapped configuration
export default pwaConfig(nextConfig)
