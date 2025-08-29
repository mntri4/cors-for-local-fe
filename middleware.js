import { NextResponse } from "next/server"

export function middleware(request) {
  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 200 })

    // Set CORS headers for preflight requests
    const allowedOrigins =
      process.env.NODE_ENV === "development"
        ? [
            "http://localhost:3000", // Next.js default
            "http://localhost:5173", // Vite default
            "http://localhost:3001", // Alternative Next.js
            "http://localhost:8080", // Webpack dev server
            "http://localhost:4200", // Angular CLI
            "http://localhost:8000", // Django/Python
            "http://localhost:5000", // Flask/Express
            "http://localhost:3002", // Alternative React
          ]
        : ["https://yourdomain.com"]

    const origin = request.headers.get("origin")
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set("Access-Control-Allow-Origin", origin)
    }

    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
    response.headers.set("Access-Control-Allow-Credentials", "true")
    response.headers.set("Access-Control-Max-Age", "86400")

    return response
  }

  // For non-preflight requests, add CORS headers to the response
  const response = NextResponse.next()

  const allowedOrigins =
    process.env.NODE_ENV === "development"
      ? [
          "http://localhost:3000", // Next.js default
          "http://localhost:5173", // Vite default
          "http://localhost:3001", // Alternative Next.js
          "http://localhost:8080", // Webpack dev server
          "http://localhost:4200", // Angular CLI
          "http://localhost:8000", // Django/Python
          "http://localhost:5000", // Flask/Express
          "http://localhost:3002", // Alternative React
        ]
      : ["https://yourdomain.com"]

  const origin = request.headers.get("origin")
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin)
  }

  response.headers.set("Access-Control-Allow-Credentials", "true")

  return response
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico).*)"],
}
