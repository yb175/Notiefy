import "../styles/home.css"
import Note from "../assets/note";
export default function Home(){
    return(
        <span id="home-container">
            <h1>Notes</h1>
            <input type="text" placeholder="Search notes" className="search"></input>
            <div className="options">
                <button>All notes</button>
                <button>Recently edited</button>
                <button>Recently Added</button>
            </div>
            <Note></Note>
        </span>
    )
}