import "../styles/home.css"
export default function Home(){
    return(
        <span id="home-container">
            <h1>Notes</h1>
            <input type="text" placeholder="Search notes" className="search"></input>
            <div className="options">
                <button>All notes</button>
                <button>Recently edited</button>
                <button>Recently </button>
            </div>
        </span>
    )
}