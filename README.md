# 🚀 NebulaPaste

<div align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" />
<img src="https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql" />
<img src="https://img.shields.io/badge/Authentication-Clerk-6C47FF?style=for-the-badge" />
<img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker" />
<img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" />

<br><br>

# 🌌 Modern Full Stack Code Sharing Platform

Create, organize, edit, search and securely manage your personal code snippets with authentication, syntax highlighting, Monaco Editor and a production-ready developer experience.

### 🔗 Live Demo

https://nebula-paste-rose.vercel.app

### 💻 GitHub Repository

https://github.com/aravindkumar-2026/NebulaPaste

</div>

---

# 📌 Overview

NebulaPaste is a modern full-stack code snippet manager inspired by Pastebin and GitHub Gists.

Unlike traditional public paste platforms, NebulaPaste provides **private user workspaces**, ensuring that every authenticated user can only access their own snippets.

The project demonstrates production-level Full Stack development using:

- Next.js 16
- React 19
- TypeScript
- Prisma ORM
- Neon PostgreSQL
- Clerk Authentication
- Monaco Editor
- Docker
- Vercel Deployment

---

# ✨ Features

## 🔐 Authentication

- Secure Clerk Authentication
- Google Sign In
- Google Sign Up
- Protected API Routes
- Secure Session Management

---

## 📝 Paste Management

- Create Paste
- Edit Paste
- Delete Paste
- Pin / Unpin Paste
- Download Paste
- Copy Code
- Share Links
- Search Snippets
- Plain Text Support
- Syntax Highlighting

---

## 👤 Personal Workspace

Every user has their own private dashboard.

✔ Dashboard only displays your own snippets

✔ Other users cannot access your snippets

✔ Secure ownership verification

✔ Personal statistics

✔ Recent snippets section

---

# 👤 User Account Management

NebulaPaste provides a modern account management system powered by Clerk.

## Animated Profile Button

The navigation bar contains an animated profile avatar.

✨ Hover Effects

- Smooth glowing animation
- Modern hover transition
- Interactive profile menu

---

## Manage Account

Users can easily manage their account without leaving the application.

Features include:

- 📷 Update Profile Picture
- ✏️ Update Name
- 📧 View Connected Email
- 🔗 View Connected Google Account
- 🌍 Connected Identity Information

---

## 🔐 Security Center

Users have complete control over their account security.

Available features:

- Create Password
- Update Password
- Manage Login Credentials
- View Active Devices
- View Active Sessions
- Browser Information
- Device Information
- Login History
- Delete Account

---

# 🔒 Privacy

Unlike public paste websites,

NebulaPaste provides a private workspace.

Every signed-in user can only:

- View their own snippets
- Edit their own snippets
- Delete their own snippets
- Pin their own snippets

No user can view another user's snippets.

---

# 🎨 Code Editor

NebulaPaste uses the Monaco Editor (Visual Studio Code editor).

Features:

- IntelliSense Ready
- Syntax Highlighting
- Automatic Layout
- Word Wrap
- Smooth Scrolling
- Multiple Programming Languages
- Plain Text Support

Supported Languages:

- Plain Text
- JavaScript
- TypeScript
- Python
- Java
- C
- C++
- HTML
- CSS
- JSON

---
# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| ORM | Prisma ORM |
| Database | Neon PostgreSQL |
| Authentication | Clerk |
| Editor | Monaco Editor |
| Syntax Highlighting | react-syntax-highlighter |
| Icons | Lucide React |
| Notifications | Sonner |
| Deployment | Vercel |
| Containerization | Docker |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
NebulaPaste
│
├── app
│   ├── api
│   ├── create
│   ├── edit
│   ├── my-pastes
│   ├── paste
│   ├── sign-in
│   ├── sign-up
│   └── page.tsx
│
├── components
│   ├── editor
│   ├── home
│   ├── layout
│   ├── paste
│   └── ui
│
├── lib
│   ├── prisma.ts
│   └── logger.ts
│
├── prisma
│   └── schema.prisma
│
├── public
│
├── Dockerfile
├── docker-compose.yml
├── middleware.ts
├── next.config.ts
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/aravindkumar-2026/NebulaPaste.git
```

Move inside the project.

```bash
cd NebulaPaste
```

---

## Install Dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a file named

```text
.env.local
```

Add:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_APP_URL=https://nebula-paste-rose.vercel.app
```

