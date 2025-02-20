import React from "react";
import PropTypes from "prop-types";
import "./Badge.css";

export const Badge = ({ count, children, status, dot }) => {
  return (
    <div className="badge-wrapper">
      {children}
      {dot ? (
        <span className={`badge-dot badge-${status}`} />
      ) : (
        count > 0 && <span className="badge-count">{count}</span>
      )}
    </div>
  );
};

Badge.propTypes = {
  count: PropTypes.number,
  children: PropTypes.node,
  status: PropTypes.oneOf(["success", "warning", "error", "default"]),
  dot: PropTypes.bool,
};

Badge.defaultProps = {
  count: 0,
  children: null,
  status: "default",
  dot: false,
};
