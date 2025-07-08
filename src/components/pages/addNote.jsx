import "../styles/addNote.css"
import useAddNote from "../hooks/createNode";
export default function AddNote() {
    const {title,setTitle,content,setContent,date,setDate,notebook,setNotebook,saveNote} = useAddNote();
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