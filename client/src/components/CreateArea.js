import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
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
        <form className="create-note">
            <div className="addNoteDiv" onClick={handleClickInside} ref={createArea}>
                {expanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                        autoComplete="off"
                    />
                )}

                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={expanded ? 3 : 1}
                />
            </div>
            <Zoom in={expanded}>
                <Fab >
                    <CloseIcon onClick={handleClickOutside} />
                </Fab>
            </Zoom>
        </form>

    );
}

export default CreateArea;