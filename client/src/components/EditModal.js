import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Input from "./Input";
import Textarea from "./Textarea";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";

function EditModal(props) {
  const [note, setNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <Modal
      open={props.openState}
      onClose={() => props.handleOnClose(props.id, note)}
      aria-labelledby={"Note title:" + props.title}
      aria-describedby={"Note content:" + props.content}
    >
      <form className="editModal create-note">
        <Input onChange={handleOnChange} value={note.title} />
        <Textarea onChange={handleOnChange} value={note.content} rows={5} />
        <Fab>
          <CloseIcon onClick={() => props.handleOnClose(props.id, note)} />
        </Fab>
      </form>
    </Modal>
  );
}

export default EditModal;
