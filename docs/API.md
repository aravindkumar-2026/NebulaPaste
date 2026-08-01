# NebulaPaste API Documentation

## Overview

NebulaPaste provides a RESTful API for creating, updating, deleting, and monitoring text/code snippets. Authentication is handled using Clerk.

---

# Base URL

Development

```
http://localhost:3000/api
```

Production

```
https://your-domain.vercel.app/api
```

---

# Authentication

Protected endpoints require a signed-in user through Clerk Authentication.

---

# Endpoints

## 1. Create Paste

### Endpoint

```
POST /api/pastes
```

### Authentication

✅ Required

### Request Body

```json
{
  "title": "React Hooks",
  "description": "Important hooks",
  "content": "useState()",
  "language": "JavaScript"
}
```

### Success Response

**201 Created**

```json
{
  "id": "...",
  "title": "React Hooks",
  "description": "Important hooks",
  "content": "useState()",
  "language": "JavaScript",
  "pinned": false,
  "userId": "user_xxxxxx"
}
```

### Error Responses

| Status | Description |
|---------|-------------|
|401|Unauthorized|
|500|Internal Server Error|

---

## 2. Update Paste

### Endpoint

```
PUT /api/pastes/:id
```

### Authentication

✅ Required

### Request Body

```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "content": "Updated Content",
  "language": "Python"
}
```

### Success Response

**200 OK**

Returns the updated paste object.

### Error Responses

| Status | Description |
|---------|-------------|
|401|Unauthorized|
|403|Forbidden|
|404|Paste Not Found|
|500|Internal Server Error|

---

## 3. Delete Paste

### Endpoint

```
DELETE /api/pastes/:id
```

### Authentication

✅ Required

### Success Response

```json
{
  "success": true
}
```

### Error Responses

| Status | Description |
|---------|-------------|
|401|Unauthorized|
|403|Forbidden|
|404|Paste Not Found|
|500|Internal Server Error|

---

## 4. Health Check

### Endpoint

```
GET /api/health
```

### Authentication

Not Required

### Success Response

```json
{
  "status": "healthy",
  "service": "NebulaPaste",
  "version": "1.0.0",
  "timestamp": "2026-08-01T00:00:00.000Z"
}
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
|200|OK|
|201|Created|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

# Technologies

- Next.js 16
- Prisma ORM
- PostgreSQL
- Clerk Authentication

---

# Version

Current API Version: **v1.0.0**