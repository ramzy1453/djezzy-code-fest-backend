# Matarmihach

## Overview

This is the backend API for our web application, built using **Express.js** for handling requests efficiently. The API includes user management, restaurant handling, food tracking, and organization management, with **cookie-based authentication**.

## Tech Stack

- **Express.js** - Web framework for Node.js.
- **Node.js** - JavaScript runtime.
- **MongoDB** - Database management.
- **JWT & Cookies** - Authentication mechanism.
- **Redis Pub/Sub** - Real-time messaging system.
- **Socket.io** - WebSocket communication for real-time notifications.

## Features

- Secure **cookie-based authentication** (Login, Logout, Session handling).
- CRUD operations for managing users, restaurants, foods, and organizations.
- Protected API routes for authenticated users.

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/ramzy1453/djezzy-code-fest-backend
   cd djezzy-code-fest-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   The API should now be running on `http://localhost:5000`.

## Authentication Flow

- Users authenticate via `POST /api/user/register`, which returns an **HTTP-only cookie**.
- Protected routes validate the cookie before granting access.
- Logout clears the session cookie.
