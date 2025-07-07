import { useState } from "react";
import Header from "./components/assets/header";
import "./main.css"
import isDarkTheme from "./components/global/theme";
import Sidebar from "./components/assets/sidebar";
import Home from "./components/pages/home.jsx";
export default function App(){
    const [darkTheme,setDarkTheme] = useState(true);
    function toggle(){
        setDarkTheme(!darkTheme);
    }
    return(
        <div className={`app ${darkTheme ? "" : "light-theme"}`}>
          <isDarkTheme.Provider value={[darkTheme,toggle]}>
            <Header/>
             <div className="main-layout">  
                <Sidebar />
                <Home />
            </div>
        </isDarkTheme.Provider>
        </div>
    )
}