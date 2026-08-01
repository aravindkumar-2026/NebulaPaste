# 🚀 NebulaPaste

<div align="center">

### A Modern Full-Stack Code Sharing Platform

Create, manage, search, pin, and securely share code snippets with authentication, syntax highlighting, and a modern developer experience.

---

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql)
![Clerk](https://img.shields.io/badge/Authentication-Clerk-6C47FF?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

</div>

---

## 📌 Overview

NebulaPaste is a modern PasteBin-inspired application built using **Next.js 16**, **TypeScript**, **Prisma ORM**, **Neon PostgreSQL**, and **Clerk Authentication**.

It provides a clean and secure platform for developers to create, organize, edit, search, and share code snippets while demonstrating production-ready full-stack development practices.

---

## ✨ Features

- 🔐 Clerk Authentication
- 📝 Create, Edit & Delete Pastes
- 📌 Pin / Unpin Pastes
- 🔍 Instant Search
- 📋 One-click Copy
- 📤 Share Links
- 💾 Download Snippets
- 🎨 Syntax Highlighting
- 👤 Personal Dashboard
- 🔒 Owner-only Edit/Delete Protection
- ❤️ Health Check API
- 🐳 Docker Ready
- 📱 Responsive UI
---

# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 16, React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| ORM | Prisma |
| Database | Neon PostgreSQL |
| Authentication | Clerk |
| Syntax Highlighting | react-syntax-highlighter |
| Code Editor | Monaco Editor |
| Icons | Lucide React |
| Deployment | Vercel |
| Containerization | Docker |

---

# 📂 Project Structure

```text
NebulaPaste
│
├── app/
│   ├── api/
│   ├── create/
│   ├── edit/
│   ├── my-pastes/
│   ├── paste/
│   └── search/
│
├── components/
│   ├── layout/
│   ├── paste/
│   └── ui/
│
├── lib/
├── prisma/
├── public/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/aravindkumar-2026/NebulaPaste.git
```

```bash
cd NebulaPaste
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a file named:

```text
.env.local
```

Add the following variables:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Push Database

```bash
npx prisma db push
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```
---

# 📡 API Documentation

## Health Check

### GET `/api/health`

Returns the current status of the application.

### Response

```json
{
  "status": "healthy",
  "service": "NebulaPaste",
  "version": "1.0.0"
}
```

---

## Create Paste

### POST `/api/pastes`

Creates a new paste for the authenticated user.

### Request Body

```json
{
  "title": "My Code",
  "description": "Sample description",
  "content": "console.log('Hello');",
  "language": "JavaScript"
}
```

---

## Get All Pastes

### GET `/api/pastes`

Returns all available pastes.

---

## Get Single Paste

### GET `/api/pastes/:id`

Returns a specific paste by ID.

---

## Update Paste

### PATCH `/api/pastes/:id`

Updates an existing paste.

---

## Delete Paste

### DELETE `/api/pastes/:id`

Deletes a paste.

> 🔒 Only the owner of the paste can delete it.

---

## Pin / Unpin Paste

### PATCH `/api/pastes/:id/pin`

Pins or unpins a paste.

> 🔒 Only the owner of the paste can pin or unpin it.

---

# 🔒 Authentication

NebulaPaste uses **Clerk Authentication**.

Protected features include:

- Create Paste
- Edit Paste
- Delete Paste
- Pin / Unpin
- My Dashboard

Unauthenticated users can browse public content but cannot modify data.
---

# 🐳 Docker

Build the Docker image:

```bash
docker compose build
```

Run the application:

```bash
docker compose up
```

The application will be available at:

```
http://localhost:3000
```
---

# 🏗️ System Architecture

```text
                 User
                   │
                   ▼
          Next.js Frontend
                   │
                   ▼
            API Routes (REST)
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
   Clerk Authentication   Prisma ORM
                                  │
                                  ▼
                        Neon PostgreSQL
```
---

# 🚀 Future Improvements

- 🌍 Public & Private Pastes
- 🤖 AI Code Explanation
- ▶️ Online Code Execution
- 📁 Collections & Folders
- 🌙 Dark / Light Theme
- 📈 User Analytics Dashboard
- 📱 Progressive Web App (PWA)
- 🔔 Notifications
- ⭐ Favorites
- 📤 Export as PDF
---

# 📄 License

This project was developed as part of a **Full Stack & DevOps Challenge** for learning and evaluation purposes.