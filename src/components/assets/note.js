import { useContext } from "react"
import notesContext from "../global/notesdata."
import "../styles/note-table.css"
export default function Note(){
    
    const [notes,setNotes] = useContext(notesContext);
    return(
    <div className="note-table">
        <div className="table-header">
          <span>Title</span>
          <span>Date</span>
          <span>Notebook</span>
        </div>

      {notes.map((note, i) => (
       <div className="table-row" key={i}>
        <span>{note.title}</span>
        <span>{note.date}</span>
        <span>{note.notebook}</span>
       </div>
      ))}
    </div>
    )
}