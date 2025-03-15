# 🚀 Zaytoun - Djezzy Code Fest Submission

## 🏆 Team Name

**Zaytoun**

## 📖 Project Description

Algeria, like many other countries, faces a significant food waste crisis. Despite food insecurity affecting parts of the population, large quantities of edible food go to waste due to:

- Inefficient food distribution between suppliers, restaurants, and consumers.
- Lack of awareness about food conservation and sustainable consumption.
- Surplus food in supermarkets and restaurants that is discarded instead of redistributed.

Our web application gives solution to that.

We build a secure and efficient authentication system built using **Node.js, Express, MongoDB, and JWT**.
It provides **user registration and login functionality** with strong password hashing using **Bcrypt**.
The project ensures **secure authentication** while maintaining a simple and lightweight database design.

## 🎥 Presentation

[Video Demo](https://youtu.be/4kZbRFl7TOE)

---

## 💻 Codebase Repositories

- **Frontend:** [djezzy-code-fest-front](https://github.com/ramzy1453/djezzy-code-fest-front)

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
