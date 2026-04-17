# 🚀 Noushad Alam - React Portfolio Website

> A modern, fully responsive portfolio built with React and Vite, featuring a frontend-only email contact system.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-2.0.0-blueviolet)

---

## 📋 Overview

This repository contains the latest production-ready version of the portfolio website. It showcases skills, services, and project work in a clean, fast, and responsive interface.

### ✨ Latest Updates

- ⚛️ Migrated to a **frontend-only React + Vite** architecture
- 📧 Added **EmailJS contact form** without backend dependency
- 🔒 Hardened environment security via `.gitignore` rules
- 🧹 Removed old backend files, workflows, and unnecessary modules
- 📱 Kept mobile-first responsiveness and smooth UI interactions

---

## 🛠️ Technologies Used

### Frontend
- **React 19**
- **Vite 8**
- **CSS3**
- **EmailJS Browser SDK**

### Skills Showcased in Portfolio
- Python Development
- SQL Database Management
- Data Engineering
- Artificial Intelligence
- Docker and DevOps Basics
- Web Development

---

## 📂 Project Structure

```text
react-nest-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## 🎯 Main Sections

### 1. **Hero Section**
Professional introduction with call-to-action buttons and profile visual.

### 2. **About**
Background summary and key profile highlights.

### 3. **Skills**
Visual skill cards with progress bars.

### 4. **Services**
Core service offerings across development and data.

### 5. **Portfolio**
Project cards with stack details and GitHub links.

### 6. **Timeline**
Learning and growth milestones.

### 7. **Contact**
Frontend EmailJS form plus direct fallback links (email/phone).

---

## 🚀 Getting Started

### Installation

1. **Clone the repository**
  ```bash
  git clone https://github.com/your-username/your-repo.git
  cd react-nest-portfolio/frontend
  ```

2. **Install dependencies**
  ```bash
  npm install
  ```

3. **Create environment file**
  ```bash
  cp .env.example .env
  ```

4. **Add EmailJS values in `.env`**
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

5. **Run development server**
  ```bash
  npm run dev
  ```

---

## 💻 Build

```bash
npm run build
```

---

## 📧 EmailJS Setup Notes

If contact submission fails:

1. Confirm service/template/public key values in `.env`
2. Ensure EmailJS template variables include:
  - `from_name`
  - `reply_to`
  - `subject`
  - `message`
3. Add allowed origins in EmailJS security settings:
  - `http://localhost:5173` (or your local dev port)
  - Your deployed Vercel domain

---

## 🚀 Deployment

Recommended: **Vercel**

1. Import repository in Vercel
2. Set project root to `frontend`
3. Add `VITE_EMAILJS_*` environment variables
4. Deploy

---

## 🔐 Security

- Real environment files are ignored from git
- Only `.env.example` is committed
- No backend secrets are required in this architecture

---

## 📞 Contact

- 📧 Email: alamnoushad081@gmail.com
- 📧 Email: noushadalam7979@gmail.com
- 📱 Phone: +92 314 8005977
- 🔗 GitHub: https://github.com/noshu12
- 💼 LinkedIn: https://www.linkedin.com/in/noushad-alam-a959b3252

---

**Last Updated:** April 17, 2026  
**Version:** 2.0.0
