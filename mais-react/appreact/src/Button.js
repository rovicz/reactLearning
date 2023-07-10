import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, ...props }) => {
  return (
    <button
      style={{ width: `${props.width}px`, height: `${props.width / 3}px` }}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
