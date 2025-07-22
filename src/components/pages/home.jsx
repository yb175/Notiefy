import "../styles/home.css"
import Note from "../assets/note";
import { useContext,useState } from "react";
import notesContext from "../global/notesdata.";
import { useSelector } from "react-redux";

export default function Home(){
    const recentlyEdited = useSelector((state) => state.recentlyEdited);
    const recentlyDeleted = useSelector((state) => state.recentlyDeleted);
    const [notes,setNotes] = useContext(notesContext);
    const [search,setSearch] = useState("");
    const [filters,setFilter] = useState("all");
    let displayNotes = [] ;
    if(filters === "all") displayNotes = notes ;
    else if(filters === "edited") displayNotes = recentlyEdited;
    else if(filters === "deleted") displayNotes = recentlyDeleted;

    const filteredNotes = displayNotes.filter((note)=>note.title.toLowerCase().includes(search.toLowerCase()));
    // Will Implemet recently edited anf recently added functionality through redux 
    return(
        <span id="home-container">
            <h1>Notes</h1>
            <input type="text" placeholder="Search notes" className="search" onChange={(e)=>setSearch(e.target.value)} value={search}></input>
            <div className="options">
                <button onClick={()=>setFilter("all")}>All notes</button>
                <button onClick={()=>setFilter("edited")}>Recently edited</button>
                <button onClick={()=>setFilter("deleted")}>Recently Deleted</button>
            </div>

            <Note notes={filteredNotes}></Note>
        </span>
    )
}