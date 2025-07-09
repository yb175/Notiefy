# 📝 Noteify

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Parcel](https://img.shields.io/badge/Bundler-Parcel-orange?logo=parcel)
![CRUD](https://img.shields.io/badge/CRUD-Complete-brightgreen)
![Theme](https://img.shields.io/badge/Theme-Dark%20%26%20Light-inactive)
![Status](https://img.shields.io/badge/Status-Active-blueviolet)
![Made By](https://img.shields.io/badge/Made%20by-Yug%20Bhatia-blue)

> A modern, responsive, and clean **Note-Taking Web App** built with React & Parcel.  
> Create, read, update, and delete notes categorized by notebook type.  
> Theme toggles, routing, and polished UI packed with productivity!

---

## 🎥 Demo Preview

Coming Soon! (GIFs will be added after deployment or local recording)

<!-- Example:
![App Demo](https://github.com/username/repo-name/assets/image-id/demo.gif)
-->

---

## 📌 Features

### ✅ Core Functionalities:
- ➕ **Create Notes** – with Title, Content, Date, and Category
- 🔍 **Read/View Notes** – detailed view via route `/crud/:id`
- 📝 **Update Notes** – toggle edit mode and save
- 🗑️ **Delete Notes** – removes instantly and navigates to home
- 🎨 **Theme Support** – Light / Dark Mode
- 🌐 **Routing** – Smooth page transitions using `react-router-dom`
- 📱 **Responsive Design** – works on all screen sizes

---

## 💡 Tech Stack

| Tech         | Usage                         |
|--------------|-------------------------------|
| React        | Functional Components, Hooks  |
| Parcel       | Fast bundler for development  |
| Context API  | Global note storage           |
| React Router | Navigation between pages      |
| UUID         | Generate unique note IDs      |
| CSS Modules  | Custom styles with themes     |

---

## 🗂️ Folder Structure
```
📦 src/
├── assets/
│ └── (icons, logo if any)
├── components/
│ ├── Header.jsx
│ ├── Sidebar.jsx
├── pages/
│ ├── Home.jsx
│ ├── AddNote.jsx
│ ├── CRUD.jsx
├── global/
│ ├── notesdata.js
│ └── theme.js
├── styles/
│ ├── addNote.css
│ ├── crud.css
│ ├── home.css
│ └── note-table.css
├── hooks/
│ └── createNode.js
├── App.jsx
├── index.js
└── index.html
```


---

## ⚙️ Setup Instructions

### 📥 Clone the Repo
```bash
git clone https://github.com/yb175/Notiefy
cd react-notes-app

```


---

````md
## 🧱 Install Dependencies

```bash
npm install
````

---

## ▶️ Start Development Server

```bash
npm run start
```

> Parcel will hot-reload the app on changes.

---

## 🔐 .gitignore Setup

```gitignore
node_modules/
.parcel-cache/
dist/
.env
```

---

### ⚠️ Understanding Early Return & Hook Execution in React

React **always executes all hooks** in a component before rendering. That means:

* ❌ You can't skip hook calls based on conditions like `if (note == null) return <h1>not found</h1>;`
* ✅ Even if you're going to return early, the **hook declarations (like `useState`, `useEffect`)** must still run before that.

#### ❌ Problematic Pattern (Will Crash)

```js
const note = notes.find(n => n.id === id);
if (note == null) return <h1>Not found</h1>; // ❌ Skips hook declarations

const [title, setTitle] = useState(note.title); // ❌ Will crash
```

#### ✅ Correct Pattern

Declare hooks unconditionally using fallback/default values:

```js
const note = notes.find(n => n.id === id);
const [title, setTitle] = useState(note ? note.title : '');
const [content, setContent] = useState(note ? note.content : '');

if (!note) return <h1>Not Found</h1>; // ✅ Safe early return
```

> 🧠 **Rule of Thumb:** Never conditionally call hooks. React must "see" all hooks in the exact same order during every render.

---

## 🗑️ Delete Note – Smooth Navigation Fix

When a note is deleted, the user is immediately redirected to the homepage.

### ❌ Old Way – Caused Delay

```js
const [deleted, setDeleted] = useState(false);

useEffect(() => {
  if (deleted) {
    navigate('/');
  }
}, [deleted]);

function handleDelete(id) {
  setNotes(notes.filter((n) => n.id !== id));
  setDeleted(true);
}
```

### ✅ Optimized Fix – Instant Navigation

```js
function handleDelete(id) {
  setNotes(notes.filter((n) => n.id !== id));
  navigate('/');
}
```

> ✅ Improved UX with **zero delay** after deletion.

---

## 🧪 Future Plans

* [ ] Local Storage integration
* [ ] Search functionality
* [ ] Tag-based note filtering
* [ ] Drag and Drop notebooks
* [ ] Unit Tests with Jest
* [ ] Deployment on Vercel/Netlify

---

## 👨‍💻 Developer

**Yug Bhatia**

> *"Crafted with code and caffeine." ☕*

📫 [GitHub](https://github.com/yb175) • [LinkedIn](https://www.linkedin.com/in/yug-bhatia-6615462ab/)

---

## 🙌 Contribution

Want to contribute?
Open an issue or submit a pull request — PRs are welcome!

```bash
git checkout -b feature/yourFeature
git commit -m "Added your awesome feature"
git push origin feature/yourFeature
```

---

