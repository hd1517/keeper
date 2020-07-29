import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const handleOnDelete = () => {
    props.onDelete(props.id);
  };

  const handleOnEdit = () => props.onEdit();

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span className="noteEdit" onClick={handleOnEdit}>
        EDIT
      </span>
      <button onClick={handleOnDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
