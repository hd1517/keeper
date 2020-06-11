import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const [display, setDisplay] = useState("none");

  const handleOnDelete = () => {
    props.onDelete(props.id);
  };
  const handleOnEdit = () => props.onEdit();

  return (
    <div
      className="note"
      onMouseEnter={() => setDisplay("block")}
      onMouseLeave={() => setDisplay("none")}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span
        style={{ display: display }}
        className="noteEdit"
        onClick={handleOnEdit}
      >
        EDIT
      </span>
      <button onClick={handleOnDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
