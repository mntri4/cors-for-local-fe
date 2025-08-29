import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    // Your API logic here
    const data = { message: "Hello from API", timestamp: new Date().toISOString() }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin":
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000,http://localhost:5173,http://localhost:3001,http://localhost:8080"
            : "https://yourdomain.com",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    // Your POST logic here
    const response = { message: "Data received", data: body }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin":
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000,http://localhost:5173,http://localhost:3001,http://localhost:8080"
            : "https://yourdomain.com",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }
}

// Handle preflight OPTIONS requests
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin":
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000,http://localhost:5173,http://localhost:3001,http://localhost:8080"
          : "https://yourdomain.com",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Max-Age": "86400",
    },
  })
}
