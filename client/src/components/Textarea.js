import React from "react";

function Textarea(props) {
  const handleOnChange = (event) => {
    props.onChange(event);
  };

  return (
    <textarea
      name="content"
      onChange={handleOnChange}
      value={props.value}
      placeholder="Take a note..."
      rows={props.rows}
    />
  );
}

export default Textarea;
