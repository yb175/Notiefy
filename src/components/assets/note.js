
import "../styles/note-table.css"
import { useNavigate } from "react-router";
import { useContext } from "react";
import notesContext from "../global/notesdata.";
export default function Note({notes}){
    const navigate = useNavigate();
    const [notesContextData] = useContext(notesContext);
    return(
    <div className="note-table">
        <div className="table-header">
          <span>Title</span>
          <span>Date</span>
          <span>Notebook</span>
        </div>

      {notes.map((note, i) => (
       <div className="table-row" key={note.id} onClick={() => {
            if(notesContextData.find((n) => n.id === note.id)){
              navigate(`/crud/${note.id}`)
            }
       }
       }>
        <span>{note.title}</span>
        <span>{note.date}</span>
        <span>{note.notebook}</span>
       </div>
      ))}
    </div>
    )
}