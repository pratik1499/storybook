import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

export const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  variant,
  disabled,
}) => {
  return (
    <div className={`textfield ${variant}`}>
      {label && <label className="textfield-label">{label}</label>}
      <input
        type="text"
        className="textfield-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  label: "",
  placeholder: "",
  value: "",
  onChange: undefined,
  variant: "outlined",
  disabled: false,
};
