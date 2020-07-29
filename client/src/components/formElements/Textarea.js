import React from "react";

const Textarea = (props) => {
  const { value, rows, id, onChange } = props;
  const handleOnChange = (event) => {
    onChange(event);
  };

  return (
    <textarea
      name="content"
      onChange={handleOnChange}
      value={value}
      placeholder="Take a note..."
      rows={rows}
      id={id}
    />
  );
};

export default Textarea;
