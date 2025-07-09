---

# 📝 React Notes App

A clean and minimal **Note-Taking Web App** built using **React + Parcel**. This project allows users to create, view, and manage notes in different categories with a responsive UI and dark/light themes.

---

## 🔧 **Tech Stack**

* ⚛️ **React** (Functional components + Hooks)
* 📦 **Parcel** (as bundler)
* 🌗 **Theme Toggle** (Dark & Light)
* 🌐 **React Router DOM** (Routing between pages)
* 🧠 **Context API** (Global state for notes)
* 🆔 **uuid** (Unique ID for each note)

---

## 📌 **Features Implemented So Far**

* ➕ **Add New Note**
  Title, Content, Date, Category (College/Personal/Work)

* 🌐 **Routing**
  `/` → All Notes
  `/addNote` → Add New Note
  `/crud/:id` → View/Edit specific note

* 📋 **List Notes**
  Displayed in a table-like UI (Title, Date, Category)

* 🎨 **Responsive UI**
  Sidebar, Input fields, Buttons

* ⚡ **Theming**
  Light and Dark modes using CSS variables

* 🧠 **Global Notes Storage**
  Handled using `Context API`

---

## 🚀 **Project Setup with Parcel**

> Make sure you have Node.js and npm installed

### 🧱 Install dependencies

```bash
npm install
```

### ▶️ Start development server

```bash
npm run start
```

> Parcel will hot reload your app on file changes.

---

## 📁 **Folder Structure**

```bash
project-root/
│
├── src/
│   ├── components/
│   │   ├── assets/
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AddNote.jsx
│   │   │   └── CRUD.jsx
│   │   ├── global/
│   │   │   ├── notesdata.js
│   │   │   └── theme.js
│   │   └── styles/
│   │       ├── home.css
│   │       ├── addNote.css
│   │       ├── note-table.css
│   │      └── crud.css
│   |-- index.js
|   |-- main.jsx
├── index.html

├── .gitignore
└── README.md
```

---

## 🔐 **.gitignore Setup**

To avoid pushing unwanted files like Parcel cache:

```gitignore
node_modules/
.parcel-cache/
dist/
.env
```

---

## 🎯 **Future Scope (Next Steps)**

* ✅ Edit & Update Notes (`/crud/:id`)
* 🗑️ Delete Notes
* 💾 Save Notes to **LocalStorage**
* 🔍 Search Notes
* 📲 Full Mobile Responsive Support
* ✅ Unit Testing with Jest (later stage)

---
---

### 🗑️ Delete Note – Smooth Navigation Fix

When a user deletes a note, we want them to be immediately redirected to the homepage (/) to prevent them from viewing a now-deleted note.

#### ❌ Initial Implementation (Caused Delay)

Initially, the redirection after deleting a note was handled using a useEffect like this:

js
const [deleted, setDeleted] = useState(false);

useEffect(() => {
  if (deleted) {
    navigate('/');
  }
}, [deleted]);

function handleDelete(id) {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
  setDeleted(true);
}


**Issue:**
This approach introduces an unnecessary render cycle. React first updates the state (deleted becomes true), then re-renders the component, and *after that*, the useEffect triggers the navigation. This causes a visible delay during redirection.

---

#### ✅ Optimized Fix – Instant Navigation

To make the delete operation feel smooth and instant, we moved the navigation directly inside the delete handler function:

js
function handleDelete(id) {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
  navigate('/'); // Navigate immediately after deletion
}


This change ensures that the user is redirected as soon as the note is deleted, without waiting for an additional render. It's more responsive and improves the user experience.

---

## 🙌 **Contribution**

This project is currently under development. Feel free to fork, suggest, or contribute ideas via pull requests.

---

## 👨‍💻 **Developed by Yug Bhatia**

> *"Crafted with code and caffeine."*

---

