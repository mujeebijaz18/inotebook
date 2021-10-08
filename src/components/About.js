import React, { useContext } from 'react';
import noteContext from '../contextNotes/noteContext';

const About = () => {
    const a = useContext(noteContext);
    return (
        <>
            This is about {a.name} and the purpose is : {a.description}
        </>
    )
}

export default About
