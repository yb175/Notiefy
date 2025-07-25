import { useParams, useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import notesContext from "../global/notesdata.";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addRecentlyDeleted } from "../slice/slice2";
import { addRecentlyEdited, removeRecentlyEdited } from "../slice/slice1";
import { useSelector } from "react-redux";
import "../styles/crud.css";

export default function CRUD() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Problematic line 👇
  const [notes, setNotes] = useContext(notesContext);
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  // Populate title & content only if note exists
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  // If note not found, render fallback
  if (!note) {
    return <h1>Note not found</h1>;
  }

  // Delete Note
  const handleDelete = () => {
    dispatch(addRecentlyDeleted(note));
    dispatch(removeRecentlyEdited(note));
    setNotes(notes.filter((n) => n.id !== id));
    navigate("/");
  };
  const handleSave= ()=>{
    note.title=title;
    note.content=content;
    setNotes([...notes]);
    dispatch(addRecentlyEdited(note));
    navigate("/");
  }
  return (
    <div className="my-note-container">
      <div className="note-left">
        <input
          className="title-box"
          value={title}
          readOnly={readOnly}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="content-box"
          value={content}
          readOnly={readOnly}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="button-panel">
        <button onClick={() => setReadOnly(!readOnly)}>
          <FaEdit /> Edit
        </button>
        <button onClick={handleDelete}>
          <FaTrash /> Delete
        </button>
        <button onClick={()=>handleSave()}>
          <FaSave/> Save
        </button>
      </div>
    </div>
  );
}
