import React from "react";
import Modal from "@material-ui/core/Modal";
import Input from "./Input";
import Textarea from "./Textarea";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";

function EditModal(props) {
  return (
    <Modal
      open={props.openState}
      onClose={() => props.handleOnClose(props.id)}
      aria-labelledby={"Note title:" + props.title}
      aria-describedby={"Note content:" + props.content}
    >
      <form className="create-note editModal">
        <Input value={props.title} />
        <Textarea value={props.content} rows={5} />
        <Fab>
          <CloseIcon onClick={() => props.handleOnClose(props.id)} />
        </Fab>
      </form>
    </Modal>
  );
}

export default EditModal;
