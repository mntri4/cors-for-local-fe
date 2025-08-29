# Project Setup

## CORS Configuration

This project is configured to allow CORS requests from local frontend development servers during development.

### Allowed Local Origins

The following local development origins are automatically allowed when `NODE_ENV=development`:

- `http://localhost:3000` - Next.js default dev server
- `http://localhost:5173` - Vite default dev server  
- `http://localhost:3001` - Alternative Next.js port
- `http://localhost:8080` - Common webpack dev server port
- `http://localhost:4200` - Angular CLI default port
- `http://localhost:8000` - Django/Python dev server
- `http://localhost:5000` - Flask/Express common port
- `http://localhost:3002` - Alternative React dev server

### CORS Implementation

CORS is implemented at multiple levels for comprehensive coverage:

1. **Next.js Config Headers** (`next.config.mjs`) - Global headers for all API routes
2. **Middleware** (`middleware.js`) - Handles preflight OPTIONS requests and dynamic origin checking
3. **API Route Headers** - Individual route-level CORS headers as fallback

### Production Configuration

In production, update the allowed origins in:
- `next.config.mjs` 
- `middleware.js`
- Individual API routes

Replace `https://yourdomain.com` with your actual production domain(s).

### Testing CORS

You can test the CORS configuration by making requests from your local frontend to:
- `GET /api/example` - Test endpoint
- Any other API routes you create

The server will automatically handle preflight OPTIONS requests and include appropriate CORS headers in responses.

### Adding Custom Origins

To add additional local development ports, update the `allowedOrigins` arrays in both `middleware.js` and `next.config.mjs`.
