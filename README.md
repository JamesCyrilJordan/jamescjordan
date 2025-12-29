# jamescjordan

A full-stack portfolio for James C. Jordan that highlights engineering leadership, product thinking, and delivery craftsmanship.

## Project structure

- `backend`: Express API serving profile data, highlights, projects, and contact email handling.
- `frontend`: React 18 single-page app built with Vite (with a compatibility `react-scripts start` entry point).
- `docker-compose.yml`: Runs both services on a shared network with health checks.

## Backend (Express)

- Express with CORS, Helmet, request logging, JSON parsing, and rate limiting.
- Nodemailer contact endpoint (`POST /api/contact`) configured via environment variables.
- Health endpoint at `GET /api/health` plus project/profile routes.
- Development: `npm install` then `npm run dev` in `backend` (nodemon).
- Production: `npm start`.

Environment variables (`backend/.env.example`):

```
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=100
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_INBOX=you@example.com
```

## Frontend (React + Vite)

- React 18, React Router DOM v7, React Bootstrap + Bootswatch (Cosmo theme).
- Vite for dev/build/preview; also exposes `react-scripts start` for compatibility.
- ESLint with React hooks and refresh plugins; Node test runner for lightweight checks.
- Development: `npm install` then `npm run dev` in `frontend`.
- Build: `npm run build`; preview: `npm run preview`.
- Tests: `npm test` (Node `--test`).

Environment variable (`frontend/.env.example`):

```
VITE_API_BASE_URL=http://localhost:5000
```

## Docker Compose

The included `docker-compose.yml` builds and runs both apps on a shared `portfolio-network`.

```
docker-compose up --build
```

- Backend available at `http://localhost:5000` (health at `/api/health`).
- Frontend available at `http://localhost:5173`.
- Health checks ensure the backend is healthy before the frontend starts; you can layer an Nginx proxy on top if desired.
