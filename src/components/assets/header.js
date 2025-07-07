import "../styles/header.css"
import { useContext } from "react"
import isDarkTheme from "../global/theme.js"
import {Link} from "react-router"
export default function Header() {
    const [darkTheme,toggle] = useContext(isDarkTheme);
    return (
        <div className="header">
           <h1 className="logo">Noteify</h1>
           <div className="links">
                <Link to="/"><button>Home</button></Link>
               <Link to="/addNote"><button>Add Note</button></Link>
               <button onClick={()=>toggle()}>{darkTheme ? "light" : "dark"}</button>
           </div>
        </div>
    )
}