import "../styles/home.css"
import Note from "../assets/note";
import { useContext,useState } from "react";
import notesContext from "../global/notesdata.";
export default function Home(){
    const [notes,setNotes] = useContext(notesContext);
    const [search,setSearch] = useState("");
    const filteredNotes = notes.filter((note)=>note.title.toLowerCase().includes(search.toLowerCase()));
    // Will Implemet recently edited anf recently added functionality through redux 
    return(
        <span id="home-container">
            <h1>Notes</h1>
            <input type="text" placeholder="Search notes" className="search" onChange={(e)=>setSearch(e.target.value)} value={search}></input>
            <div className="options">
                <button>All notes</button>
                <button>Recently edited</button>
                <button>Recently Added</button>
            </div>
            <Note notes={filteredNotes} setNotes={setNotes}></Note>
        </span>
    )
}