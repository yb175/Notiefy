import { useParams } from "react-router";
import notesContext from "../global/notesdata.";
import { useContext } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import "../styles/crud.css";
export default function CRUD() {
  const { id } = useParams();
  const [notes, setNotes] = useContext(notesContext);
  const note =
    notes.find((note) => note.id === id) == undefined
      ? null
      : notes.find((note) => note.id === id);
  if (note == null) {
    return <h1>note not found</h1>;
  }
  return (
    <div className="my-note-container">
      <div className="note-left">
        <input className="title-box" value={note.title} readOnly={true}/>
        <textarea className="content-box" value={note.content} readOnly={true}/>
        </div>

      <div className="button-panel">
        <button>
          <FaEdit /> Edit
        </button>
        <button>
          <FaTrash /> Delete
        </button>
        <button>
          <FaSave /> Save
        </button>
      </div>
    </div>
  );
}
