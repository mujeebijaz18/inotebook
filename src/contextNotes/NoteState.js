import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "615e0ea707dee7a8633ebd4b",
            "user": "615d4658f22350cf1c9a3d20",
            "title": "Hello2111",
            "description": "This is the description of note one.",
            "tag": "General",
            "date": "2021-10-06T21:01:27.882Z",
            "__v": 0
        },
        {
            "_id": "61604e43a3e5a66c670bb0c2",
            "user": "615d4658f22350cf1c9a3d20",
            "title": "Hello2111",
            "description": "This is the description of the note 2",
            "tag": "General",
            "date": "2021-10-08T13:57:23.008Z",
            "__v": 0
        },
        {
            "_id": "615e0ea707dee7a8633ebd4b",
            "user": "615d4658f22350cf1c9a3d20",
            "title": "Hello2111",
            "description": "This is the description of note one.",
            "tag": "General",
            "date": "2021-10-06T21:01:27.882Z",
            "__v": 0
        },
        {
            "_id": "61604e43a3e5a66c670bb0c2",
            "user": "615d4658f22350cf1c9a3d20",
            "title": "Hello2111",
            "description": "This is the description of the note 2",
            "tag": "General",
            "date": "2021-10-08T13:57:23.008Z",
            "__v": 0
        },
        {
            "_id": "615e0ea707dee7a8633ebd4b",
            "user": "615d4658f22350cf1c9a3d20",
            "title": "Hello2111",
            "description": "This is the description of note one.",
            "tag": "General",
            "date": "2021-10-06T21:01:27.882Z",
            "__v": 0
        },
        {
            "_id": "61604e43a3e5a66c670bb0c2",
            "user": "615d4658f22350cf1c9a3d20",
            "title": "Hello2111",
            "description": "This is the description of the note 2",
            "tag": "General",
            "date": "2021-10-08T13:57:23.008Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;