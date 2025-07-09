import { useParams } from "react-router";
import notesContext from "../global/notesdata."
import { useContext } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { useState } from "react";
import "../styles/crud.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
export default function CRUD() {
  const { id } = useParams();
  const [notes, setNotes] = useContext(notesContext);
  const [readOnly, setReadOnly] = useState(true);
  const navigate = useNavigate();
  const note =
    notes.find((note) => note.id === id) == undefined
      ? null
      : notes.find((note) => note.id === id);
   const [title,setTitle] = useState(note!=null ? note.title : '');
   const [content,setContent] = useState(note!=null ? note.content : '');
  useEffect(()=>{
    if(note){
      setTitle(note.title);
      setContent(note.content);
    }
  })
   if (note == null) {
    return <h1>note not found</h1>;
  }
  function handleDelete(id){
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    navigate('/');
  }
  return (
    <div className="my-note-container">
      <div className="note-left">
        <input className="title-box" value={title} readOnly={readOnly} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea className="content-box" value={content} readOnly={readOnly} onChange={(e)=>setContent(e.target.value)}/>
        </div>

      <div className="button-panel">
        <button onClick={() => setReadOnly(!readOnly)}>
          <FaEdit /> Edit
        </button>
        <button onClick={()=>handleDelete(note.id)}>
          <FaTrash/> Delete
        </button>
        <button>
          <FaSave /> Save
        </button>
      </div>
    </div>
  );
}
