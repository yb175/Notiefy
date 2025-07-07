import { FaStickyNote, FaBook } from 'react-icons/fa';
import "../styles/sidebar.css"

export default function Sidebar() {
    return (
        <span className="sidebar">
            <ul>
                <li>
                    <FaStickyNote style={{ marginRight: '10px' }} className="icon"/> 
                    <span>Notes</span>
                </li>
                <li>
                    <FaBook style={{ marginRight: '10px' }} className="icon"/> 
                    <span>Notebook</span>
                </li>
            </ul>
            <button>New Note</button>
        </span>
    )
}