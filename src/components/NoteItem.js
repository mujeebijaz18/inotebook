import React, { useContext } from 'react'
import noteContext from "../contextNotes/noteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-2">
                <div className="card-body">
                    <div className="d-flex bd-highlight">
                        <h5 className="card-title p-2 flex-grow-1 bd-highlight">{note.title}</h5>
                        <i className="far fa-edit p-2 bd-highlight" onClick={() => { updateNote(note) }}></i>
                        <i className="far fa-trash-alt p-2 bd-highlight" onClick={() => deleteNote(note._id)}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem
