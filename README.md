# 🚀 Blog Platform (Next.js Production App)

A full-featured, production-ready blog platform built with modern web technologies.
Includes authentication, admin dashboard, SEO optimization, and scalable architecture.

---

## 🌐 Live Demo

👉 https://your-project.vercel.app

---

## ⚙️ Tech Stack

* **Frontend:** Next.js 14 (App Router), Tailwind CSS
* **Backend:** Next.js API Routes
* **Database:** MongoDB Atlas + Mongoose
* **Auth:** NextAuth (Credentials)
* **Security:** bcryptjs, rate limiting
* **Deployment:** Vercel

---

## ✨ Features

### 📝 Blogging

* Create, edit, delete posts
* SEO-friendly slugs
* Categories + search filters
* Reading time & views tracking

### 💬 Engagement

* Comment system
* Rate-limited API (anti-spam)
* Related posts
* Social share buttons

### 🔐 Authentication

* Signup/Login (Credentials)
* Protected routes
* JWT-based sessions

### 📌 User Features

* Bookmark/save posts
* My Posts dashboard

### 🛠️ Admin Panel

* Admin-only access
* Manage posts
* Moderate comments
* View users & roles

### ⚡ Performance

* Pagination (scalable)
* Database indexing
* Optimized API responses

### 🔎 SEO

* Dynamic metadata
* OpenGraph + Twitter cards
* Sitemap + robots.txt

---

## 📁 Project Structure

```
app/
  api/
  blog/[slug]/
  admin/
  create/
components/
models/
lib/
```

---

## 🧪 Local Setup

### 1. Clone repo

```bash
git clone https://github.com/your-username/blog-platform.git
cd blog-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create `.env.local`

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run dev server

```bash
npm run dev
```

---

## 🚀 Production Build

```bash
npm run build
npm start
```

---

## 🔐 Admin Access

To make a user admin:

1. Go to MongoDB Atlas
2. Open `users` collection
3. Add:

```json
"role": "admin"
```

---

## 📈 Future Improvements

* Image upload (Cloudinary)
* Rich text editor
* Newsletter system
* Analytics (Google / Vercel)
* Sentry error monitoring

---

## 📄 License

MIT License

---

## 🙌 Author

Built by **Nikhil**

```
```
