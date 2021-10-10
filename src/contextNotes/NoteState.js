import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial)

    const getNote = async () => {
        const response = await fetch(`${host}/api/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1ZDQ2NThmMjIzNTBjZjFjOWEzZDIwIn0sImlhdCI6MTYzMzUwNDQwMH0.MiiTWPhZ3ZNxL85moG1lP5Wu-gd9gehoxgX08ON-iNA'
            },
        });
        const json = await response.json()
        setNotes(json);
    }

    const addNote = async (title, description, tag) => {
        console.log("Add note is called in context");
        await fetch(`${host}/api/addnewnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1ZDQ2NThmMjIzNTBjZjFjOWEzZDIwIn0sImlhdCI6MTYzMzUwNDQwMH0.MiiTWPhZ3ZNxL85moG1lP5Wu-gd9gehoxgX08ON-iNA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        getNote();
    }




    const deleteNote = async (id) => {
        console.log("Delete function is hitted bro having ID: " + id)
        await fetch(`${host}/api/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1ZDQ2NThmMjIzNTBjZjFjOWEzZDIwIn0sImlhdCI6MTYzMzUwNDQwMH0.MiiTWPhZ3ZNxL85moG1lP5Wu-gd9gehoxgX08ON-iNA'
            },
        });
        getNote();
    }

    const editNote = async (id, title, description, tag) => {


        const response = await fetch(`${host}/api/updatenote/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1ZDQ2NThmMjIzNTBjZjFjOWEzZDIwIn0sImlhdCI6MTYzMzUwNDQwMH0.MiiTWPhZ3ZNxL85moG1lP5Wu-gd9gehoxgX08ON-iNA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);


        // for (let index = 0; index < notes.length; index++) {
        //     const element = notes[index];
        //     if (element._id === id) {
        //         element.title = title;
        //         element.descripton = description;
        //         element.tag = tag;
        //     }
        // }
        getNote();
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;