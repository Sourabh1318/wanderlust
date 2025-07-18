# 🌍 Wanderlust - Campground Booking Platform

Wanderlust is a full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to discover, create, review, and manage destinations 

This project demonstrates CRUD operations, authentication, image uploads, and modern web development best practices.

---

## 🚀 Live Demo

>  https://wanderlust-8760.onrender.com

---


## 🧰 Tech Stack

### 🔗 Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Passport.js** – User Authentication
- **Multer** + **Cloudinary** – Image Uploads
- **EJS** (for server-side views)

### 🖥️ Frontend (React App inside `/client`)
- **JavaScript**
- **Axios**
- **Bootstrap** (for UI)

---

## 📦 Features

- 🧭 Browse destinations listings
- ✍️ Add/edit/delete your own destinations
- 🖼 Upload destinations images (stored via Cloudinary)
- 🗣 Add/delete reviews on destinations
- 🔐 User authentication (Register/Login/Logout)
- 🔒 Authorization for sensitive actions (e.g., only owners can edit/delete)
- 💬 Flash messages and proper error handling

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
DB_URL=your_mongo_connection_uri
SECRET=your_session_secret



