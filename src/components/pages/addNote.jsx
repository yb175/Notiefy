import { useState,useEffect } from "react"
import "../styles/addNote.css"
import { useContext } from "react"
import notesContext from "../global/notesdata.";
export default function AddNote() {
    const [notes,setNotes] = useContext(notesContext);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [date,setDate] = useState(new Date());
    const [notebook,setNotebook] = useState('');
    function saveNote(title,content,date,notebook){
        const newNote = {title,content,date,notebook};
        // This is created into new memeory location
        setNotes([...notes,newNote]);

        setTitle('');
        setContent('');
        setDate('');
        setNotebook('');
    }
    return (
       <div className="addNote-container">
           <h1>New Note</h1>
           <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title}></input>
           <textarea placeholder="Content" onChange={(e)=>setContent(e.target.value)} value={content}></textarea>
           <input type="datetime-local" placeholder="Date" onChange={(e)=>setDate(e.target.value)} value={date}></input>
           <select id="notebook" name="notebook" onChange={(e)=>setNotebook(e.target.value)} value={notebook}>
            <option value="college">College</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
           </select>

           <div className="buttons">
               <button>Create Notebook</button>
               <button onClick={()=>saveNote(title,content,date,notebook)}>Create Note</button>
           </div>
       </div>
    )
}