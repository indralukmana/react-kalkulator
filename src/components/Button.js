import React from "react";

const Button = ({ name, type, onClickHandler }) => (
  <button name={name} className={type} onClick={e => onClickHandler(name, e)}>
    {name}
  </button>
);
export default Button;
