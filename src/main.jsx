import { useState } from "react";
import Header from "./components/assets/header";
import "./main.css"
import isDarkTheme from "./components/global/theme";
import Sidebar from "./components/assets/sidebar";
import Home from "./components/pages/home.jsx";
import AddNote from "./components/pages/addNote.jsx";
import { BrowserRouter, Route, Routes,Link } from "react-router";
export default function App(){
    const [darkTheme,setDarkTheme] = useState(true);
    function toggle(){
        setDarkTheme(!darkTheme);
    }
    return(
        <div className={`app ${darkTheme ? "" : "light-theme"}`}>
        <BrowserRouter>
          <isDarkTheme.Provider value={[darkTheme,toggle]}>
            <Header/>
             <div className="main-layout">  
                <Sidebar />
                <Routes>
                   <Route path="/" element={<Home></Home>}></Route>
                   <Route path="/addNote" element={<AddNote></AddNote>}></Route>
                </Routes>
            </div>
        </isDarkTheme.Provider>
        </BrowserRouter>
        </div>
    )
}