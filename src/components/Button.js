import React from "react";

const Button = ({ name, type, className, onClickHandler }) => (
  <button
    name={name}
    type={type}
    className={className}
    onClick={e => onClickHandler(name, e)}
  >
    {name}
  </button>
);
export default Button;
