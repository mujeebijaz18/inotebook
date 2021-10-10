import React, { useContext, useEffect } from 'react'
import noteContext from "../contextNotes/noteContext";


const Profile = () => {
    const context = useContext(noteContext);
    const { data, getProfile, notes } = context;

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <div className="container">
            <h2 className="my-4">Account details</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>ID</td>
                        <td>{data._id}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Email</td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">34</th>
                        <td>Total Notes</td>
                        <td>{notes.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile
