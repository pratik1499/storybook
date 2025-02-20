import React, { useState } from "react";
import PropTypes from "prop-types";
import "./counter.css";

export const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="counter-controls">
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number,
};
