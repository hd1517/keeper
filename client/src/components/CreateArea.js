import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";
import Input from "./formElements/Input";
import Textarea from "./formElements/Textarea";

const CreateArea = (props) => {
  const createArea = useRef();
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleClickOutside = (event) => {
    // outside click
    if (!createArea.current.contains(event.target)) {
      if (note.title !== "" || note.content !== "") {
        submitNote();
      }
      setExpanded(false);
    }
  };

  const handleClickInside = () => setExpanded(true);

  useEffect(() => {
    // add on mousedown
    document.addEventListener("mousedown", handleClickOutside);

    // return function to be called when unmounted
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  // Prevent default when enter key is pressed on text input, then focus on textarea
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("createTextarea").focus();
  };

  // CREATE
  const submitNote = () => {
    axios
      .post("https://stormy-refuge-47765.herokuapp.com/notes/add", note)
      .then(() => {
        props.onAdd();
        setNote({
          title: "",
          content: "",
        });
      });
  };

  return (
    <form className="create-note" onSubmit={handleSubmit}>
      <div className="addNoteDiv" onClick={handleClickInside} ref={createArea}>
        {expanded && <Input onChange={handleChange} value={note.title} />}
        <Textarea
          onChange={handleChange}
          value={note.content}
          rows={expanded ? 3 : 1}
          id="createTextarea"
        />
      </div>
      <Zoom in={expanded}>
        <Fab>
          <CloseIcon onClick={handleClickOutside} />
        </Fab>
      </Zoom>
    </form>
  );
};

export default CreateArea;
