import React from "react";

const Input = (props) => {
  const { value, onChange } = props;
  const handleOnChange = (event) => {
    onChange(event);
  };

  return (
    <input
      name="title"
      onChange={handleOnChange}
      value={value}
      placeholder="Title"
      autoComplete="off"
    />
  );
};

export default Input;