---

# 🗄️ Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Push the schema

```bash
npx prisma db push
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🐳 Docker

Build Docker Image

```bash
docker compose build
```

Run Container

```bash
docker compose up
```

Application will be available at

```
http://localhost:3000
```

---

# ☁️ Deployment

NebulaPaste is deployed on

- Vercel
- Neon PostgreSQL
- Clerk Authentication

Deployment is automatically triggered whenever changes are pushed to GitHub.

---

# 📡 API Documentation

## Health Check

### GET

```
/api/health
```

Response

```json
{
  "status": "healthy",
  "service": "NebulaPaste",
  "version": "1.0.0"
}
```

---

## Create Paste

### POST

```
/api/pastes
```

Creates a new snippet for the authenticated user.

---

## Update Paste

### PUT

```
/api/pastes/:id
```

Updates an existing snippet.

Only the owner can update.

---

## Delete Paste

### DELETE

```
/api/pastes/:id
```

Deletes an existing snippet.

Only the owner can delete.

---

## Security

Every request validates:

- Authentication
- User Ownership
- Database Access
- Error Handling

Unauthorized requests return appropriate HTTP status codes.

---
# 🏗️ System Architecture

```text
                     User
                       │
                       ▼
          Clerk Authentication
                       │
                       ▼
             Next.js Frontend
                       │
                       ▼
              API Routes (REST)
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
   Authorization                 Prisma ORM
                                         │
                                         ▼
                                 Neon PostgreSQL
```
---

## 👤 Profile Management

Features:

- Animated Profile Avatar
- Manage Account
- Update Profile
- Connected Email
- Connected Google Account

---

## 🔐 Security

Features:

- Password Management
- Active Devices
- Session Management
- Delete Account

---

# 📱 Responsive Design

NebulaPaste is fully responsive.

Supports:

- 💻 Desktop
- 💼 Laptop
- 📱 Mobile Phones
- 📟 Tablets

The layout automatically adapts for different screen sizes while maintaining a modern user experience.

---

# ⚡ Performance

NebulaPaste is optimized for speed.

Highlights:

- Server Components
- Fast API Routes
- Prisma ORM
- Efficient Database Queries
- Automatic Code Splitting
- Optimized Assets
- Vercel Edge Deployment

---

# 🔒 Security

Security was considered throughout development.

Features include:

- Clerk Authentication
- Protected Routes
- Owner-only Edit/Delete
- Secure API Validation
- Database Authorization
- Session Management
- Account Security Dashboard

---

# 🚀 Future Improvements

Future features planned for NebulaPaste:

- 🌍 Public & Private Paste Toggle
- 🤖 AI Code Explanation
- ▶️ Online Code Execution
- 📁 Collections & Folders
- 🏷️ Tags & Categories
- ⭐ Favorites
- 📊 Analytics Dashboard
- 🌙 Dark / Light Theme
- 🔔 Notifications
- 📄 Export to PDF
- 📱 Progressive Web App (PWA)
- 🔍 Advanced Search Filters
- 📤 Share with Expiration Links
- 📌 Folder Organization

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to improve NebulaPaste:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 👨‍💻 Author

**A. Aravind Kumar**

Information Technology

Rajalakshmi Engineering College

GitHub:

https://github.com/aravindkumar-2026

---

# 📄 License

This project was developed as part of a **Full Stack & DevOps Technical Club Recruitment Project**.

It is intended for educational, portfolio, and learning purposes.

---

<div align="center">

## ⭐ If you like this project, consider giving it a star!

### Thank you for visiting NebulaPaste 🚀

Made with ❤️ using Next.js, TypeScript, Prisma, Neon PostgreSQL, Clerk Authentication, Docker and Vercel.

</div>
