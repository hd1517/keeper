import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const createArea = useRef();
    const [expanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleClickOutside = event => {
        // outside click
        if (!createArea.current.contains(event.target)) {
            if (note.title !== "" || note.content !== "") {
                submitNote();
            }
            setExpanded(false);
        }        
    }

    const handleClickInside = () => setExpanded(true);

    useEffect(() => {
        // add on mousedown
        document.addEventListener('mousedown', handleClickOutside);

        // return function to be called when unmounted
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    return (
        <div ref={createArea}>
            <form className="create-note">
                {expanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}

                <textarea
                    name="content"
                    onClick={handleClickInside}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={expanded ? 3 : 1}
                />
                <Zoom in={expanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;