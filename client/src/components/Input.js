import React from "react";

const Input = (props) => {
  const handleOnChange = (event) => {
    props.onChange(event);
  };

  return (
    <input
      name="title"
      onChange={handleOnChange}
      value={props.value}
      placeholder="Title"
      autoComplete="off"
    />
  );
};

export default Input;
