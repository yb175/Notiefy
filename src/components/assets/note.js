import { useContext } from "react"
import notesContext from "../global/notesdata."
import "../styles/note-table.css"
import { useNavigate } from "react-router";
export default function Note({notes,setNotes}){
    const navigate = useNavigate();
    return(
    <div className="note-table">
        <div className="table-header">
          <span>Title</span>
          <span>Date</span>
          <span>Notebook</span>
        </div>

      {notes.map((note, i) => (
       <div className="table-row" key={note.id} onClick={() => navigate(`/crud/${note.id}`)}>
        <span>{note.title}</span>
        <span>{note.date}</span>
        <span>{note.notebook}</span>
       </div>
      ))}
    </div>
    )
}