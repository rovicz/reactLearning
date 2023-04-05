import React from "react";

const Input = ({ id, label, onChange, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </div>
  );
};

export default Input;
