GenAI Chatbot Frontend (UI)

## 🌐 Live Application

**UI URL:**
👉 [https://rkchatbot.netlify.app/](https://rkchatbot.netlify.app/)

---

## 📌 Overview

This is the **frontend user interface** for the GenAI-powered chatbot inspired by GitLab’s *Build in Public* philosophy.
The application allows users to ask questions and receive contextual, AI-generated answers sourced from **GitLab’s Handbook and Direction pages**.

The UI is built using **React** and communicates with a backend API that implements a **Retrieval-Augmented Generation (RAG)** system powered by **Gemini AI** and **Pinecone**.

---

## 🎯 Purpose

* Provide an intuitive chat experience for users
* Enable seamless follow-up questions
* Clearly display AI responses retrieved from trusted documentation

---

## 🛠️ Tech Stack

* **React**
* **JavaScript**
* **Fetch API / Axios**
* **CSS (basic styling)**

---

## ✨ Features

* Chat-based conversational UI
* Real-time response rendering
* Loading indicators during AI processing
* Graceful error handling
* Scrollable conversation history
* Clean and minimal layout for accessibility

---

## 🔗 Backend Integration

The frontend communicates with a deployed backend API.

**Backend API Base URL:**
👉 [https://chatbotapis.onrender.com](https://chatbotapis.onrender.com)

**Chat Endpoint Used:**

```
POST /rag/query
```

The backend handles:

* Query understanding
* Vector similarity search
* AI response generation

---

## ⚙️ Environment Configuration

Create a `.env` file for local development:

```env
APIS=https://chatbotapis.onrender.com
```

---

## ▶️ Running the UI Locally

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Local UI will run at:

```
http://localhost:5173
```

---

## 🌍 Deployment

* Deployed using **Netlify**
* Automatically builds from the main branch
* Environment variables configured for production API usage

---

## 🧠 Product Thinking

* Built for **employees and aspiring employees**
* Simple UX focused on learning and discovery
* Designed to support transparency and open knowledge access

---

## 📜 Notes

* Uses only publicly available GitLab documentation
* No user data is stored
* Educational and demonstration-focused project

---

## 🚀 Future Enhancements

* Display response sources in UI
* Persist chat history
* Improved error messaging
* UI theming and accessibility improvements

 
