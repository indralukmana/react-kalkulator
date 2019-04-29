import React from "react";

const Input = ({ value, className }) => (
  <input readOnly className={className} type="text" value={value} />
);

export default Input;
