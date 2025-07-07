import "../styles/header.css"
import { useContext } from "react"
import isDarkTheme from "../global/theme.js"
export default function Header() {
    const [darkTheme,toggle] = useContext(isDarkTheme);
    return (
        <div className="header">
           <h1 className="logo">Noteify</h1>
           <div className="links">
               <button>Home</button>
               <button>Add Note</button>
               <button onClick={()=>toggle()}>{darkTheme ? "light" : "dark"}</button>
           </div>
        </div>
    )
}