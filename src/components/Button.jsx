import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({
  primary = false,
  size = "medium",
  label,
  loading = false,
  onClick,
  disabled = false,
}) => {
  const baseClass = primary ? "button--primary" : "button--secondary";
  const sizeClass = `button--${size}`;
  const loadingClass = loading ? "button--loading" : "";

  return (
    <button
      type="button"
      className={["button", baseClass, sizeClass, loadingClass]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="button__spinner" />
      ) : (
        <span className="button__label">{label}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
