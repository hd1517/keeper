import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import Input from "./formElements/Input";
import Textarea from "./formElements/Textarea";

const EditModal = (props) => {
  const [note, setNote] = useState({
    title: props.title,
    content: props.content,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("modalTextArea" + props.id).focus();
  };

  let date = new Date(props.time);
  let dateFormat =
    date.toLocaleDateString("en-GB") +
    " " +
    date.toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <Modal
      open={props.openState}
      onClose={() => props.handleOnClose(props.id, note)}
      aria-labelledby={"Note title:" + props.title}
      aria-describedby={"Note content:" + props.content}
    >
      <form className="editModal create-note" onSubmit={handleSubmit}>
        <Input onChange={handleOnChange} value={note.title} />
        <Textarea
          onChange={handleOnChange}
          value={note.content}
          rows={5}
          id={"modalTextArea" + props.id}
        />
        <div className="timeEdit">Edited: {dateFormat}</div>
        <Fab>
          <CloseIcon onClick={() => props.handleOnClose(props.id, note)} />
        </Fab>
      </form>
    </Modal>
  );
};

export default EditModal;
