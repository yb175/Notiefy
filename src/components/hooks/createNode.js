import { useState,useEffect } from "react"
import { useContext } from "react"
import notesContext from "../global/notesdata.";
import { Navigate, useNavigate } from "react-router";
import { v4 as uuidv4 } from 'uuid';

export default function useAddNode() {
    const [notes,setNotes] = useContext(notesContext);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [date,setDate] = useState(new Date());
    const [notebook,setNotebook] = useState('');
    const [id,setId] = useState(uuidv4());
    const navigate = useNavigate(); // 👈 useNavigate hook
    function saveNote(title,content,date,notebook){
        if (!date || !title || !content || !notebook) {
            alert("Please fill all fields!");
            return;
        }       
        const newNote = {id : uuidv4(),title,content,date,notebook};
        // This is created into new memeory location
        setNotes([...notes,newNote]);
        setTitle('');
        setContent('');
        setDate('');
        setNotebook('');
        navigate('/');
    }
    return {
    title, setTitle,
    content, setContent,
    date, setDate,
    notebook, setNotebook,
    saveNote,
   };
}