import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const [hover, setHover] = useState(false);

  const handleOnDelete = () => props.onDelete(props.id);
  const handleOnEdit = () => props.onEdit();

  return (
    <div
      className="note"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {hover && (
        <span className="noteEdit" onClick={handleOnEdit}>
          EDIT
        </span>
      )}
      <button onClick={handleOnDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
