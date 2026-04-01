# nest-app

A REST API built with **NestJS** + **Prisma** + **PostgreSQL (Neon)**.
Covers full CRUD for users with automatic request validation.

---

## What is NestJS (vs Express)

If you know Express, NestJS is Express with **forced structure**.
It runs on top of Express — but instead of writing everything freely,
it makes you split your code into specific pieces:

| Piece | Job | Express equivalent |
|---|---|---|
| **Module** | Groups related files for one feature | A folder with an index.js |
| **Controller** | Handles routes, calls the service | `app.get('/users', handler)` |
| **Service** | Contains all logic and DB calls | The logic inside the handler |
| **DTO** | Defines and validates the request body | Manual `if (!req.body.email)` checks |

---

## Project Structure

```
src/
├── main.ts                        ← starts the server, sets up global validation
├── app.module.ts                  ← root module, connects all feature modules
├── app.controller.ts              ← handles GET / and GET /health
├── app.service.ts                 ← logic for welcome message and health check
│
├── prisma/
│   ├── prisma.module.ts           ← makes PrismaService available everywhere (@Global)
│   └── prisma.service.ts          ← opens and manages the database connection
│
└── users/
    ├── users.module.ts            ← groups everything related to users
    ├── users.controller.ts        ← defines all /users routes
    ├── users.service.ts           ← all user logic (create, find, update, delete)
    └── dto/
        ├── create-user.dto.ts     ← validation rules for creating a user
        └── update-user.dto.ts     ← same rules but all fields are optional (for update)
```

---

## How a Request Travels Through the App

```
Postman sends: POST /users { firstName, email, age... }
        ↓
  main.ts → ValidationPipe checks the body against CreateUserDto
        ↓  (if invalid → 400 Bad Request, stops here)
  UsersController → receives request, calls usersService.create()
        ↓
  UsersService → checks if email exists, then creates the user
        ↓
  PrismaService → talks to the PostgreSQL database (Neon)
        ↓
  Response sent back to Postman
```

---

## Prerequisites

Make sure you have these installed before running the project:

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- A [Neon](https://neon.tech) account (free) — or any PostgreSQL database

---

## Getting Started (Run on your local machine)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd nest-app-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Create a `.env` file in the root of the project:

```bash
# .env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require"
```

> Go to [neon.tech](https://neon.tech), create a free project, and copy the connection string.
> It looks like: `postgresql://alex:password@ep-xyz.us-east-1.aws.neon.tech/neondb?sslmode=require`

> **Important:** Never share your `.env` file or push it to GitHub.
> It is already listed in `.gitignore`.

### 4. Push the database schema

This creates the `User` table in your database:

```bash
npx prisma db push
```

### 5. Start the server

```bash
npm run start:dev
```

The server will start at: **http://localhost:3000**

---

## API Routes

### Root

| Method | URL | Description |
|---|---|---|
| GET | `/` | Welcome message + API name and version |
| GET | `/health` | Server health check (status + timestamp) |

### Users

| Method | URL | Body | Description |
|---|---|---|---|
| POST | `/users` | `{ firstName, lastName, email, age }` | Create a new user |
| GET | `/users` | — | Get all users |
| GET | `/users/:id` | — | Get one user by ID |
| PUT | `/users/:id` | any field(s) from create | Update a user |
| DELETE | `/users/:id` | — | Delete a user |

### Request Body Example (POST /users)

```json
{
  "firstName": "Ali",
  "lastName": "Ahmed",
  "email": "ali@example.com",
  "age": 25
}
```

## Available Scripts

| Command | What it does |
|---|---|
| `npm run start:dev` | Start in dev mode (auto-restarts on save) |
| `npm run start` | Start normally (no auto-restart) |
| `npm run build` | Compile TypeScript to `/dist` |
| `npm run start:prod` | Run the compiled production build |
| `npm run test` | Run unit tests |

---

## Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  firstName String
  lastName  String
  email     String   @unique
  age       Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| NestJS | Backend framework (built on Express) |
| TypeScript | Type-safe JavaScript |
| Prisma | Database ORM (query builder) |
| PostgreSQL (Neon) | Cloud database |
| class-validator | DTO validation decorators |
